// ============================================================
// portfolioData.js — Portfolio content for Paddala Nanda Kumar
// ============================================================

export const personalInfo = {
  name: "Paddala Nanda Kumar",
  firstName: "Paddala Nanda Kumar",
  brandName: "Paddala Nanda Kumar", // shown in the preloader, navbar and footer
  title: "Python Full Stack Developer",
  location: "Bengaluru, India",
  phone: "9790298085",
  emails: {
    primary: "paddalanandakumar@gmail.com",
    secondary: "",
  },
  summary:
    "Software Development Engineer candidate with a B.E. in Computer Science and Engineering (Anna University, 2026) and hands-on experience building full-stack web applications, and automated data pipelines using Python, JavaScript, and SQL. Experienced in designing scalable, data-driven systems, integrating third-party APIs, and automating operations with scheduled workflows. Strong foundation in data structures, algorithms, databases, and object-oriented design, with a focus on simplicity, ownership, and delivering reliable software.",
  resumeUrl: "/resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Nandakumar-14",
  linkedin: "https://www.linkedin.com/in/paddalanandakumar/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Paddala Nanda Kumar",
  titleHighlight: "Python Full Stack Developer",
  subtitle:
    "Building scalable web applications, REST APIs, and automated data pipelines with Python, JavaScript, and Generative AI.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:paddalanandakumar@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Paddala Nanda Kumar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Paddala Nandakumar</span>, a Computer Science graduate based in India. I’m passionate about Software Development, Python and Artificial Intelligence. I’m driven by curiosity about emerging technologies and a passion for building innovative software solutions while continuously expanding my knowledge and creating meaningful impact through technology.`,
  techStack: ["Python", "JavaScript", "React", "SQL", "Google Gemini AI", "n8n"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured engineering methodology focusing on clean architecture, scalable APIs, and automated pipelines.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze system requirements, explore third-party APIs, and design data flow specifications.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architect clean relational database schemas, REST endpoints, and intuitive user interfaces.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Write robust, modular code in Python and JavaScript with structured error handling and security.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Automate background workflows, deploy frontend and backend services, and monitor stability.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Languages & Core",
      skills: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "SQL" },
        { name: "OOP" },
      ],
    },
    {
      title: "Web & Frameworks",
      skills: [
        { name: "HTML5 & CSS3" },
        { name: "React.js" },
        { name: "REST APIs" },
        { name: "Responsive Design" },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "Google Gemini AI" },
        { name: "n8n Workflow Automation" },
        { name: "LLM Integration" },
        { name: "Prompt Engineering" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub" },
        { name: "VS Code" },
        { name: "Vercel" },
        { name: "SDLC" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Technical Symposium & Coding Challenges",
    role: "Lead Student Coordinator",
    badge: "Leadership",
    description:
      "Organized departmental hackathons, coding contests, and peer workshops for CSE students, promoting collaborative problem solving and clean coding standards.",
  },
  {
    title: "Developer Community & Peer Mentoring",
    role: "Technical Mentor",
    badge: "Mentorship",
    description:
      "Guided junior students through Python fundamentals, Git version control workflows, and REST API integration for real-world academic projects.",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Full Stack Developer Trainee",
    duration: "2024 - Present",
    skills: [
      "Full-stack development using Python, JavaScript, and modern frameworks",
      "Building automated n8n workflows and RESTful API integrations",
      "Designing relational database schemas and optimizing SQL queries",
    ],
    tech: ["Python", "JavaScript", "React.js", "SQL", "Google Gemini AI", "n8n"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Collaborating actively in agile teams to build cohesive, high-quality products.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex data challenges into straightforward, modular code.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluating metrics and system bottlenecks to optimize database queries and workflows.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Articulating technical decisions clearly across developers and project stakeholders.",
  },
];

export const projects = [
  {
    id: "ai-news-generator",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "AI News Generator (Automated Data Pipeline)",
    description:
      "Built an automated n8n pipeline that pulls AI and Tech news from two RSS feeds and merges them on a schedule. Used Gemini to turn raw articles into short, readable summaries and automated daily digest emails via the Gmail API.",
    techTags: ["n8n", "Google Gemini API", "Gmail API", "RSS"],
    links: {
      github: "https://github.com/Nandakumar-14",
      demo: "https://drive.google.com/file/d/1faEEwHJr46p1c28xkEo4GaAtqjHo1SVh/view?usp=drive_link",
    },
    isFlagship: true,
  },
  {
    id: "smart-farming-helper",
    number: "02",
    badge: null,
    title: "Smart Farming and Marketing Helper",
    description:
      "Built a full-stack smart farming platform with React.js, Spring Boot, and SQL to help farmers monitor operations. Developed a real-time dashboard combining soil, weather, and crop health metrics through REST APIs and deployed on Vercel.",
    techTags: ["React.js", "Spring Boot", "SQL", "REST APIs", "Git"],
    links: {
      github: "https://github.com/Nandakumar-14",
      demo: "https://farmer-application-lake.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "library-system",
    number: "03",
    badge: null,
    title: "Library System",
    description:
      "Responsive web interface with dynamic book search and category-wise filtering, displaying real-time availability by communicating with a backend service.",
    techTags: ["HTML", "CSS", "JavaScript", "REST APIs"],
    links: {
      github: "https://github.com/Nandakumar-14",
      demo: "https://studentlibrary.netlify.app/",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/paddalanandakumar/",
};

export const education = {
  degree: "B.E. Computer Science And Engineering",
  institution: "T.J.S Engineering College, Anna University",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Python Full Stack Developer",
    "Data Pipelines · React · GenAI",
    "Building Reliable & Scalable Systems",
  ],
  credential: "B.E. Computer Science and Engineering (2022–2026)",
  copyright: `© ${new Date().getFullYear()} Paddala Nanda Kumar | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

