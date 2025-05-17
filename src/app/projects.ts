// projects.ts

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  image: string;
  tags: string[]; // detailed tech/design tags for display
  categories: string[]; // broad categories for filtering (Website, Design, Branding)
  github?: string;
  featured: boolean;
  screenshots?: string[];
  slug: string;
}

export type { Project };

export const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio",
    description:
      "My personal portfolio website showcasing my work and skills as a software engineer.",
    url: "https://giovannimedrano.com",
    image: "/images/projects/portfolio.png",
    categories: ["Website"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    featured: false,
    slug: "portfolio",
  },
  {
    id: 2,
    name: "FlightLogger",
    description:
      "A web application for logging and tracking flight hours, designed for pilots and aviation enthusiasts.",
    url: "https://flightlogger.app",
    image: "/images/projects/flight-logger.png",
    categories: ["Website", "Design"],
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
  },
  {
    id: 3,
    name: "ShortFinal",
    description:
      "A centralized platform for flight simulation enthusiasts to log and share their flight experiences and interact with their flight simulation communities.",
    url: "https://shortfinal.app",
    image: "/images/projects/short-final.png",
    categories: ["Website", "Design"],
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
    featured: true,
    slug: "short-final",
  },
  {
    id: 4,
    name: "Garnica Cleaning",
    description:
      "A cleaning service website that allows users to book cleaning services online.",
    url: "https://garnicacleaning.com",
    image: "/images/projects/garnica.png",
    categories: ["Website"],
    tags: ["Wix Friendly"],
    github: "#",
    featured: false,
    slug: "garnica-cleaning",
  },
  {
    id: 5,
    name: "Swim School Marketing Collateral",
    description:
      "A collection of marketing materials for a swim school, including flyers, brochures, and social media graphics.",
    url: "#",
    image: "/images/projects/referral.png",
    categories: ["Branding", "Design"],
    tags: ["Illustrator", "Photoshop"],
    github: "#",
    featured: false,
    slug: "swim-school-marketing",
  },
  {
    id: 6,
    name: "AORUX",
    description:
      "A creative agency website that showcases the agency's work and services.",
    url: "https://aorux.com",
    image: "/images/projects/aorux.png",
    categories: ["Website"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    featured: false,
    slug: "aorux",
  },
  {
    id: 7,
    name: "AMIRACLE CO",
    description:
      "A website for a brand that specializes in food and beverage products, showcasing their offerings and values.",
    url: "https://amiracleco.com",
    image: "/images/projects/amg.png",
    categories: ["Website", "Branding"],
    tags: ["Packaging / Labeling"],
    github: "#",
    featured: false,
    slug: "amiracle-co",
  },
  {
    id: 8,
    name: "JC Masonry & Concrete",
    description:
      "A website for a masonry and concrete company, showcasing their services and projects.",
    url: "https://jcmasonryconcretedesign.com/",
    image: "/images/projects/jc-masonry.png",
    categories: ["Website"],
    tags: ["Wordpress Friendly"],
    github: "#",
    featured: false,
    slug: "jc-masonry",
  },
];

export default projects;
