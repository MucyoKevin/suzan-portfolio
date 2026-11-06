/**
 * Single source of truth for every string on the site.
 * Edit copy here — the section components read from these exports.
 */

export const profile = {
  name: "Suzan Owembabazi",
  title: "Digital Communications & Brand Professional",
  portfolioTitle: "Digital Communications & Brand Portfolio",
  pillars: [
    "Brand Storytelling",
    "Public Relations",
    "Digital Marketing",
    "Experience Design",
  ],
  location: "Kampala, Uganda",
  relocation: "Open to relocating to Kigali, Rwanda",
  tagline:
    "Creating meaningful connections between brands and their audiences through strategy, creativity, and impactful communication.",
} as const;

export const about = {
  eyebrow: "About Me",
  heading: "Building strong brands through strategic storytelling.",
  paragraphs: [
    "I am a Digital Communications & Brand Professional passionate about building strong brands through strategic storytelling, digital communication, and audience-focused experiences.",
    "My work combines creativity and strategy to transform brand messages into engaging experiences that improve visibility, strengthen relationships, and create lasting impressions.",
    "I specialize in digital marketing, graphic design, social media management, content creation, and developing communication strategies — managing brand reputation and delivering campaigns that connect organizations with their audiences.",
  ],
} as const;

export type Expertise = {
  title: string;
  description: string;
};

export const expertise: Expertise[] = [
  {
    title: "Brand Strategy & Storytelling",
    description: "Turning ideas and brand values into meaningful narratives.",
  },
  {
    title: "Public Relations & Reputation Management",
    description:
      "Building trust, handling crisis communication, and strengthening brand perception.",
  },
  {
    title: "Digital Marketing & Social Media",
    description:
      "Creating content strategies that increase engagement and visibility.",
  },
  {
    title: "Copywriting & Content Creation",
    description:
      "Writing and developing creative, audience-focused communication.",
  },
  {
    title: "Events & Activations",
    description: "Planning experiences that connect brands with people.",
  },
  {
    title: "Stakeholder Engagement",
    description:
      "Building partnerships and maintaining valuable relationships.",
  },
];

export type CaseStudy = {
  title: string;
  organisation: string;
  role?: string;
  overview: string;
  contributions: string[];
  skills: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Shaping a Brand for Market Launch",
    organisation: "GC Builds",
    role: "Brand Manager (short-term contract)",
    overview:
      "Led brand development for a platform serving developers, contractors, real estate agents, and property managers, working with a seven-member team across East Africa to define how the brand looks, sounds, and introduces itself.",
    contributions: [
      "Refined the brand strategy, positioning, and market identity",
      "Sharpened messaging to communicate the platform's value to each audience",
      "Oversaw brand identity guidelines, including logo refinement, visual direction, and the second version of the brand book",
      "Wrote the brand narratives and the founder's launch story",
      "Supported launch communications, marketing collateral, and go-to-market planning",
    ],
    skills: [
      "Brand Strategy",
      "Brand Identity",
      "Messaging",
      "Launch Communications",
    ],
  },
  {
    title: "Building Brand Presence Through Communications",
    organisation: "TMR International Hospital",
    role: "Public Relations / Communication Officer",
    overview:
      "Managed the hospital's social media presence and digital campaigns, strengthening public relations and institutional visibility.",
    contributions: [
      "Planned, created, and published social media content and managed audience engagement",
      "Developed digital and promotional campaigns to raise public awareness",
      "Kept brand messaging consistent across digital and public-facing channels",
      "Supported stakeholder relations, media engagement, and event communications",
      "Contributed to reputation management and crisis communication",
    ],
    skills: ["PR", "Social Media", "Digital Campaigns", "Crisis Communication"],
  },
  {
    title: "Using Stories to Create Connection",
    organisation: "A Future for Orphans Uganda",
    role: "Public Relations Intern",
    overview:
      "Created communication that highlighted community impact and connected audiences with meaningful stories.",
    contributions: [
      "Developed human-interest content",
      "Managed social media platforms",
      "Supported promotional campaigns and public engagement events",
      "Researched public opinion and communication trends to guide content",
    ],
    skills: ["Storytelling", "Social Media", "Community Engagement"],
  },
];

export type CreativeHighlight = {
  title: string;
  objective: string;
  approach: string;
  outcome: string;
};

export const creativeHighlights: CreativeHighlight[] = [
  {
    title: "Social Media Posts",
    objective: "Keep audiences engaged with a consistent brand presence.",
    approach:
      "Built content calendars around themes that matter to the audience, balancing informative and human posts.",
    outcome: "Steadier posting rhythm and stronger day-to-day engagement.",
  },
  {
    title: "Captions Written",
    objective: "Give every visual a voice that sounds like the brand.",
    approach:
      "Wrote in a clear, warm tone with a purposeful call to action on each post.",
    outcome: "More comments, shares, and conversations started by followers.",
  },
  {
    title: "Campaign Designs",
    objective: "Carry one message across every channel without diluting it.",
    approach:
      "Set the message hierarchy first, then adapted visuals and copy per platform.",
    outcome: "Recognisable campaigns that held together from post to poster.",
  },
  {
    title: "Brand Announcements",
    objective: "Share news in a way that builds credibility, not just reach.",
    approach:
      "Led with the audience benefit, kept the language plain, and timed releases around the moments that mattered.",
    outcome: "Clear, well-received announcements and fewer follow-up queries.",
  },
  {
    title: "Event Creatives",
    objective: "Turn an event into an experience people want to be part of.",
    approach:
      "Designed a visual identity that ran from the first invitation through to on-the-day materials.",
    outcome: "Higher turnout and a coherent look across the whole event.",
  },
];

