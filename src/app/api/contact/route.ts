import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

interface ContactPayload {
  name: string
  email: string
  company?: string
  message: string
}

async function appendToSheet(data: ContactPayload) {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'Europe/Warsaw' })

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: 'Sheet1!A:E',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[timestamp, data.name, data.email, data.company ?? '', data.message]],
    },
  })
}

async function sendTelegramMessages(data: ContactPayload) {
  const token = process.env.TG_BOT_TOKEN
  const chatIds = (process.env.TG_BOT_CHAT_IDS ?? '').split(',').map(id => id.trim()).filter(Boolean)

  if (!token || chatIds.length === 0) return

  const text =
    `📬 *New Contact Form Submission*\n\n` +
    `👤 *Name:* ${escapeMarkdown(data.name)}\n` +
    `📧 *Email:* ${escapeMarkdown(data.email)}\n` +
    (data.company ? `🏢 *Company:* ${escapeMarkdown(data.company)}\n` : '') +
    `\n💬 *Message:*\n${escapeMarkdown(data.message)}`

  await Promise.all(
    chatIds.map(chatId =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'MarkdownV2' }),
      })
    )
  )
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, '\\$&')
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json()

    const { name, email, message } = body
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const [sheetsResult, tgResult] = await Promise.allSettled([
      appendToSheet(body),
      sendTelegramMessages(body),
    ])

    if (sheetsResult.status === 'rejected') {
      console.error('[contact] Google Sheets error:', sheetsResult.reason)
    }
    if (tgResult.status === 'rejected') {
      console.error('[contact] Telegram error:', tgResult.reason)
    }

    // Return success as long as at least one channel worked, or both failed gracefully
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
