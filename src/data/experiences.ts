export interface Experience {
  /** unique slug used in urls */
  id: string;
  title: string;
  company: string;
  location?: string;
  date: string;
  shortDescription: string;
  details: string;
  bullets?: string[];
  logo?: string | string[];
  links?: { text: string; url: string }[];
  presentationPdf?: string;
  endPhotos?: string[];
}

export const experiences: Experience[] = [
  {
    id: "chewy",
    title: "Applied Machine Learning Extern",
    company: "Chewy",
    logo: `${process.env.PUBLIC_URL}/lg-66f3881fe0bfc-Chewy.webp`,
    location: "Boston, MA",
    date: "Aug 2026 - Present",
    shortDescription: "Building NLP classification models to detect AI-generated text across five domains, with robustness testing and a Streamlit detector.",
    details: "Developing an NLP classification pipeline using TF-IDF, logistic regression, and Keras neural networks to detect AI-generated text. Evaluating model performance across five domains and testing robustness against paraphrased text while deploying a Streamlit detector with confidence-based predictions.",
    bullets: [
      "Built an NLP classification pipeline using TF-IDF, logistic regression, and Keras neural networks to detect AI-generated text across five domains.",
      "Evaluated models using macro-F1, accuracy, precision, recall, confusion matrices, and per-domain error analysis to identify failure modes.",
      "Tested robustness against paraphrased AI-generated text and deploying a Streamlit detector with confidence-based predictions."
    ]
  },
  {
    id: "red-hat",
    title: "Software Engineer Intern",
    company: "Red Hat",
    location: "Boston, MA",
    date: "May 2026 - Aug 2026",
    shortDescription: "Built distributed PyTorch debugging infrastructure, GPU memory visualization, and collective diagnostics for multi-GPU training workloads.",
    details: "Developed Python and C++ tooling for distributed PyTorch workloads, extending c10d, NCCL, and Flight Recorder to diagnose failures, synchronization issues, and communication bottlenecks. Built per-rank GPU memory visualization with Perfetto and validated debugging features across distributed training and collective operations.",
    logo: "/PortfolioWebsite/Logo-RedHat-A-Color-RGB.png",
    bullets: [
      "Built distributed PyTorch debugging infrastructure in Python and C++, extending c10d, NCCL, and Flight Recorder tooling to diagnose failures, synchronization issues, and communication bottlenecks across multi-GPU training workloads.",
      "Developed per-rank GPU memory visualization by converting CUDA allocation/free events into Chrome Trace Event JSON and integrating Perfetto timelines to analyze memory usage, fragmentation, allocation lifetimes, peak usage, and OOM failures across distributed ranks.",
      "Ported torchcomms’ Flight Recorder into PyTorch c10d with CUDA event tracking, async retirement, collective metadata capture, and rank-specific traceback collection across 3 matching paths; validated functionality across DDP, FSDP, and distributed collective operations on 2+ GPUs.",
      "Implemented a backend-agnostic NaN/Inf detection hook for distributed collectives, passing 7 automated tests across Gloo and NCCL backends."
    ]
  },
  {
    id: "ai-ml-fellow",
    title: "Artificial Intelligence and Machine Learning Fellow",
    company: "Break Through Tech + Cornell University",
    date: "Mar 2026 - Present",
    shortDescription: "Participating in a cohort that accelerates transition into AI/ML engineering roles through mentorship, workshops, and project work.",
    details: "As an Artificial Intelligence and Machine Learning Fellow, I work on hands-on projects that bridge academic research and industry best practices with a focus on applied machine learning, ethical AI, and software development workflows.",
    logo: ["/PortfolioWebsite/Break-Through-Tech-logo-650x361.png", "/PortfolioWebsite/Cornell_University_Logo.png"],
    bullets: [
      "Built production-ready ML pipelines with best practices around testing and deployment.",
      "Collaborated in cross-disciplinary teams to solve real-world problems using data and ML.",
      "Presented work at demo days and received mentorship from industry experts."
    ]
  },
  {
    id: "cs-practicum-ta",
    title: "Computer Science Practicum Teaching Assistant",
    company: "Boston University",
    date: "Jan 2026 - May 2026",
    shortDescription: "Supported CS501 students with assignment feedback, Agile development guidance, and code quality coaching.",
    details: "Served as a Teaching Assistant for CS501 (Agile Mobile Application Development) at Boston University, evaluating student work and offering feedback on code quality, design, and Agile workflow.",
    logo: "/PortfolioWebsite/Boston_University_wordmark.svg",
    bullets: [
      "Reviewed mobile app projects for correctness, maintainability, and UI/UX.",
      "Provided actionable feedback on Agile development practices and code structure.",
      "Coordinated with instructors to ensure consistent grading and learning outcomes."
    ]
  },
  {
    id: "bu-robotics",
    title: "Computer Vision Undergraduate Researcher",
    company: "BU Robotics Lab",
    date: "Oct 2025 - Sep 2026",
    shortDescription: "Integrated neuromorphic maps with autonomous control systems to enable complex robot manipulation.",
    details: "Integrated neuromorphic maps (sight) with autonomous control systems to automate complex robot manipulation tasks. Engineered high-fidelity robotic control systems using Motion Capture (MoCap) data, managed via the Robot Operating System (ROS).",
    logo: "/PortfolioWebsite/Boston_University_wordmark.svg",
    links: [
      {
        text: "View Lab Notebook",
        url: "https://melindatan.github.io/BURobotics-notebook/#/home"
      }
    ],
    bullets: [
      "Integrated neuromorphic vision maps with robotic control algorithms for manipulation tasks.",
      "Engineered high-fidelity control systems driven by Motion Capture (MoCap) data.",
      "Managed ROS-based architectures for perception and control loop integration."
    ]
  },
  {
    id: "bit-lab",
    title: "LLM Undergraduate Researcher",
    company: "BIT Lab",
    date: "Jun 2025 - Nov 2025",
    shortDescription: "Researched LLM memory, reasoning, and training strategies for improved generalization and problem solving.",
    details: "Researched LLM memory, reasoning, and architecture through careful study of training objectives, advanced prompting, fine-tuning, and memorization dynamics.",
    logo: "/PortfolioWebsite/Boston_University_wordmark.svg",
    bullets: [
      "Researched LLM memory, reasoning, and architectural impacts on performance.",
      "Analyzed how training objectives and optimization strategies affect memorization and generalization.",
      "Explored advanced prompting and fine-tuning techniques to improve problem-solving behavior."
    ]
  },
  {
    id: "agai",
    title: "Machine Vision Research Intern",
    company: "AgAID + Cornell University",
    date: "May 2025 - Aug 2025",
    shortDescription: "Collected and annotated vision datasets and trained AI models for robotic navigation in agricultural settings.",
    details: "Collected and standardized image data, including metadata, for machine vision applications in orchard and vineyard environments. Annotated datasets and trained AI models to detect obstacles and develop navigation trajectories for ground robots, integrating with ROS2 for real-time control.",
    logo: ["/PortfolioWebsite/agaid logo.png", "/PortfolioWebsite/Cornell_University_Logo.png"],
    presentationPdf: "/Machine Vision FINAL Melinda Tran Presentation 1.pdf",
    bullets: [
      "Collected and standardized image datasets (with metadata) for agricultural machine vision applications.",
      "Annotated data and trained models to detect obstacles and generate navigation trajectories for robots using ROS2.",
      "Collaborated with graduate students to integrate and test robotic systems in commercial agricultural fields.",
      "Developed hands-on experience in field data processing, AI modeling, and agricultural automation technologies."
    ]
  },
  {
    id: "metakosmos",
    title: "Computer Engineer Intern",
    company: "Metakosmos",
    date: "Feb 2025 - May 2025",
    shortDescription: "Used programming and data analysis to model and optimize manufacturing workflows and evaluate AI-enabled solutions.",
    details: "Utilized programming and data analysis to model, optimize, and assess manufacturing workflows, focusing on efficiency, cost reduction, and scalability. Evaluated technologies using frameworks like DSG, TRL, and MRL to inform strategic planning and risk assessment.",
    logo: "/PortfolioWebsite/Metakosmos_Logo_VER_CMYK_Black.png",
    presentationPdf: "/Metakosmos Final presentation.pdf",
    bullets: [
      "Recommended pilot programs and further exploration focused on AI-driven manufacturing optimization.",
      "Modeled and analyzed manufacturing workflows to improve efficiency and scalability.",
      "Assessed technologies using Decision Stage Gates (DSG), Technology Readiness Levels (TRL), and Manufacturing Readiness Levels (MRL)."
    ]
  },
  {
    id: "code-ninjas",
    title: "Marketing Operations Intern",
    company: "Code Ninjas",
    date: "Jun 2024 - Aug 2024",
    shortDescription: "Planned and managed events, coordinated outreach, and helped execute marketing strategies in a fast-paced environment.",
    details: "Planned and managed events end-to-end, coordinated logistics, handled email outreach, and partnered with teams to deliver smooth event execution. Gained practical experience in marketing strategy, communication, and problem-solving.",
    logo: "/PortfolioWebsite/Code_Ninjas_Color_Vertical-300x136.webp",
    bullets: [
      "Planned and managed event logistics and ensured smooth execution.",
      "Handled email outreach, client communication, and event promotion.",
      "Collaborated with teams and partners to support event setup and operations.",
      "Developed communication, organization, and leadership skills in a fast-paced environment."
    ]
  },
  {
    id: "weir-esco",
    title: "Photogrammetry Design Engineer Intern",
    company: "Weir ESCO",
    date: "Jun 2022 - Aug 2022",
    shortDescription: "Used photogrammetry scans to redesign industrial machinery components and prototyped multiple solutions.",
    details: "Trained in NX and PolyWorks while studying material science to stress-test materials before and after production. Worked with the MEOT team on analyzing photogrammetry scans of mining machinery and redesigned components into multiple solution proposals.",
    logo: ["/PortfolioWebsite/weir esco logo.png", "/PortfolioWebsite/saturday academy.jpg"],
    presentationPdf: "/Symposium Presentation- Melinda Tran.pdf",
    bullets: [
      "Trained in NX and PolyWorks and studied material science for stress testing.",
      "Collaborated with the MEOT team to analyze photogrammetry scans and design adapters, shrouds, and points for industrial machinery.",
      "Created 3D designs and printed models to present and pitch multiple solution approaches."
    ]
  },
  {
    id: "first-robotics-se",
    title: "FIRST Software Engineer",
    company: "FIRST Robotics",
    date: "Jan 2021 - Jan 2022",
    shortDescription: "Built autonomous robot capabilities with vision, sensors, and machine learning techniques.",
    details: "Developed programming skills in Java and Android Studio and applied machine learning techniques (OpenCV, Vuforia, TensorFlow) to enable autonomous robot navigation. Implemented sensor-based control and designed human + autonomous interaction systems.",
    logo: "/PortfolioWebsite/first.gif",
    endPhotos: ["/ftc_team.jpg", "/ftc_robot.png"],
    links: [
      {
        text: "Team Website",
        url: "https://formularftcteam.wixsite.com/rookies-guide-to-ftc/about-us"
      }
    ],
    bullets: [
      "Developed object detection using OpenCV, Vuforia, and TensorFlow.",
      "Incorporated rotation and light sensors to navigate robot movement autonomously.",
      "Programmed controls for human-operated and autonomous behaviors.",
      "Won multiple awards at the state level."
    ]
  },
  {
    id: "first-robotics-me",
    title: "FIRST Mechanical Engineer",
    company: "FIRST Robotics",
    date: "Jan 2018 - Jan 2021",
    shortDescription: "Designed and prototyped competition robot components using CAD and 3D printing.",
    details: "Grew CAD skills in PTC Creo and SolidWorks to design robot subsystems, then tested and iterated 3D models to ensure durability and fit. Built hands-on assembly skills through tool use and collaboration.",
    logo: "/PortfolioWebsite/first.gif",
    endPhotos: ["/ftc_team.jpg", "/ftc_robot.png"],
    links: [
      {
        text: "Team Website",
        url: "https://formularftcteam.wixsite.com/rookies-guide-to-ftc/about-us"
      }
    ],
    bullets: [
      "Designed CAD models in PTC Creo and SolidWorks for robot subsystems.",
      "Stress-tested 3D parts prior to printing and iterated designs for strength and versatility.",
      "Developed hands-on building skills through assembly and tool work.",
      "Won multiple awards at the state level."
    ]
  }
];
