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
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: 'Meridian',
    category: 'Brand Identity',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Complete rebrand for a fintech startup',
    challenge: 'Meridian needed to stand out in a crowded fintech market while building trust with both young professionals and institutional investors. Their existing brand felt outdated and failed to communicate their innovative approach to financial services.',
    solution: 'We developed a clean, geometric visual language with a sophisticated color palette. The new identity system includes logo, typography, iconography, and comprehensive brand guidelines that work across all touchpoints.',
    benefits: [
      { metric: '45%', label: 'Increase in brand recognition' },
      { metric: '3x', label: 'More investor inquiries' },
      { metric: '$2.5M', label: 'Series A funding secured' },
      { metric: '60%', label: 'Faster sales cycle' },
    ],
    testimonial: {
      quote: 'The rebrand completely transformed how investors perceive us. We closed our Series A within 3 months of launching the new identity.',
      author: 'Sarah Chen',
      role: 'CEO, Meridian',
    },
    services: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Digital Assets'],
  },
  {
    id: 2,
    title: 'Noir Studio',
    category: 'Website',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=1000&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'E-commerce platform for fashion brand',
    challenge: 'Noir Studio was losing sales to competitors with better online experiences. Their existing website was slow, hard to navigate, and did not reflect their luxury brand positioning.',
    solution: 'Custom Shopify development with unique product pages, seamless checkout flow, and integration with inventory management systems. We focused on creating an immersive shopping experience that mirrors the in-store feel.',
    benefits: [
      { metric: '180%', label: 'Increase in online sales' },
      { metric: '35%', label: 'Higher average order value' },
      { metric: '2.5s', label: 'Page load time (from 8s)' },
      { metric: '45%', label: 'Lower cart abandonment' },
    ],
    testimonial: {
      quote: 'Our online revenue now exceeds our physical stores. The website has become our primary sales channel.',
      author: 'Marcus Webb',
      role: 'Founder, Noir Studio',
    },
    services: ['E-Commerce Development', 'UX Design', 'Shopify Integration', 'Payment Systems'],
  },
  {
    id: 3,
    title: 'Apex Ventures',
    category: 'Landing Page',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Investment platform launch',
    challenge: 'Apex Ventures was launching a new fund targeting tech startups but had no online presence. They needed to quickly establish credibility and generate qualified leads.',
    solution: 'Minimalist design focused on credibility and clear messaging. Interactive portfolio showcase and streamlined contact forms with smart lead qualification.',
    benefits: [
      { metric: '12%', label: 'Visitor to lead conversion' },
      { metric: '50+', label: 'Startup applications in month 1' },
      { metric: '8', label: 'Deals closed from website leads' },
      { metric: '$15M', label: 'Total investment deployed' },
    ],
    testimonial: {
      quote: 'The landing page paid for itself within the first week. We are now receiving more quality deal flow than ever.',
      author: 'James Liu',
      role: 'Managing Partner, Apex Ventures',
    },
    services: ['Landing Page Design', 'Copywriting', 'Lead Generation', 'Analytics Setup'],
  },
  {
    id: 4,
    title: 'Flow App',
    category: 'Product Design',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Productivity app for remote teams',
    challenge: 'Flow needed a complete redesign of their productivity app. User retention was low and the interface was confusing, leading to poor reviews and high churn.',
    solution: 'User-centered design process with extensive research and testing. Clean interface with powerful features hidden behind simple interactions. Focus on reducing cognitive load.',
    benefits: [
      { metric: '4.8', label: 'App Store rating (from 3.2)' },
      { metric: '50K+', label: 'Downloads in 6 months' },
      { metric: '65%', label: 'Improvement in retention' },
      { metric: '40%', label: 'Increase in daily active users' },
    ],
    testimonial: {
      quote: 'Users are actually enjoying our app now. The redesign completely changed how people perceive Flow.',
      author: 'Anna Park',
      role: 'Product Lead, Flow',
    },
    services: ['Product Design', 'UX Research', 'UI Design', 'Prototyping'],
  },
  {
    id: 5,
    title: 'Artisan Coffee',
    category: 'E-Commerce',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Online store for specialty coffee',
    challenge: 'Artisan Coffee wanted to launch direct-to-consumer sales but struggled to differentiate from larger competitors. They needed a way to tell their story and build customer loyalty.',
    solution: 'Story-driven e-commerce experience with subscription options, detailed origin information, and brewing guides. Each product page tells the story of the farmers and the journey of the beans.',
    benefits: [
      { metric: '85%', label: 'Subscription retention rate' },
      { metric: '200%', label: 'Increase in customer LTV' },
      { metric: '3.5x', label: 'Higher repeat purchase rate' },
      { metric: '25K', label: 'Email subscribers in year 1' },
    ],
    testimonial: {
      quote: 'Our customers feel connected to our story now. The subscription business has completely transformed our revenue model.',
      author: 'David Torres',
      role: 'Owner, Artisan Coffee',
    },
    services: ['E-Commerce Design', 'Subscription System', 'Content Strategy', 'Email Marketing'],
  },
  {
    id: 6,
    title: 'Kinetic',
    category: 'Website',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop&q=80',
    ],
    description: 'Corporate website redesign',
    challenge: 'Kinetic corporate website was outdated, slow, and failing to generate leads. The company was losing deals because prospects did not take them seriously after seeing the website.',
    solution: 'Complete redesign with focus on user experience, clear service presentation, and optimized conversion paths. Performance optimization reduced load times by 60%.',
    benefits: [
      { metric: '90%', label: 'Increase in lead generation' },
      { metric: '60%', label: 'Faster page load time' },
      { metric: '3x', label: 'More time spent on site' },
      { metric: '40%', label: 'Higher conversion rate' },
    ],
    testimonial: {
      quote: 'Prospects now come to meetings already impressed. The website does half the selling for us.',
      author: 'Michael Brown',
      role: 'VP Sales, Kinetic',
    },
    services: ['Website Redesign', 'Performance Optimization', 'SEO', 'CMS Development'],
  },
]

export const portfolioCategories = ['All', 'Website', 'E-Commerce', 'Brand Identity', 'Landing Page', 'Product Design']
