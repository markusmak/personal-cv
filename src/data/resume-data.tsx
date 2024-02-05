import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Markus Mak",
  initials: "MM",
  location: "San Francisco, PST",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  about:
    "Product manager tinkering with AI, growth and design",
  summary:
    "Self-driven product manager with experience in growth and machine learning. Currently working at Bytedance as a growth product manager for a new B2B work collaboration suite. Familiar with full-stack web development and machine learning stack. Interested in AI, productivity, and SaaS.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54108129?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "markusmak12@gmail.com",
    tel: "+19735212675",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/markusmak",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/markus-mak-952385171/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/mak_muffin12",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "The Wharton School, University of Pennsylvania",
      degree: "Bachelor of Science in Economics",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Bytedance",
      link: "https://bytedance.com",
      badges: [],
      title: "Growth Product Manager",
      start: "2023",
      end: "Now",
      description: "Responsible for top funnel growth. Designed B2B content strategy to grow content UV and qualified leads.",

      //         "Responsible for top funnel growth. Designed B2B content strategy and grew content UV by 25x and doubled the number of qualified leads within 4 months.",
      learning: "Learnt how to do SEO well and the importance of distribution."
    },
    {
      company: "Bain & Company",
      link: "https://www.bain.com/",
      badges: [],
      title: "Associate Consultant Intern",
      start: "2022",
      end: "2022",
      description:
        "Built gigantic models on asset liquidation as a cost-saving initiative and presented to client.",
      learning: "Developed Excel and story telling skills."
    },
    {
      company: "Deep Wisdom",
      link: "https://fuzhi.ai/",
      badges: [],
      title: "Machine Learning Product Manager",
      start: "2020",
      end: "2021",
      description:
        "Created benchmark pipeline for our Auto-ML algorithm and incorporated performance benchmark into the product. Implemented ensemble learning to improve algorithm performance.",
        learning: "Learnt how to write PRDs and production-ready Python code."
    },
    {
      company: "Clipp",
      link: "",
      badges: [],
      title: "Co-Founder & Product",
      start: "2019",
      end: "2020",
      description: "Built a marketplace app from zero to one. Led product and design.",
      learning: "Became customer obsessed and learnt how to build from scratch."
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "Python",
    "PyTorch",
    "Flask"
  ],
  projects: [
    {
      title: "Security Copilot",
      techStack: [
        "Python",
        "LLM",
        "RAG"
      ],
      description: "Multimodal RAG (video + text) to query and investigate security footages",
      link: {
        label: "devpost.com",
        href: "https://devpost.com/software/secure-ai-an1ipd",
      },
    },
    
    {
      title: "AI-Powered Terminal Copilot",
      techStack: [
        "Python",
        "LLM",
        "Langchain"
      ],
      description: "A terminal that executes based on natural language input.",
      link: {
        label: "github.com",
        href: "https://github.com/markusmak/ai-terminal-python",
      },
    },
    {
      title: "Cross Pollination",
      techStack: ["Hackathon", "LLM", "RAG"],
      description:
        "Resarch tool that synthesizes research papers from the past 20 years and identifies potential research gap. Hackathon 4th.",
      logo: "jojomobile.png",
      link: {
                href: "https://github.com/markusmak/cross-pollination",
      },
    },
    {
      title: "Simple Transformer",
      techStack: ["LLM", "PyTorch"],
      description:
        "Implemented a transformer for learning by referencing the original transformer paper. Trained with A100 GPUs.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/markusmak/build-simple-transformer",
      },
    },
    {
      title: "ReCaptcha",
      techStack: ["Hackathon", "Python", "LLM", "CV"],
      description:
        "A computer vision system using LLM to detect and categorise ReCaptcha images.",
      link: {
        label: "github.com",
        href: "https://github.com/markusmak/recaptcha",
      },
    },
    {
      title: "Crypto Arbitrage",
      techStack: ["Blockchain", "Solidity"],
      description:
        "Designed a multi-hop arbitrage algorithm on Ethereum.",
      link: {
        label: "github.com",
        href: "https://github.com/remyjkim/sample-arbitrage",
      },
    },
    {
      title: "Meal Swipe Marketplace",
      techStack: ["React", "Node.js", "Flask", "MongoDB"],
      description:
        "Full stack web app for UPenn college dining swipes.",
      link: {
        label: "github.com",
        href: "https://github.com/markusmak/upenn-swipes-market",
      },
    },
    {
      title: "Jupinpin",
      techStack: ["React", "Flask", "MongoDB"],
      description:
        "Full stack WeChat application for finding games around you.",
      link: {
        label: "github.com",
        href: "https://github.com/Orang-utan/jupinpin",
      },
    }
  ],
} as const;
