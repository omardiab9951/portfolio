import type { Project, Skill, SocialLink } from '../types/content'

export const site = {
  brand: 'omar.dev',
  name: 'Omar Diab',
  role: 'AI/ML Developer',
  location: 'Cairo, Egypt',
  availability: 'OPEN TO INTERNSHIPS · CAIRO, EGYPT',
  headline: 'Building LLM/RAG Applications | Data Analyst Trainee @ DEPI | Data Science & AI Student @ SUT',
  description: (
    <>
      I build <strong>LLM/RAG applications</strong> and applied AI systems, while training in{' '}
      <strong>Data Analytics at DEPI</strong> and studying <strong>Data Science & AI at SUT.</strong>{' '}
      I like taking ideas from raw data and experiments all the way to usable applications.
    </>
  ),
  profileAlt: 'Omar - AI/ML Developer',
} as const

export const projects: Project[] = [
  {
    number: '01 — COMPUTER VISION',
    category: 'COMPUTER VISION',
    status: '2nd / 38 · ARIIF 2026',
    name: 'SafeVision AI',
    description: 'A full-stack AI workplace safety monitoring system built around YOLOv8. The system detects PPE compliance and fatigue, covering eight PPE classes and real-time inference. The project went through four model iterations and includes custom augmentation approaches, an uncertainty-aware confidence scoring engine, and a business case grounded in the Egyptian regulatory context.',
    tags: ['YOLOv8', 'YOLOv8m', 'SwinV2', 'Computer Vision', 'Object Detection', 'Image Processing', 'Custom Augmentation'],
    link: 'https://github.com/omardiab9951/Safe-Vision-AI-1',
    linkLabel: 'GitHub repository ↗',
    featured: true,
  },
  {
    number: '02 — LLM / RAG',
    category: 'LLM / RAG',
    status: 'Public',
    name: 'Qanoony',
    arabicName: 'قانوني',
    description: 'A bilingual Arabic/English AI legal assistant for Egyptian employers and startup founders. Uses retrieval-augmented generation to ground answers in Egyptian employment and company-formation law.',
    tags: ['RAG', 'LangChain', 'Groq', 'Llama 3.3', 'ChromaDB', 'FastAPI'],
    link: 'https://github.com/omardiab9951/Qanoony',
    linkLabel: 'View repository →',
  },
  {
    number: '03 — APPLICATION',
    category: 'APPLICATION',
    status: 'Hackathon Finalist',
    name: 'Dopa Pal',
    description: 'An ambient desktop task companion designed to make task initiation easier through an unobtrusive desktop experience. Evolved from FirstStep → Anchor → Dopa Pal into a complete product with its own UI/UX system.',
    tags: ['Electron', 'React', 'TypeScript', 'FastAPI'],
    link: 'https://github.com/omardiab9951/Dopa_Pal',
    linkLabel: 'View repository →',
  },
  {
    number: '04 — DATA ANALYTICS',
    category: 'DATA ANALYTICS',
    status: '100 / 100',
    name: 'Superstore Sales Analytics',
    description: 'An end-to-end OOP data analytics pipeline for retail sales data, covering data cleaning, exploratory analysis, feature engineering, correlation analysis, visualizations, and automated KPI reporting.',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OOP', 'EDA'],
    link: 'https://github.com/omardiab9951/Superstore-Sales-Analytics',
    linkLabel: 'View repository →',
  },
]

export const skills: Skill[] = [
  { icon: 'AI', name: 'Machine Learning', description: 'Machine Learning, model evaluation, feature engineering, statistics and model diagnostics.' },
  { icon: 'DA', name: 'Data Analysis', description: 'Data cleaning, exploratory analysis, feature engineering, visualization and KPI reporting.' },
  { icon: 'LLM', name: 'LLMs & RAG', description: 'RAG, LangChain, Hugging Face, Transformers, FAISS, ChromaDB and sentence-transformers.' },
  { icon: 'DS', name: 'Data Science', description: 'Pandas, NumPy, exploratory data analysis, visualization and automated reporting.' },
  { icon: 'API', name: 'Backend & APIs', description: 'FastAPI, Python, REST APIs, structured outputs and AI application backends.' },
  { icon: 'DEV', name: 'Development', description: 'React, TypeScript, Electron, OOP, web programming and workflow automation.' },
]

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const

export const socialLinks: SocialLink[] = [
  { label: 'GitHub ↗', href: 'https://github.com/omardiab9951', external: true },
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/omar9951/', external: true },
  { label: 'Email →', href: 'mailto:omarkamaldiab9951@gmail.com' },
]

export const aboutParagraphs = [
  <>I'm an <strong>AI/ML Developer</strong>, a <strong>Data Analyst Trainee at DEPI</strong>, and a <strong>Data Science & AI student</strong> at SUT — ElSewedy University of Technology / Polytechnic of Egypt, working toward a B.Tech in Computer Science Technology with a major in Data Science and Artificial Intelligence.</>,
  <>My work spans <strong>Machine Learning, LLM/RAG applications, Data Science, Data Analytics, and Computer Vision.</strong> I enjoy understanding the fundamentals while also building systems that can actually be used outside a notebook.</>,
  <>On the AI side, I've worked with retrieval pipelines, FAISS, sentence-transformers, Hugging Face models, LangChain, structured output parsing, and YOLO-based computer vision systems.</>,
  <>Beyond coursework, I've participated in hackathons and competitions, including projects that reached the finalist stage and placed competitively.</>,
] as const
