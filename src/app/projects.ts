// projects.ts

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  image: string;
  tags: string[]; // detailed tech/design tags for display
  categories: string[]; // broad categories for filtering
  github?: string;
  featured: boolean;
  screenshots?: string[];
  slug: string;
  clientType?: "Enterprise" | "Startup" | "Agency" | "Small Business";
  results?: string[]; // Array of outcome statements
  challenge?: string; // Problem solved
  solution?: string; // How it was solved
  workType: "professional" | "freelance"; // Categorize professional day job vs freelance projects
  businessImpact?: string; // Key business outcome or value delivered
}

export type { Project };

export const projects: Project[] = [
  {
    id: 1,
    name: "A Miracle",
    description:
      "Full-service e-commerce solution with custom Stripe payment integration, Zoho CRM integration, complete branding, and in-house e-commerce management system.",
    url: "https://amiracleco.com",
    image: "/images/projects/amg.png",
    categories: ["Full-Stack Development", "Design & Branding", "E-Commerce"],
    tags: ["Next.js", "TypeScript", "Stripe", "Zoho", "Tailwind CSS", "Figma"],
    github: "#",
    featured: true,
    slug: "a-miracle",
    clientType: "Small Business",
    workType: "professional",
    challenge:
      "Client needed a cost-effective e-commerce solution with payment processing and CRM integration, eliminating expensive third-party platforms.",
    solution:
      "Built a custom Next.js e-commerce platform with Stripe for payments, Zoho CRM integration for customer management, and complete branding package.",
    businessImpact:
      "Saved client thousands in monthly platform fees while enabling full control over customer data and business operations.",
    results: [
      "Eliminated expensive third-party e-commerce platform fees",
      "Full ownership of customer data and business operations",
      "Seamless payment processing with Stripe",
      "Automated CRM integration for customer management",
    ],
  },
  {
    id: 2,
    name: "Garnica Cleaning",
    description:
      "Professional cleaning service website with online booking, service packages, and customer testimonials to drive conversions.",
    url: "https://garnicacleaning.com",
    image: "/images/projects/garnica.png",
    categories: ["Full-Stack Development"],
    tags: ["Wix"],
    github: "#",
    featured: false,
    slug: "garnica-cleaning",
    clientType: "Small Business",
    workType: "professional",
    businessImpact:
      "Increased online bookings and established professional digital presence for local cleaning business.",
  },
  {
    id: 3,
    name: "AORUX",
    description:
      "Modern creative agency website showcasing portfolio work, services, and team capabilities with engaging animations.",
    url: "https://aorux.com",
    image: "/images/projects/aorux.png",
    categories: ["Full-Stack Development"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    featured: false,
    slug: "aorux",
    clientType: "Agency",
    workType: "professional",
    businessImpact:
      "Enhanced agency's online presence with modern, performant website that showcases capabilities.",
  },
  {
    id: 4,
    name: "JC Masonry & Concrete",
    description:
      "Professional contractor website featuring project galleries, service descriptions, and contact forms for lead generation.",
    url: "https://jcmasonryconcretedesign.com/",
    image: "/images/projects/jc-masonry.png",
    categories: ["Full-Stack Development"],
    tags: ["WordPress"],
    github: "#",
    featured: false,
    slug: "jc-masonry",
    clientType: "Small Business",
    workType: "professional",
    businessImpact:
      "Generated consistent lead flow through optimized contact forms and project gallery showcasing quality work.",
  },
  {
    id: 5,
    name: "FlightLogger",
    description:
      "A comprehensive web application for logging and tracking flight hours, designed for pilots and aviation enthusiasts with automated reporting features.",
    url: "https://flightlogger.app",
    image: "/images/projects/flight-logger.png",
    categories: ["Full-Stack Development", "Design & Branding"],
    tags: [
      "Figma",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    github: "#",
    featured: true,
    slug: "flight-logger",
    clientType: "Startup",
    workType: "freelance",
    challenge:
      "Pilots needed a modern, intuitive solution to track flight hours and maintain accurate logbooks for certification requirements.",
    solution:
      "Built a full-stack application with automated calculations, FAA-compliant reporting, and cloud sync capabilities.",
    businessImpact:
      "Enabled pilots to maintain digital logbooks with automated compliance tracking and backup.",
  },
  {
    id: 6,
    name: "ShortFinal",
    description:
      "A centralized social platform for flight simulation enthusiasts to log flights, share experiences, and interact with their simulation communities.",
    url: "https://shortfinal.app",
    image: "/images/projects/short-final.png",
    categories: ["Full-Stack Development", "Design & Branding"],
    tags: [
      "Figma",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Laravel",
    ],
    github: "#",
    featured: false,
    slug: "short-final",
    clientType: "Startup",
    workType: "freelance",
    challenge:
      "Flight sim community lacked a dedicated platform to connect, share achievements, and track virtual flight hours.",
    solution:
      "Created a social network specifically for flight simmers with logbook integration, community features, and achievement tracking.",
    businessImpact:
      "Built engaged community of flight simulation enthusiasts with recurring user engagement.",
  },
  {
    id: 7,
    name: "Swim School Marketing Collateral",
    description:
      "Complete branding and marketing materials suite for a swim school, including flyers, brochures, and social media graphics.",
    url: "#",
    image: "/images/projects/referral.png",
    categories: ["Design & Branding"],
    tags: ["Illustrator", "Photoshop"],
    github: "#",
    featured: false,
    slug: "swim-school-marketing",
    clientType: "Small Business",
    workType: "freelance",
    businessImpact:
      "Increased enrollment through professional marketing materials and consistent brand presence.",
  },
  {
    id: 8,
    name: "Portfolio",
    description:
      "My personal portfolio website showcasing my work and skills as a software engineer.",
    url: "https://giovannimedrano.com",
    image: "/images/projects/portfolio.png",
    categories: ["Full-Stack Development"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    featured: false,
    slug: "portfolio",
    clientType: "Small Business",
    workType: "freelance",
  },
];

export default projects;
