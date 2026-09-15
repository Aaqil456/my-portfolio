// All of the site's content lives here. Edit this file to update the portfolio.
import mybudgetTrack from '../assets/img/mybudget-track.jpg';
import portrait from '../assets/img/portrait.jpg';
import sentysisImage from '../assets/img/sentysis_image.jpg';
import vrShooter from '../assets/img/vr-shooter.jpg';

export const profile = {
  name: 'Aaqil Ahamad',
  role: 'Software Engineer',
  location: 'Kuala Lumpur, MY',
  timeZone: 'Asia/Kuala_Lumpur',
  email: 'aaqilahamad456@gmail.com',
  github: 'https://github.com/Aaqil456',
  linkedin: 'https://www.linkedin.com/in/aaqil-ahamad-8581923a5',
  portrait,
  intro:
    'Software engineer in Kuala Lumpur working across full-stack web, AI automation and Web3. Right now I’m the sole developer at Sentysis, building a production Web3 platform from the database schema to the smart contracts.',
  about: [
    'I’m a software engineer with two years of hands-on development experience across full-stack web applications, AI automation pipelines and blockchain-integrated platforms.',
    'At Sentysis I work directly with the founder as the only developer on the product — owning the React/TypeScript frontend, the Supabase backend, on-chain Solidity integration and the CI/CD pipeline that ships it.',
    'Before writing production code, I was a business analyst: gathering requirements, prototyping user flows and running SIT/UAT cycles. That background makes me good at turning stakeholder direction into software that is working, tested and ready to release — and comfortable owning the whole path from architecture to production.',
  ],
};

export const stats = [
  { value: '2 yrs', label: 'Hands-on software development' },
  { value: 'Solo', label: 'Developer on a production Web3 platform' },
  { value: '24/7', label: 'Availability sustained on a custom Telegram bot' },
  { value: '3.60', label: 'CGPA · B.IT (Hons.), UKM' },
];

export const capabilities: { title: string; description: string }[] = [
  {
    title: 'Full-stack product engineering',
    description:
      'Responsive React + TypeScript frontends on Supabase backends — PostgreSQL schema design, Edge Functions, Storage and Realtime.',
  },
  {
    title: 'AI & workflow automation',
    description:
      'LLM pipelines with Gemini AI, RAG architectures with CrewAI, and scheduled Python jobs that replace recurring manual work.',
  },
  {
    title: 'Web3 & on-chain integration',
    description:
      'Solidity smart contract integration on EVM chains like Base, using Viem for transactions and Privy for wallet authentication.',
  },
  {
    title: 'Requirements to release',
    description:
      'Requirements gathering, UI prototyping and SIT/UAT testing, so what ships is what stakeholders actually asked for.',
  },
];

export const experience = [
  {
    company: 'Sentysis',
    role: 'Full-Stack Developer',
    location: 'Remote',
    period: 'Jan 2026 — Present',
    current: true,
    summary:
      'Sole developer on a production Web3 platform, working directly with the founder to turn product vision and feature requirements into shipped software.',
    highlights: [
      'Own the full technical stack end to end — frontend, backend, smart contract integration, deployment and ongoing maintenance.',
      'Built the frontend in React, TypeScript, Vite and Tailwind CSS, delivering live market feeds, interactive data charts and user profile systems.',
      'Integrated Solidity smart contracts on Base using Viem for on-chain USDC transactions and reward claims, with wallet-based authentication via Privy.',
      'Designed the Supabase backend — PostgreSQL schema, Edge Functions, Storage and Realtime subscriptions that push live updates to every connected client.',
      'Deploy through a Cloudflare CI/CD pipeline with separate staging and production environments.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Solidity', 'Viem', 'Privy', 'Cloudflare'],
  },
  {
    company: 'Bitzarventures',
    role: 'AI Automation Developer',
    location: 'Remote',
    period: 'Nov 2024 — Jan 2026',
    current: false,
    summary:
      'Built the automation layer behind day-to-day operations — scheduled workflows, AI-generated content and real-time alerting.',
    highlights: [
      'Engineered and maintained Python automation workflows scheduled through GitHub Actions cron jobs, replacing recurring manual processes and increasing operational throughput.',
      'Designed and deployed an AI content pipeline that uses Gemini AI to process real-time data feeds and draft technical content published directly to a Facebook page.',
      'Built event-driven Make.com workflows that trigger real-time Gmail and WhatsApp alerts, cutting response time on time-sensitive operational events.',
      'Architected and maintained a custom Telegram bot with robust error handling and automated scheduling, sustaining 24/7 availability.',
    ],
    stack: ['Python', 'GitHub Actions', 'Gemini AI', 'Make.com', 'Telegram Bot', 'Webhooks'],
  },
  {
    company: 'Merchantrade Asia',
    role: 'Business Analyst Intern',
    location: 'Petaling Jaya, MY',
    period: 'Jan 2023 — Jan 2024',
    current: false,
    summary:
      'Bridged business stakeholders and engineering at a money services and digital payments company — from requirements through acceptance testing.',
    highlights: [
      'Gathered and documented business requirements with cross-functional stakeholders, converting operational needs into technical specifications within project scope.',
      'Developed low-fidelity UI prototypes to validate user flows and system logic before build, reducing downstream development rework.',
      'Executed full SIT and UAT test cycles, documenting and tracking defects to enforce acceptance criteria before production release.',
    ],
    stack: ['Requirements', 'UI Prototyping', 'SIT', 'UAT', 'Defect Tracking', 'Documentation'],
  },
];

