/**
 * Single source of truth for every string on the site.
 * Edit copy here — the section components read from these exports.
 */

export const profile = {
  name: "Suzan Owembabazi",
  title: "Marketing & Communications Specialist",
  portfolioTitle: "Marketing & Communications Portfolio",
  pillars: [
    "Brand Storytelling",
    "Public Relations",
    "Digital Marketing",
    "Experience Design",
  ],
  location: "Kampala, Uganda",
  tagline:
    "Creating meaningful connections between brands and their audiences through strategy, creativity, and impactful communication.",
} as const;

export const about = {
  eyebrow: "About Me",
  heading: "Building strong brands through strategic storytelling.",
  paragraphs: [
    "I am a Marketing and Communications professional passionate about building strong brands through strategic storytelling, digital communication, and audience-focused experiences.",
    "My work combines creativity and strategy to transform brand messages into engaging experiences that improve visibility, strengthen relationships, and create lasting impressions.",
    "I specialize in developing communication strategies, creating compelling content, managing brand reputation, and delivering campaigns that connect organizations with their audiences.",
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
      "Building trust, managing communication, and strengthening brand perception.",
  },
  {
    title: "Digital Marketing & Social Media",
    description:
      "Creating content strategies that increase engagement and visibility.",
  },
  {
    title: "Content Creation",
    description: "Developing creative, audience-focused communication.",
  },
  {
    title: "Events & Activations",
    description: "Planning experiences that connect brands with people.",
  },
  {
    title: "Stakeholder Engagement",
    description: "Building partnerships and maintaining valuable relationships.",
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
    title: "Building Brand Presence Through Communications",
    organisation: "TMR International Hospital",
    role: "Public Relations / Communications Officer",
    overview:
      "Supporting the hospital's communication strategy by creating engaging content, strengthening public relations, and enhancing brand visibility.",
    contributions: [
      "Managed communication initiatives supporting institutional goals",
      "Created digital content to improve audience engagement",
      "Supported brand messaging and reputation management",
      "Coordinated stakeholder communication",
      "Responded to public and client inquiries",
    ],
    skills: [
      "PR",
      "Content Strategy",
      "Digital Communication",
      "Brand Management",
    ],
  },
  {
    title: "Creating Awareness Through Strategic Communication",
    organisation: "Ministry of Health Uganda",
    role: "Public Relations Intern",
    overview:
      "Supported public communication efforts aimed at improving awareness and engagement.",
    contributions: [
      "Supported public awareness campaigns",
      "Coordinated communication with media and stakeholders",
      "Assisted in social media engagement",
      "Contributed to public information initiatives",
    ],
    skills: ["Public Relations", "Media Relations", "Campaign Communication"],
  },
  {
    title: "Using Stories to Create Connection",
    organisation: "Future for Orphans Uganda",
    overview:
      "Created communication that highlighted community impact and connected audiences with meaningful stories.",
    contributions: [
      "Developed human-interest content",
      "Managed social media platforms",
      "Supported promotional campaigns",
      "Captured stories that reflected community impact",
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
      description:
        "Designing the moments that turn attendees into advocates.",
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

export const contact = {
  heading: "Let's Connect",
  email: "suzanowembabazi2@gmail.com",
  phone: "+256 750 728 744",
  phoneHref: "tel:+256750728744",
  linkedin: "https://www.linkedin.com/in/suzan-owembabazi-a7ab07216/",
  linkedinLabel: "linkedin.com/in/suzan-owembabazi",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
] as const;
