import { AI_CHATBOT_ICON, AI_POWERED_WEB_ICON, APP_ICON, BRANDING_ICON, MY_PORTFOLIO_AI_EARKICK_IMAGE, MY_PORTFOLIO_AI_LAWYER_IMAGE, MY_PORTFOLIO_EDUAIDE_IMAGE, MY_PORTFOLIO_IMAGE, MY_PORTFOLIO_VENTURE_KIT_IMAGE, MY_PORTFOLIO_WUNDER_FLATS_IMAGE, PROJECT_3_IMAGE, PROJECT_4_IMAGE, PROJECT_6_IMAGE, WEB_DEVELOPMENT_ICON, YOUTUBE_ICON } from "./images";
import { PORTFOLIO_ROUTE } from "./routes";

export const initializeHomePageData = () => ({
    name: "Muhammad Bilal",
    email: "bilal16.work@gmail.com",
    github: "https://github.com/M-BILAL16",
    resume: "/assets/resume.pdf",
    description: <>
        <p>
            <span className="d-inline">
                I'm a freelance web developer crafting modern websites, web applications, and AI-powered solutions.
            </span>
        </p>
        <p>
            My skillset spans
            <span className="d-inline">
                frontend development, CMS integration, AI chatbots, and full-stack web apps
            </span>
            . I deliver results with performance, scalability, and clean code at the core.
        </p>
        <p>
            If you’re looking for a reliable developer who communicates clearly, meets deadlines, and truly cares about your product.
        </p>
    </>,

    why_work_with_me: [
        {
            title: "Tailored Business Tools",
            subTitle: "Build internal dashboards, portals, or CRMs that fit your workflow."
        },
        {
            title: "Modern Tech Stack",
            subTitle: "React, Next.js, Node.js, Firebase, MongoDB — built for performance and growth."
        },
        {
            title: "More Than Just Code",
            subTitle: "I build digital experiences that are beautiful, fast, and client-focused — not just websites."
        },
        {
            title: "Fast Turnarounds. Zero Excuses.",
            subTitle: "Deadlines are sacred. I deliver quality work on time, every time."
        },
        {
            title: "Scalable, Maintainable Solutions",
            subTitle: "Whether it's a landing page or full site, I build with future growth in mind."
        },
        {
            title: "Real Collaboration",
            subTitle: "I listen, suggest, and build — so your vision becomes a working product."
        },
        {
            title: "Launch Support + Beyond",
            subTitle: "From handoff to hosting to minor fixes — I don’t vanish after delivery."
        },
        {
            title: "No Guesswork. Just Results",
            subTitle: "Clear estimates, clear timelines, and clear communication."
        },
    ],
    highlights: [
        {
            title: "APIs Integrated",
            data: "70+"
        },
        {
            title: "Projects Delivered",
            data: "90+"
        },
        {
            title: "Global Clients",
            data: "290+"
        },
        {
            title: "Workflows Automated",
            data: "20+"
        },
        {
            title: "AI Tools Integrated",
            data: "30+"
        },
        {
            title: "Code Repositories",
            data: "45+"
        },
    ],
    projects: [
        {
            image: PROJECT_4_IMAGE,
            path: PORTFOLIO_ROUTE
        },
        {
            image: PROJECT_6_IMAGE,
            path: PORTFOLIO_ROUTE
        },
        {
            image: PROJECT_3_IMAGE,
            path: PORTFOLIO_ROUTE
        }
    ],
    services: [
        {
            title: "Web Application Development",
            image: WEB_DEVELOPMENT_ICON
        },
        {
            title: "Custom Content Management Solutions",
            image: APP_ICON
        },
        {
            title: "AI-Powered Web Application",
            image: AI_POWERED_WEB_ICON
        },
        {
            title: "SaaS Platform Development",
            image: BRANDING_ICON
        },
        {
            title: "AI Chatbots & Automation Agents",
            image: AI_CHATBOT_ICON
        },
        {
            title: "Cross-Platform Mobile App Development",
            image: YOUTUBE_ICON
        }
    ],
    client_testimonials: [
        {
            ratings: 5,
            path: "https://bloodgpt.com/",
            title: "BloodGPT",
            description: "Bilal truly exceeded expectations in AI Development with exceptional attention to detail and thorough documentation. His proactive communication and quick responsiveness made working with him a breeze. A true PROFESSIONAL who goes above and beyond—HIGHLY recommended! 👍",
        },
        {
            ratings: 3,
            path: "https://triviatrap.net/",
            title: "Trivia Trap AI",
            description: "Bilal has truly impressed me with his AI development skills, his attention to detail ensured a BUG-FREE experience, and his code expertise is unparalleled. Not only did he deliver on time, but his deep understanding of my project needs and going above and BEYOND in service made working with him a pleasure. 🤩",
        },
        {
            ratings: 5,
            path: "https://www.hipeople.io/",
            title: "Hipeople.io",
            description: "He is a top-notch AI developer whose work truly EXCEEDED expectations with remarkable code expertise, delivering flawless, bug-free results. Working with him was a breeze thanks to his QUICK responsiveness and proactive communication, making collaboration a real pleasure. 🙌 Highly recommended!",
        },
        {
            ratings: 5,
            path: "https://phoenixtraderfunding.com/",
            title: "Phoenix Trader Funding",
            description: "I am extremely satisfied with the AI task completed on my existing site. The enhancements in design, functionality, and performance are remarkable, addressing areas I hadn’t even noticed. The recommendations significantly improved my site’s overall user experience and efficiency.",
        }
    ]
})


