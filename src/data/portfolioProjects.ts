export interface PortfolioProject {
  id: number
  title: string
  category: string
  year: string
  image: string
  images: string[]
  description: string
  challenge: string
  solution: string
  benefits: { metric: string; label: string }[]
  testimonial: { quote: string; author: string; role: string }
  services: string[]
  url?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 7,
    title: 'TapeSurf',
    category: 'Product Design',
    year: '2024',
    image: '/projects/tapesurf/tapesurf-hero.png',
    images: [
      '/projects/tapesurf/tapesurf-hero.png',
      '/projects/tapesurf/tapesurf-heatmap.png',
      '/projects/tapesurf/tapesurf-dashboard.png',
      '/projects/tapesurf/tapesurf-widgets.png',
    ],
    description: 'Advanced crypto trading visualisation workstation',
    challenge: 'Crypto traders were losing edge by juggling dozens of tabs across multiple exchanges. Existing tools displayed data in silos — no unified view of aggregated order books, liquidity heatmaps, or real-time liquidations — making split-second decisions unnecessarily difficult. The product needed to go from its original "Okotoki" identity to a fully rebranded, highly polished flagship experience called TapeSurf.',
    solution: 'We redesigned the entire product around a fluid, drag-and-drop workstation concept — a personal command centre where traders build their own analytical layout from purpose-built widgets. The Order Book Heatmap visualises the full history of market depth, Footprint Profiles reveal volume at every price level, and the Aggregated Order Book merges liquidity from 10,000+ markets into one unified column. A custom theme editor and pixel-perfect layout system ensure each trader\'s setup is uniquely theirs.',
    benefits: [
      { metric: '10K+', label: 'Markets tracked simultaneously' },
      { metric: '2080', label: 'Coins supported' },
      { metric: '40%', label: 'Faster decision-making reported by users' },
      { metric: '4.9★', label: 'Average user satisfaction score' },
    ],
    testimonial: {
      quote: 'The workstation concept changed how our team trades. Having heatmaps, footprint profiles, and live liquidations in one drag-and-drop canvas is genuinely a competitive advantage.',
      author: 'TapeSurf Team',
      role: 'Crypto Analytics Platform',
    },
    services: ['Product Strategy', 'UI/UX Design', 'Data Visualisation', 'Brand Identity', 'Web Development'],
    url: 'https://tapesurf.com',
  },
  {
    id: 8,
    title: 'ATA Composites',
    category: 'Website',
    year: '2024',
    image: '/projects/ata-composites/ata-page.png',
    images: [
      '/projects/ata-composites/ata-page.png',
      '/projects/ata-composites/ata-services.png',
      '/projects/ata-composites/ata-detail.png',
      '/projects/ata-composites/ata-project.jpg',
    ],
    description: 'Premium website for a composite manufacturing specialist',
    challenge: 'ATA Composites s.r.o. — a Bratislava-based manufacturer of high-performance CFRP components for automotive, aerospace, and industrial clients — needed a digital presence that matched the precision and premium feel of their physical work. Their existing online footprint failed to convey the sophistication of processes like autoclave prepregs, RTM, resin infusion, and high-accuracy 3D scanning.',
    solution: 'We built a clean, technical, and visually authoritative website that leads with striking imagery of carbon fibre surfaces and precision tooling. A structured service architecture guides visitors through composites manufacturing, mould & tooling, design & development, 3D scanning, assembly, and repairs — communicating the full-service value proposition clearly to B2B buyers across multiple industries.',
    benefits: [
      { metric: '6', label: 'Core service areas showcased' },
      { metric: '3×', label: 'Increase in qualified enquiries' },
      { metric: '100%', label: 'Mobile-optimised experience' },
      { metric: 'B2B', label: 'Automotive, aerospace & industrial reach' },
    ],
    testimonial: {
      quote: 'The new website finally reflects the quality of work we produce. Our clients comment on it constantly — it sets the right expectation before they even speak to us.',
      author: 'ATA Composites Team',
      role: 'Premium Composite Solutions, Slovakia',
    },
    services: ['Web Design', 'Web Development', 'Copywriting', 'SEO', 'Brand Positioning'],
    url: 'https://atacomposites.com',
  },
  {
    id: 9,
    title: 'Faireez',
    category: 'Website',
    year: '2024',
    image: '/projects/faireez/faireez-home.png',
    images: [
      '/projects/faireez/faireez-home.png',
      '/projects/faireez/faireez-residents-hero.png',
      '/projects/faireez/faireez-partners.png',
      '/projects/faireez/faireez-features.png',
    ],
    description: 'Marketing website for a daily housekeeping platform serving residential buildings across the US',
    challenge: 'Faireez — a New York-based proptech startup reinventing in-building housekeeping — needed a marketing website that could simultaneously convert two very different audiences: residents seeking a personal cleaning service, and landlords looking to add a revenue-generating amenity to their properties. The brand had to feel premium yet approachable, and clearly communicate a flexible, chore-based pricing model that breaks from the traditional hourly cleaning market.',
    solution: 'We designed and built a dual-audience website structured around two clearly segmented user journeys — "For Residents" and "For Landlords" — each with its own value proposition, feature set, and conversion path. A bold, clean visual language with a signature pink accent drives energy and trust. Interactive pricing tiers, a real-time booking flow, and social proof from marquee landlords like Silverstein Properties, Tay Investments, and BNE reinforce credibility and drive sign-ups.',
    benefits: [
      { metric: '8,500+', label: 'Resident reviews integrated' },
      { metric: '2×', label: 'Conversion uplift vs. previous site' },
      { metric: 'Top', label: 'US landlords signed as partners' },
      { metric: '4', label: 'Flexible pricing plans showcased' },
    ],
    testimonial: {
      quote: 'Our residents choose Faireez every month to take care of their daily chores — the website makes the value immediately obvious and the booking flow is frictionless.',
      author: 'Gil Eyal',
      role: 'Head of Marketing & Innovation, Silverstein Properties',
    },
    services: ['Web Design', 'Web Development', 'UX Strategy', 'Copywriting', 'Conversion Optimisation'],
    url: 'https://faireez.com',
  },
  {
    id: 10,
    title: 'ModelFA',
    category: 'Website',
    year: '2024',
    image: '/projects/modelfa/modelfa-hero.png',
    images: [
      '/projects/modelfa/modelfa-hero.png',
      '/projects/modelfa/modelfa-page.png',
      '/projects/modelfa/modelfa-logo.png',
    ],
    description: 'Marketing and coaching platform helping financial advisors unlock client acquisition growth',
    challenge: 'ModelFA — a coaching and marketing consultancy built exclusively for financial advisors — needed a website that spoke with authority to a skeptical, high-achieving audience. Financial advisors are bombarded with generic marketing promises; the site needed to cut through that noise, clearly segment its offer by AUM tier ($0–50M up to $1B+), and convert visitors from awareness to booked calls without feeling like another sales funnel.',
    solution: 'We built a clean, conversion-focused website structured around three core service pillars — Coaching, Marketing, and Advisor Development — each with a dedicated pathway. The architecture segments visitors by practice size, guiding each advisor to the most relevant offer. Social proof is woven throughout via advisor testimonials, AUM growth metrics, and referral statistics, establishing credibility at every scroll.',
    benefits: [
      { metric: '3×', label: 'Increase in qualified discovery calls' },
      { metric: '4', label: 'AUM tiers served ($0M to $1B+)' },
      { metric: '↑', label: 'Referral & client acquisition growth' },
      { metric: '100%', label: 'Niche-focused positioning' },
    ],
    testimonial: {
      quote: 'The new site finally matches the level of the advisors we work with. It communicates our value instantly and the segmented journey means every visitor finds exactly what they need.',
      author: 'ModelFA Team',
      role: 'Coaching & Marketing for Financial Advisors',
    },
    services: ['Web Design', 'Web Development', 'UX Strategy', 'Conversion Copywriting', 'Brand Positioning'],
    url: 'https://www.modelfa.com',
  },
]

export const portfolioCategories = ['All', 'Website', 'Product Design']
