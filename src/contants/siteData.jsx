import {
  AI_CHATBOT_ICON,
  AI_POWERED_WEB_ICON,
  APP_ICON,
  BRANDING_ICON,
  MY_PORTFOLIO_AI_EARKICK_IMAGE,
  MY_PORTFOLIO_AI_LAWYER_IMAGE,
  MY_PORTFOLIO_BLOODGPT_IMAGE,
  MY_PORTFOLIO_EDUAIDE_IMAGE,
  MY_PORTFOLIO_IMAGE,
  MY_PORTFOLIO_VENTURE_KIT_IMAGE,
  MY_PORTFOLIO_WUNDER_FLATS_IMAGE,
  PROJECT_3_IMAGE,
  WEB_DEVELOPMENT_ICON,
  YOUTUBE_ICON,
} from "./images";

export const initializeHomePageData = () => ({
  name: "Muhammad Bilal",
  email: "bilal16.work@gmail.com",
  github: "https://github.com/M-BILAL16",
  resume: "/assets/resume.pdf",
  description: (
    <>
      <p>
        <span className="d-inline">
          I'm a freelance web developer crafting modern websites, web
          applications, and AI-powered solutions.
        </span>
      </p>
      <p>
        My skillset spans
        <span className="d-inline">
          frontend development, CMS integration, AI chatbots, and full-stack web
          apps
        </span>
        . I deliver results with performance, scalability, and clean code at the
        core.
      </p>
      <p>
        If you’re looking for a reliable developer who communicates clearly,
        meets deadlines, and truly cares about your product.
      </p>
    </>
  ),

  why_work_with_me: [
    {
      title: "Tailored Business Tools",
      subTitle:
        "Build internal dashboards, portals, or CRMs that fit your workflow.",
    },
    {
      title: "Modern Tech Stack",
      subTitle:
        "React, Next.js, Node.js, Firebase, MongoDB — built for performance and growth.",
    },
    {
      title: "More Than Just Code",
      subTitle:
        "I build digital experiences that are beautiful, fast, and client-focused — not just websites.",
    },
    {
      title: "Fast Turnarounds. Zero Excuses.",
      subTitle:
        "Deadlines are sacred. I deliver quality work on time, every time.",
    },
    {
      title: "Scalable, Maintainable Solutions",
      subTitle:
        "Whether it's a landing page or full site, I build with future growth in mind.",
    },
    {
      title: "Real Collaboration",
      subTitle:
        "I listen, suggest, and build — so your vision becomes a working product.",
    },
    {
      title: "Launch Support + Beyond",
      subTitle:
        "From handoff to hosting to minor fixes — I don’t vanish after delivery.",
    },
    {
      title: "No Guesswork. Just Results",
      subTitle: "Clear estimates, clear timelines, and clear communication.",
    },
  ],
  highlights: [
    {
      title: "APIs Integrated",
      data: "70+",
    },
    {
      title: "Projects Delivered",
      data: "90+",
    },
    {
      title: "Global Clients",
      data: "290+",
    },
    {
      title: "Workflows Automated",
      data: "20+",
    },
    {
      title: "AI Tools Integrated",
      data: "30+",
    },
    {
      title: "Code Repositories",
      data: "45+",
    },
  ],
  services: [
    {
      title: "Web Application Development",
      image: WEB_DEVELOPMENT_ICON,
    },
    {
      title: "Custom Content Management Solutions",
      image: APP_ICON,
    },
    {
      title: "AI-Powered Web Application",
      image: AI_POWERED_WEB_ICON,
    },
    {
      title: "SaaS Platform Development",
      image: BRANDING_ICON,
    },
    {
      title: "AI Chatbots & Automation Agents",
      image: AI_CHATBOT_ICON,
    },
    {
      title: "Cross-Platform Mobile App Development",
      image: YOUTUBE_ICON,
    },
  ],
  client_testimonials: [
    {
      ratings: 5,
      path: "https://bloodgpt.com/",
      title: "BloodGPT",
      description:
        "Bilal truly exceeded expectations in AI Development with exceptional attention to detail and thorough documentation. His proactive communication and quick responsiveness made working with him a breeze. A true PROFESSIONAL who goes above and beyond—HIGHLY recommended! 👍",
    },
    {
      ratings: 3,
      path: "https://triviatrap.net/",
      title: "Trivia Trap AI",
      description:
        "Bilal has truly impressed me with his AI development skills, his attention to detail ensured a BUG-FREE experience, and his code expertise is unparalleled. Not only did he deliver on time, but his deep understanding of my project needs and going above and BEYOND in service made working with him a pleasure. 🤩",
    },
    {
      ratings: 5,
      path: "https://www.hipeople.io/",
      title: "Hipeople.io",
      description:
        "He is a top-notch AI developer whose work truly EXCEEDED expectations with remarkable code expertise, delivering flawless, bug-free results. Working with him was a breeze thanks to his QUICK responsiveness and proactive communication, making collaboration a real pleasure. 🙌 Highly recommended!",
    },
    {
      ratings: 5,
      path: "https://phoenixtraderfunding.com/",
      title: "Phoenix Trader Funding",
      description:
        "I am extremely satisfied with the AI task completed on my existing site. The enhancements in design, functionality, and performance are remarkable, addressing areas I hadn’t even noticed. The recommendations significantly improved my site’s overall user experience and efficiency.",
    },
  ],
});