export const PORTFOLIO_PROJECTS = [
    {
        image: MY_PORTFOLIO_IMAGE,
        path: MY_PORTFOLIO_IMAGE,
        title: "HiPeople",
        subTitle: "AI-Powered Hiring Intelligence",
        project_url: "http://hipeople.io/",
        description: "Contributed to HiPeople’s intelligent hiring platform by integrating AI-driven candidate assessments, automated reference checks, and personalized insights. Helped build scalable backend systems and deploy NLP models that evaluate candidate fit, soft skills, and team compatibility. Resulted in reduced hiring time and improved decision accuracy for recruiters."
    },
    {
        image: MY_PORTFOLIO_IMAGE,
        path: MY_PORTFOLIO_IMAGE,
        title: "BloodGPT",
        subTitle: "AI-Powered Blood Test Insights",
        project_url: "https://bloodgpt.com/",
        description: "Built an AI platform that helps users understand blood test results in simple language. Integrated GPT-based models and medical databases to provide explanations, potential causes, and recommended next steps. Designed a secure, privacy-compliant web app that delivers accurate, accessible health insights. Reduced patient confusion and improved healthcare literacy."
    },
    {
        image: PROJECT_3_IMAGE,
        path: PROJECT_3_IMAGE,
        title: "BookingBee",
        subTitle: "AI-Powered Scheduling & Booking Assistant",
        project_url: "https://bookingbee.ai/",
        description: "Developed an AI-powered booking assistant that automates appointment scheduling across industries. Integrated calendar APIs, real-time availability detection, and GPT-powered chat for natural conversation flow. Built responsive UI and backend with robust timezone, cancellation, and rescheduling logic. Reduced manual booking tasks and improved user experience."
    },
    {
        image: MY_PORTFOLIO_VENTURE_KIT_IMAGE,
        path: MY_PORTFOLIO_VENTURE_KIT_IMAGE,
        title: "VentureKit.ai",
        subTitle: "AI Startup Planning Assistant",
        project_url: "https://www.venturekit.ai/",
        description: "Built an AI-powered platform that helps entrepreneurs generate business plans, pitch decks, and market analysis in minutes. Integrated GPT models for structured content creation and developed a clean, user-friendly interface. Enabled early-stage founders to validate and communicate ideas faster, reducing planning time by over 80%."
    },
    {
        image: MY_PORTFOLIO_WUNDER_FLATS_IMAGE,
        path: MY_PORTFOLIO_WUNDER_FLATS_IMAGE,
        title: "Wunderflats",
        subTitle: "Furnished Apartment Rental Platform",
        project_url: "https://wunderflats.com/",
        description: "Developed and optimized a scalable web platform for booking furnished apartments for mid- to long-term stays. Integrated search filters, availability calendars, secure messaging, and landlord dashboards. Enhanced user experience and conversion through dynamic UI, performance tuning, and location-based listings. Enabled seamless rental for expats, professionals, and students."
    },
    {
        image: MY_PORTFOLIO_EDUAIDE_IMAGE,
        path: MY_PORTFOLIO_EDUAIDE_IMAGE,
        title: "Eduaide.AI",
        subTitle: "AI-Powered Teaching Assistant Platform",
        project_url: "https://www.eduaide.ai/",
        description: "Developed an AI-driven platform to assist educators in creating lesson plans, activities, and assessments. Integrated GPT-based models to generate educational content tailored to grade level, subject, and learning goals. Built intuitive UX with real-time generation and editing tools. Empowered thousands of teachers to save planning time and personalize learning."
    },
    {
        image: MY_PORTFOLIO_AI_LAWYER_IMAGE,
        path: MY_PORTFOLIO_AI_LAWYER_IMAGE,
        title: "AI Lawyer",
        subTitle: "Smart Legal Assistant Platform",
        project_url: "https://ailawyer.pro/",
        description: "Built an AI-powered legal assistant that helps users generate, compare, and translate legal documents. Developed a multi-platform web and mobile app using GPT-based NLP models to automate legal workflows. My solution improved accessibility to legal services and reduced document processing time by over 70%."
    },
    {
        image: MY_PORTFOLIO_AI_EARKICK_IMAGE,
        path: MY_PORTFOLIO_AI_EARKICK_IMAGE,
        title: "Earkick",
        subTitle: "Real-Time AI Mental Health Tracker",
        project_url: "https://earkick.com/",
        description: "Developed a privacy-first mental health tracking app powered by AI and voice analysis. Earkick enables users to log their mood and stress in real time through speech, offering immediate insights and coping strategies. Built and integrated emotion detection models, seamless UX, and cross-platform mobile support. Helped improve user engagement and self-awareness for early intervention."
    }
]

