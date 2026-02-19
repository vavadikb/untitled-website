export interface Project {
  slug: string
  title: string
  category: string
  year: string
  image: string
  heroImage: string
  description: string
  client: string
  services: string[]
  challenge: string
  solution: string
  gallery: string[]
  nextProject?: string
}

export const projects: Project[] = [
  {
    slug: 'luminary',
    title: 'Luminary',
    category: 'Brand Identity & Web',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=1000&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80',
    description: 'A complete brand transformation for a luxury lighting company, featuring an immersive e-commerce experience.',
    client: 'Luminary Inc.',
    services: ['Brand Strategy', 'Visual Identity', 'Web Design', 'E-Commerce Development'],
    challenge: 'Luminary needed to transition from a traditional retail brand to a premium digital-first company. Their existing presence failed to convey the craftsmanship and luxury of their products.',
    solution: 'We developed a sophisticated visual identity that emphasizes light and shadow, paired with an immersive web experience featuring interactive 3D product views and ambient animations that showcase each piece.',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=800&fit=crop&q=80',
    ],
    nextProject: 'nexus-labs',
  },
  {
    slug: 'nexus-labs',
    title: 'Nexus Labs',
    category: 'E-Commerce Platform',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=1000&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&q=80',
    description: 'A cutting-edge e-commerce platform for a tech accessories brand with a focus on seamless user experience.',
    client: 'Nexus Labs Corp.',
    services: ['UX Research', 'Web Design', 'Full-Stack Development', 'Performance Optimization'],
    challenge: 'The client was struggling with high cart abandonment rates and a confusing checkout process that was costing them significant revenue.',
    solution: 'We reimagined the entire shopping journey with a streamlined checkout, intelligent product recommendations, and real-time inventory updates. The result: 40% reduction in cart abandonment.',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=800&fit=crop&q=80',
    ],
    nextProject: 'aether',
  },
  {
    slug: 'aether',
    title: 'Aether',
    category: 'Product Design & Dev',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80',
    description: 'A SaaS dashboard for climate data visualization, making complex environmental data accessible and actionable.',
    client: 'Aether Environmental',
    services: ['Product Strategy', 'UI/UX Design', 'Data Visualization', 'React Development'],
    challenge: 'Environmental scientists needed a tool to visualize and share complex climate data with stakeholders who lack technical backgrounds.',
    solution: 'We created an intuitive dashboard with customizable data visualizations, automated reporting, and collaborative features that bridge the gap between scientists and decision-makers.',
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
    ],
    nextProject: 'prism-studio',
  },
  {
    slug: 'prism-studio',
    title: 'Prism Studio',
    category: 'Creative Direction',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1000&fit=crop&q=80',
    heroImage: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=1920&h=1080&fit=crop&q=80',
    description: 'A bold rebrand and digital presence for a creative photography studio pushing the boundaries of visual art.',
    client: 'Prism Studio',
    services: ['Creative Direction', 'Brand Identity', 'Web Design', 'Motion Design'],
    challenge: 'An established photography studio wanted to attract a younger, more experimental clientele while maintaining their reputation for quality.',
    solution: 'We developed a dynamic visual identity with generative elements and an interactive portfolio that treats each project as an immersive experience, showcasing their work in unexpected ways.',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505739998589-00fc191ce01d?w=1200&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80',
    ],
    nextProject: 'luminary',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug)
}