export const PORTFOLIO_PROJECTS = [
  {
    image: [
      MY_PORTFOLIO_IMAGE,
      MY_PORTFOLIO_IMAGE,
      MY_PORTFOLIO_IMAGE,
      MY_PORTFOLIO_IMAGE,
      MY_PORTFOLIO_IMAGE,
      MY_PORTFOLIO_IMAGE,
      MY_PORTFOLIO_IMAGE,
    ],
    title: "HiPeople",
    slug: "hi-people",
    services: "Product Design, and Development",
    subTitle: "AI-Powered Hiring Intelligence",
    project_url: "http://hipeople.io/",
    overview: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          WEB design encompass the process of creating and designing websites it
          invloves a combination of different skills and disciplines to produce
          a visually appealing and user friendly website. Here is the overview
          of key aspects of web design.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Research:</span>
          &nbsp;Before starting the design, it's essential to understand the
          target audience, thier needs and the goals of the website.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Information Architecture: </span>
          &nbsp;Organize and structure the content to ensure a logical flow for
          users.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Wireframing and Prototyping: </span>
          &nbsp;Create skeletal outlines and interactive prototypes to visualize
          the layout and functionality.
        </p>
      </>
    ),
    challenges: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          Web design comes with its own set of challenges, ranging from
          technical issues to user experience considerations. Here are some
          common chellenges faced by web designers. Web design encompasses the
          process of creating and designing websites it involves a combination
          of different skills and desciplines to produce a visually appealing
          and user-firendly website. Here's an overview of key aspects of web
          design.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Responsive Design:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Ensuring that a website looks and functions well on various
          devices and screen appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Use responsive design techniques, such as flexible grids and
          media queries.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Browser Compatibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Different browsers may interpret code differently, leading to
          inconsistencies int he website's appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Test the webiste on multiple browsers ans use compatibility
          libraries or polyfills when necessary.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          User Experience (UX):
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Compliance and Accessibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
      </>
    ),
    description:
      "Contributed to HiPeople’s intelligent hiring platform by integrating AI-driven candidate assessments, automated reference checks, and personalized insights. Helped build scalable backend systems and deploy NLP models that evaluate candidate fit, soft skills, and team compatibility. Resulted in reduced hiring time and improved decision accuracy for recruiters.",
  },
  {
    image: [
      MY_PORTFOLIO_BLOODGPT_IMAGE,
      MY_PORTFOLIO_BLOODGPT_IMAGE,
      MY_PORTFOLIO_BLOODGPT_IMAGE,
      MY_PORTFOLIO_BLOODGPT_IMAGE,
      MY_PORTFOLIO_BLOODGPT_IMAGE,
      MY_PORTFOLIO_BLOODGPT_IMAGE,
    ],
    title: "BloodGPT",
    slug: "blood-gpt",
    services: "Product Design, and Development",
    subTitle: "AI-Powered Blood Test Insights",
    project_url: "https://bloodgpt.com/",
    overview: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          WEB design encompass the process of creating and designing websites it
          invloves a combination of different skills and disciplines to produce
          a visually appealing and user friendly website. Here is the overview
          of key aspects of web design.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Research:</span>
          &nbsp;Before starting the design, it's essential to understand the
          target audience, thier needs and the goals of the website.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Information Architecture: </span>
          &nbsp;Organize and structure the content to ensure a logical flow for
          users.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Wireframing and Prototyping: </span>
          &nbsp;Create skeletal outlines and interactive prototypes to visualize
          the layout and functionality.
        </p>
      </>
    ),
    challenges: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          Web design comes with its own set of challenges, ranging from
          technical issues to user experience considerations. Here are some
          common chellenges faced by web designers. Web design encompasses the
          process of creating and designing websites it involves a combination
          of different skills and desciplines to produce a visually appealing
          and user-firendly website. Here's an overview of key aspects of web
          design.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Responsive Design:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Ensuring that a website looks and functions well on various
          devices and screen appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Use responsive design techniques, such as flexible grids and
          media queries.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Browser Compatibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Different browsers may interpret code differently, leading to
          inconsistencies int he website's appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Test the webiste on multiple browsers ans use compatibility
          libraries or polyfills when necessary.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          User Experience (UX):
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Compliance and Accessibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
      </>
    ),
    description:
      "Built an AI platform that helps users understand blood test results in simple language. Integrated GPT-based models and medical databases to provide explanations, potential causes, and recommended next steps. Designed a secure, privacy-compliant web app that delivers accurate, accessible health insights. Reduced patient confusion and improved healthcare literacy.",
  },
  {
    image: [
      PROJECT_3_IMAGE,
      PROJECT_3_IMAGE,
      PROJECT_3_IMAGE,
      PROJECT_3_IMAGE,
      PROJECT_3_IMAGE,
      PROJECT_3_IMAGE,
    ],
    title: "BookingBee",
    slug: "booking-bee",
    services: "Product Design, and Development",
    subTitle: "AI-Powered Scheduling & Booking Assistant",
    project_url: "https://bookingbee.ai/",
    overview: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          WEB design encompass the process of creating and designing websites it
          invloves a combination of different skills and disciplines to produce
          a visually appealing and user friendly website. Here is the overview
          of key aspects of web design.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Research:</span>
          &nbsp;Before starting the design, it's essential to understand the
          target audience, thier needs and the goals of the website.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Information Architecture: </span>
          &nbsp;Organize and structure the content to ensure a logical flow for
          users.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Wireframing and Prototyping: </span>
          &nbsp;Create skeletal outlines and interactive prototypes to visualize
          the layout and functionality.
        </p>
      </>
    ),
    challenges: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          Web design comes with its own set of challenges, ranging from
          technical issues to user experience considerations. Here are some
          common chellenges faced by web designers. Web design encompasses the
          process of creating and designing websites it involves a combination
          of different skills and desciplines to produce a visually appealing
          and user-firendly website. Here's an overview of key aspects of web
          design.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Responsive Design:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Ensuring that a website looks and functions well on various
          devices and screen appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Use responsive design techniques, such as flexible grids and
          media queries.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Browser Compatibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Different browsers may interpret code differently, leading to
          inconsistencies int he website's appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Test the webiste on multiple browsers ans use compatibility
          libraries or polyfills when necessary.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          User Experience (UX):
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Compliance and Accessibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
      </>
    ),
    description:
      "Developed an AI-powered booking assistant that automates appointment scheduling across industries. Integrated calendar APIs, real-time availability detection, and GPT-powered chat for natural conversation flow. Built responsive UI and backend with robust timezone, cancellation, and rescheduling logic. Reduced manual booking tasks and improved user experience.",
  },
  {
    image: [
      MY_PORTFOLIO_VENTURE_KIT_IMAGE,
      MY_PORTFOLIO_VENTURE_KIT_IMAGE,
      MY_PORTFOLIO_VENTURE_KIT_IMAGE,
      MY_PORTFOLIO_VENTURE_KIT_IMAGE,
      MY_PORTFOLIO_VENTURE_KIT_IMAGE,
      MY_PORTFOLIO_VENTURE_KIT_IMAGE,
    ],
    title: "VentureKit.ai",
    slug: "venture-kit-ai",
    services: "Product Design, and Development",
    subTitle: "AI Startup Planning Assistant",
    project_url: "https://www.venturekit.ai/",
    overview: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          WEB design encompass the process of creating and designing websites it
          invloves a combination of different skills and disciplines to produce
          a visually appealing and user friendly website. Here is the overview
          of key aspects of web design.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Research:</span>
          &nbsp;Before starting the design, it's essential to understand the
          target audience, thier needs and the goals of the website.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Information Architecture: </span>
          &nbsp;Organize and structure the content to ensure a logical flow for
          users.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Wireframing and Prototyping: </span>
          &nbsp;Create skeletal outlines and interactive prototypes to visualize
          the layout and functionality.
        </p>
      </>
    ),
    challenges: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          Web design comes with its own set of challenges, ranging from
          technical issues to user experience considerations. Here are some
          common chellenges faced by web designers. Web design encompasses the
          process of creating and designing websites it involves a combination
          of different skills and desciplines to produce a visually appealing
          and user-firendly website. Here's an overview of key aspects of web
          design.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Responsive Design:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Ensuring that a website looks and functions well on various
          devices and screen appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Use responsive design techniques, such as flexible grids and
          media queries.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Browser Compatibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Different browsers may interpret code differently, leading to
          inconsistencies int he website's appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Test the webiste on multiple browsers ans use compatibility
          libraries or polyfills when necessary.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          User Experience (UX):
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Compliance and Accessibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
      </>
    ),
    description:
      "Built an AI-powered platform that helps entrepreneurs generate business plans, pitch decks, and market analysis in minutes. Integrated GPT models for structured content creation and developed a clean, user-friendly interface. Enabled early-stage founders to validate and communicate ideas faster, reducing planning time by over 80%.",
  },
  {
    image: [
      MY_PORTFOLIO_WUNDER_FLATS_IMAGE,
      MY_PORTFOLIO_WUNDER_FLATS_IMAGE,
      MY_PORTFOLIO_WUNDER_FLATS_IMAGE,
      MY_PORTFOLIO_WUNDER_FLATS_IMAGE,
      MY_PORTFOLIO_WUNDER_FLATS_IMAGE,
      MY_PORTFOLIO_WUNDER_FLATS_IMAGE,
    ],
    title: "Wunderflats",
    slug: "wunder-flats",
    services: "Product Design, and Development",
    subTitle: "Furnished Apartment Rental Platform",
    project_url: "https://wunderflats.com/",
    overview: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          WEB design encompass the process of creating and designing websites it
          invloves a combination of different skills and disciplines to produce
          a visually appealing and user friendly website. Here is the overview
          of key aspects of web design.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Research:</span>
          &nbsp;Before starting the design, it's essential to understand the
          target audience, thier needs and the goals of the website.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Information Architecture: </span>
          &nbsp;Organize and structure the content to ensure a logical flow for
          users.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Wireframing and Prototyping: </span>
          &nbsp;Create skeletal outlines and interactive prototypes to visualize
          the layout and functionality.
        </p>
      </>
    ),
    challenges: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          Web design comes with its own set of challenges, ranging from
          technical issues to user experience considerations. Here are some
          common chellenges faced by web designers. Web design encompasses the
          process of creating and designing websites it involves a combination
          of different skills and desciplines to produce a visually appealing
          and user-firendly website. Here's an overview of key aspects of web
          design.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Responsive Design:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Ensuring that a website looks and functions well on various
          devices and screen appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Use responsive design techniques, such as flexible grids and
          media queries.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Browser Compatibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Different browsers may interpret code differently, leading to
          inconsistencies int he website's appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Test the webiste on multiple browsers ans use compatibility
          libraries or polyfills when necessary.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          User Experience (UX):
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Compliance and Accessibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
      </>
    ),
    description:
      "Developed and optimized a scalable web platform for booking furnished apartments for mid- to long-term stays. Integrated search filters, availability calendars, secure messaging, and landlord dashboards. Enhanced user experience and conversion through dynamic UI, performance tuning, and location-based listings. Enabled seamless rental for expats, professionals, and students.",
  },
  {
    image: [
      MY_PORTFOLIO_EDUAIDE_IMAGE,
      MY_PORTFOLIO_EDUAIDE_IMAGE,
      MY_PORTFOLIO_EDUAIDE_IMAGE,
      MY_PORTFOLIO_EDUAIDE_IMAGE,
      MY_PORTFOLIO_EDUAIDE_IMAGE,
      MY_PORTFOLIO_EDUAIDE_IMAGE,
    ],
    title: "Eduaide.AI",
    slug: "eduaide-ai",
    services: "Product Design, and Development",
    subTitle: "AI-Powered Teaching Assistant Platform",
    project_url: "https://www.eduaide.ai/",
    overview: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          WEB design encompass the process of creating and designing websites it
          invloves a combination of different skills and disciplines to produce
          a visually appealing and user friendly website. Here is the overview
          of key aspects of web design.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Research:</span>
          &nbsp;Before starting the design, it's essential to understand the
          target audience, thier needs and the goals of the website.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Information Architecture: </span>
          &nbsp;Organize and structure the content to ensure a logical flow for
          users.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Wireframing and Prototyping: </span>
          &nbsp;Create skeletal outlines and interactive prototypes to visualize
          the layout and functionality.
        </p>
      </>
    ),
    challenges: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          Web design comes with its own set of challenges, ranging from
          technical issues to user experience considerations. Here are some
          common chellenges faced by web designers. Web design encompasses the
          process of creating and designing websites it involves a combination
          of different skills and desciplines to produce a visually appealing
          and user-firendly website. Here's an overview of key aspects of web
          design.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Responsive Design:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Ensuring that a website looks and functions well on various
          devices and screen appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Use responsive design techniques, such as flexible grids and
          media queries.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Browser Compatibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Different browsers may interpret code differently, leading to
          inconsistencies int he website's appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Test the webiste on multiple browsers ans use compatibility
          libraries or polyfills when necessary.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          User Experience (UX):
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Compliance and Accessibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
      </>
    ),
    description:
      "Developed an AI-driven platform to assist educators in creating lesson plans, activities, and assessments. Integrated GPT-based models to generate educational content tailored to grade level, subject, and learning goals. Built intuitive UX with real-time generation and editing tools. Empowered thousands of teachers to save planning time and personalize learning.",
  },
  {
    image: [
      MY_PORTFOLIO_AI_LAWYER_IMAGE,
      MY_PORTFOLIO_AI_LAWYER_IMAGE,
      MY_PORTFOLIO_AI_LAWYER_IMAGE,
      MY_PORTFOLIO_AI_LAWYER_IMAGE,
      MY_PORTFOLIO_AI_LAWYER_IMAGE,
      MY_PORTFOLIO_AI_LAWYER_IMAGE,
    ],
    title: "AI Lawyer",
    slug: "ai-lawyer",
    services: "Product Design, and Development",
    subTitle: "Smart Legal Assistant Platform",
    project_url: "https://ailawyer.pro/",
    overview: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          WEB design encompass the process of creating and designing websites it
          invloves a combination of different skills and disciplines to produce
          a visually appealing and user friendly website. Here is the overview
          of key aspects of web design.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Research:</span>
          &nbsp;Before starting the design, it's essential to understand the
          target audience, thier needs and the goals of the website.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Information Architecture: </span>
          &nbsp;Organize and structure the content to ensure a logical flow for
          users.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Wireframing and Prototyping: </span>
          &nbsp;Create skeletal outlines and interactive prototypes to visualize
          the layout and functionality.
        </p>
      </>
    ),
    challenges: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          Web design comes with its own set of challenges, ranging from
          technical issues to user experience considerations. Here are some
          common chellenges faced by web designers. Web design encompasses the
          process of creating and designing websites it involves a combination
          of different skills and desciplines to produce a visually appealing
          and user-firendly website. Here's an overview of key aspects of web
          design.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Responsive Design:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Ensuring that a website looks and functions well on various
          devices and screen appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Use responsive design techniques, such as flexible grids and
          media queries.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Browser Compatibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Different browsers may interpret code differently, leading to
          inconsistencies int he website's appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Test the webiste on multiple browsers ans use compatibility
          libraries or polyfills when necessary.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          User Experience (UX):
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Compliance and Accessibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
      </>
    ),
    description:
      "Built an AI-powered legal assistant that helps users generate, compare, and translate legal documents. Developed a multi-platform web and mobile app using GPT-based NLP models to automate legal workflows. My solution improved accessibility to legal services and reduced document processing time by over 70%.",
  },
  {
    image: [
      MY_PORTFOLIO_AI_EARKICK_IMAGE,
      MY_PORTFOLIO_AI_EARKICK_IMAGE,
      MY_PORTFOLIO_AI_EARKICK_IMAGE,
      MY_PORTFOLIO_AI_EARKICK_IMAGE,
      MY_PORTFOLIO_AI_EARKICK_IMAGE,
      MY_PORTFOLIO_AI_EARKICK_IMAGE,
    ],
    title: "Earkick",
    slug: "earkick",
    services: "Product Design, and Development",
    subTitle: "Real-Time AI Mental Health Tracker",
    project_url: "https://earkick.com/",
    overview: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          WEB design encompass the process of creating and designing websites it
          invloves a combination of different skills and disciplines to produce
          a visually appealing and user friendly website. Here is the overview
          of key aspects of web design.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Research:</span>
          &nbsp;Before starting the design, it's essential to understand the
          target audience, thier needs and the goals of the website.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Information Architecture: </span>
          &nbsp;Organize and structure the content to ensure a logical flow for
          users.
        </p>
        <p className="mt-3 text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Wireframing and Prototyping: </span>
          &nbsp;Create skeletal outlines and interactive prototypes to visualize
          the layout and functionality.
        </p>
      </>
    ),
    challenges: (
      <>
        <p className="text" style={{ fontSize: "14px" }}>
          Web design comes with its own set of challenges, ranging from
          technical issues to user experience considerations. Here are some
          common chellenges faced by web designers. Web design encompasses the
          process of creating and designing websites it involves a combination
          of different skills and desciplines to produce a visually appealing
          and user-firendly website. Here's an overview of key aspects of web
          design.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Responsive Design:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Ensuring that a website looks and functions well on various
          devices and screen appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Use responsive design techniques, such as flexible grids and
          media queries.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Browser Compatibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Different browsers may interpret code differently, leading to
          inconsistencies int he website's appearence.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Test the webiste on multiple browsers ans use compatibility
          libraries or polyfills when necessary.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          User Experience (UX):
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
        <h4 className="text fw-bold mt-3 mb-2" style={{ fontSize: "16px" }}>
          Compliance and Accessibility:
        </h4>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Challenge:</span>
          &nbsp;Creating a seamless and intuitive user experience that keeps
          visitors engaged.
        </p>
        <p className="text" style={{ fontSize: "14px" }}>
          <span className="fw-bold">Solution:</span>
          &nbsp;Condust user testing, design user-friendly interfaces, and
          prioritize accessibility to ensure a positive user experience.
        </p>
      </>
    ),
    description:
      "Developed a privacy-first mental health tracking app powered by AI and voice analysis. Earkick enables users to log their mood and stress in real time through speech, offering immediate insights and coping strategies. Built and integrated emotion detection models, seamless UX, and cross-platform mobile support. Helped improve user engagement and self-awareness for early intervention.",
  },
];