export const events = {
  eyebrow: "Events & Activations",
  heading: "Creating Memorable Brand Experiences",
  examples: [
    {
      title: "Event Planning",
      description:
        "Shaping the concept, run of show, and every detail that carries the brand.",
    },
    {
      title: "Guest Engagement",
      description: "Designing the moments that turn attendees into advocates.",
    },
    {
      title: "Brand Activations",
      description:
        "Bringing brand values into physical spaces where people can feel them.",
    },
    {
      title: "Campaign Rollouts",
      description:
        "Taking a campaign from launch plan to live, on message and on time.",
    },
  ],
  processLabel: "My Approach",
  process: ["Strategy", "Planning", "Execution", "Audience Experience"],
} as const;

export type ApproachStep = {
  title: string;
  description: string;
};

export const approach: ApproachStep[] = [
  {
    title: "Research",
    description: "Understanding audiences and brand goals.",
  },
  {
    title: "Strategy",
    description: "Creating communication plans that align with objectives.",
  },
  {
    title: "Creation",
    description: "Developing engaging content and experiences.",
  },
  {
    title: "Connection",
    description: "Building relationships that grow brands.",
  },
];

export type Role = {
  role: string;
  organisation: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    role: "Brand Manager (Short-term Contract)",
    organisation: "GC Builds",
    location: "Nairobi, Kenya (Remote)",
    period: "Apr 2026 – Jun 2026",
    highlights: [
      "Coordinated brand development with a seven-member, cross-country team.",
      "Oversaw brand identity guidelines and the second version of the brand book.",
      "Developed brand narratives, the founder's launch story, and go-to-market communication.",
    ],
  },
  {
    role: "Community Engagement Lead",
    organisation: "Excel Hort Agribusiness Incubator Limited (EHCAI)",
    location: "Kiryandongo, Uganda",
    period: "Nov 2025 – Nov 2026",
    highlights: [
      "Coordinated engagement with community stakeholders and institutional partners.",
      "Facilitated stakeholder meetings, community consultations, and sensitisation activities.",
      "Documented community feedback to inform project coordination.",
    ],
  },
  {
    role: "Public Relations / Communication Officer",
    organisation: "TMR International Hospital",
    location: "Kampala, Uganda",
    period: "Jan 2024 – Nov 2025",
    highlights: [
      "Managed the hospital's social media presence, from planning to publishing and engagement.",
      "Developed digital and promotional campaigns to strengthen institutional visibility.",
      "Supported media engagement, event communications, and crisis communication.",
    ],
  },
  {
    role: "Public Relations Intern",
    organisation: "Ministry of Health, Uganda",
    location: "Uganda",
    period: "2023 – 2024",
    highlights: [
      "Supported social media management, public engagement, and responses to inquiries.",
      "Contributed to public awareness campaigns and communication materials.",
      "Coordinated with media houses, NGOs, and government stakeholders.",
    ],
  },
  {
    role: "Public Relations Intern",
    organisation: "A Future for Orphans Uganda",
    location: "Uganda",
    period: "2022",
    highlights: [
      "Managed social media and created stories highlighting community impact.",
      "Researched public opinion and communication trends to inform content.",
    ],
  },
  {
    role: "Sales and Marketing",
    organisation: "Wandaz Products Limited",
    location: "Uganda",
    period: "2021",
    highlights: [
      "Supported product marketing and promotional campaigns.",
      "Conducted market research on customer needs and competitor activity.",
    ],
  },
  {
    role: "Sales and Branding",
    organisation: "Makerere University Souvenir Shop",
    location: "Kampala, Uganda",
    period: "2019",
    highlights: [
      "Supported merchandising, brand presentation, and promotion of university merchandise.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Journalism and Communication",
  institution: "Makerere University",
  period: "2019 – 2024",
} as const;

export const certifications = [
  { name: "Certificate in Brand Development", issuer: "Alison", year: "2023" },
] as const;

export const languages = [
  { name: "English", code: "en" },
  { name: "Kinyarwanda", code: "rw" },
  { name: "Swahili", code: "sw" },
  { name: "Luganda", code: "lg" },
  { name: "Runyankole", code: "rl" },
] as const;

export const contact = {
  heading: "Let's Connect",
  email: "suzanowembabazi2@gmail.com",
  phone: "+256 750 728 744",
  phoneHref: "tel:+256750728744",
  linkedin: "https://www.linkedin.com/in/suzan-owembabazi-a7ab07216/",
  linkedinLabel: "linkedin.com/in/suzan-owembabazi",
  instagram: "https://www.instagram.com/iamsuzanne.o/",
  instagramLabel: "instagram.com/iamsuzanne.o",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