export const FAQs_DATA = [
    {
        title: "What services do you offer?",
        description: <p>I specialize in Full Stack Web & Mobile App Development, AI/Chatbot creation (GPT, NLP, LangChain), UI/UX prototyping, API development, CMS integrations, and automation tools.</p>
    },
    {
        title: "Do you work with startups or only large companies?",
        description: <p>Both! I’ve worked with early-stage startups, SMEs, and enterprise clients. Whether you’re launching your MVP or scaling a complex system, I can help.</p>
    },
    {
        title: "Are you currently available for freelance projects?",
        description: <p>Yes — I’m open to select freelance opportunities and collaborations.</p>
    },
    {
        title: "Can you build AI chatbots with GPT or custom NLP?",
        description: <p>Absolutely. I develop smart, conversational bots using OpenAI, LangChain, and other NLP tools. These can be tailored for customer support, scheduling, education, and more.</p>
    },
    {
        title: "Do you handle end-to-end product development?",
        description: <p>Yes — I can manage your project from idea to launch, covering design, development, deployment, and even maintenance.</p>
    },
    {
        title: "Can you join our existing development team?",
        description: <p>Yes — I can seamlessly collaborate with in-house teams or work as a solo contributor on contract or freelance basis.</p>
    },
    {
        title: "Do you offer post-launch support or maintenance?",
        description: <p>Yes, I provide optional support packages for bug fixes, feature updates, and AI model tuning after launch.</p>
    }
]