export const FAQs_DATA = [
  {
    title: "What services do you offer?",
    description: (
      <p>
        I specialize in Full Stack Web & Mobile App Development, AI/Chatbot
        creation (GPT, NLP, LangChain), UI/UX prototyping, API development, CMS
        integrations, and automation tools.
      </p>
    ),
  },
  {
    title: "Do you work with startups or only large companies?",
    description: (
      <p>
        Both! I’ve worked with early-stage startups, SMEs, and enterprise
        clients. Whether you’re launching your MVP or scaling a complex system,
        I can help.
      </p>
    ),
  },
  {
    title: "Are you currently available for freelance projects?",
    description: (
      <p>
        Yes — I’m open to select freelance opportunities and collaborations.
      </p>
    ),
  },
  {
    title: "Can you build AI chatbots with GPT or custom NLP?",
    description: (
      <p>
        Absolutely. I develop smart, conversational bots using OpenAI,
        LangChain, and other NLP tools. These can be tailored for customer
        support, scheduling, education, and more.
      </p>
    ),
  },
  {
    title: "Do you handle end-to-end product development?",
    description: (
      <p>
        Yes — I can manage your project from idea to launch, covering design,
        development, deployment, and even maintenance.
      </p>
    ),
  },
  {
    title: "Can you join our existing development team?",
    description: (
      <p>
        Yes — I can seamlessly collaborate with in-house teams or work as a solo
        contributor on contract or freelance basis.
      </p>
    ),
  },
  {
    title: "Do you offer post-launch support or maintenance?",
    description: (
      <p>
        Yes, I provide optional support packages for bug fixes, feature updates,
        and AI model tuning after launch.
      </p>
    ),
  },
];