export type LinkKind = 'source' | 'demo' | 'live';

export interface ProjectLink {
  kind: LinkKind;
  href: string;
}

// The flagship project, shown full-width above the regular project grid.
export const featuredProject = {
  title: 'Sentysis',
  kind: 'Live product · Web3',
  description:
    'A narrative-driven crypto market platform. I’m the sole developer, working with the founder to build it end to end — live market feeds, interactive charts, on-chain rewards and the infrastructure behind all of it.',
  highlights: [
    'Live market feeds and interactive data charts, built in React, TypeScript and Tailwind CSS.',
    'On-chain USDC transactions and reward claims through Solidity smart contracts on Base, using Viem.',
    'Wallet-based authentication via Privy, backed by a Supabase database with Realtime subscriptions.',
  ],
  stack: ['React', 'TypeScript', 'Supabase', 'Solidity', 'Viem', 'Privy', 'Cloudflare'],
  image: sentysisImage,
  imagePosition: 'center top',
  links: [{ kind: 'live', href: 'https://sentysis.com/' }] satisfies ProjectLink[],
};

export const projects = [
  {
    title: 'MyBudget Track',
    kind: 'Final-year project · Android',
    description:
      'A personal finance tracker that helps university students plan their spending, set daily budgets and remember bill payments.',
    highlights: [
      'Real-time data management and user authentication backed by Firebase.',
      'A notification manager that alerts users instantly when they approach their budget limits.',
    ],
    stack: ['Java', 'Android Studio', 'Firebase'],
    image: mybudgetTrack,
    imagePosition: 'center 58%',
    links: [
      { kind: 'source', href: 'https://github.com/Aaqil456/MyBudgetTrack' },
      { kind: 'demo', href: 'https://www.youtube.com/watch?v=0WOC_osNXbg' },
    ] satisfies ProjectLink[],
  },
  {
    title: 'VR Shooter Prototype',
    kind: 'Unity · Virtual reality',
    description:
      'A virtual reality shooting-range game with target scoring and a win-and-replay loop, built and tested with Unity’s XR Device Simulator.',
    highlights: [
      'Scripted the gameplay mechanics and interactive physics in C#.',
      'Designed the in-world UI for scoring, win states and restarting a round.',
    ],
    stack: ['Unity 3D', 'C#', 'XR Toolkit'],
    image: vrShooter,
    imagePosition: 'center',
    links: [{ kind: 'demo', href: 'https://www.youtube.com/watch?v=KlfR_KVbeKo' }] satisfies ProjectLink[],
  },
];

export const archive = [
  {
    title: 'AI Image Generator',
    description: 'Text-to-image web app built with React and the OpenAI API.',
    stack: ['React', 'OpenAI API'],
    links: [
      { kind: 'source', href: 'https://github.com/Aaqil456/Ai-Image-Generator' },
      { kind: 'demo', href: 'https://www.youtube.com/watch?v=BrWgG4D68EM' },
    ] satisfies ProjectLink[],
  },
  {
    title: 'React CRUD App',
    description: 'Create, read, update and delete items, backed by a Map data structure.',
    stack: ['React', 'JavaScript'],
    links: [
      { kind: 'source', href: 'https://github.com/Aaqil456/sample-crud-project-aaqil' },
      { kind: 'live', href: 'https://aaqil456.github.io/sample-crud-project-aaqil/' },
    ] satisfies ProjectLink[],
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'PHP', 'Solidity', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Responsive UI'] },
  {
    group: 'Backend & Data',
    items: ['Supabase', 'PostgreSQL', 'Edge Functions', 'Realtime', 'Storage', 'Firebase', 'REST APIs', 'Webhooks', 'JSON'],
  },
  {
    group: 'AI & Automation',
    items: ['LLM / API integration', 'Gemini AI', 'RAG (CrewAI)', 'Prompt engineering', 'Workflow automation', 'Make.com', 'Scheduled jobs & cron'],
  },
  { group: 'Blockchain / Web3', items: ['Solidity', 'EVM chains (Base)', 'Viem', 'Privy wallet auth', 'Foundry'] },
  { group: 'DevOps & Tools', items: ['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Cloudflare', 'Vercel', 'Postman', 'VS Code'] },
  {
    group: 'Practices',
    items: ['Requirements gathering', 'UI prototyping', 'SIT / UAT testing', 'Agile collaboration', 'Technical documentation'],
  },
];

export const education = [
  {
    title: 'Bachelor of Information Technology (Hons.)',
    school: 'Universiti Kebangsaan Malaysia',
    location: 'Bandar Baru Bangi, MY',
    period: '2020 — 2024',
    grade: 'CGPA 3.60',
  },
  {
    title: 'Matriculation',
    school: 'Kolej Matrikulasi Negeri Sembilan',
    location: 'Negeri Sembilan, MY',
    period: '2019 — 2020',
    grade: 'CGPA 3.96',
  },
  {
    title: 'Sijil Pelajaran Malaysia (SPM)',
    school: 'SMK Ideal Heights',
    location: 'Selangor, MY',
    period: '2014 — 2018',
    grade: '7A',
  },
];

export const marquee = [
  'React',
  'TypeScript',
  'Supabase',
  'PostgreSQL',
  'Solidity',
  'Viem',
  'Base',
  'Python',
  'Gemini AI',
  'CrewAI',
  'GitHub Actions',
  'Cloudflare',
  'Make.com',
  'Tailwind CSS',
  'Firebase',
];
