export interface Project {
  /** unique slug used in urls */
  id: string;
  title: string;
  date?: string;
  externalLinkLabel?: string;
  shortDescription: string;
  details: string;
  technologies: string[];
  externalLink: string;
  bullets?: string[];
  category?: "full-stack" | "hardware" | "ai-data";
}

export const projects: Project[] = [
  {
    "id": "shoulder-dystocia-simulator",
    "title": "Senior Design: Shoulder Dystocia Simulator",
    "date": "September 2026–present",
    "category": "hardware",
    "shortDescription": "Developing a soft robotic training simulator for shoulder dystocia, with the goal of making emergency delivery practice more realistic, repeatable, and measurable.",
    "details": "The proposed design explores a deformable birth canal and fetal shoulder assembly, pneumatic actuation, and embedded sensing to represent different levels of difficulty and capture trainee responses. This is an ongoing team project.",
    "technologies": [
      "Soft Robotics",
      "Medical Simulation",
      "Senior Design"
    ],
    "externalLink": ""
  },

  {
    "id": "self-timer",
    "title": "Self-Timer: Meeting Timer Firmware",
    "date": "September 2026",
    "category": "hardware",
    "shortDescription": "Developed MicroPython firmware for an ESP32-based meeting timer that uses a stepper motor to position a clock hand, two buttons for input, and pulsing LEDs to display timer status.",
    "details": "Meeting-timer firmware, separate from the shoulder dystocia simulator, with preset selection, motor control, and LED status feedback.",
    "technologies": [
      "MicroPython",
      "ESP32",
      "Embedded Systems"
    ],
    "externalLink": "https://github.com/JessicaQiu0/Team-17-Shoulder-Miniproject/tree/main/firmware",
    "externalLinkLabel": "View Self-Timer firmware",
    "bullets": [
      "Implemented four timer states: selecting, running, paused, and finished.",
      "Supported 15-, 20-, 25-, and 30-minute presets.",
      "Implemented button debouncing, preset selection, start/pause/resume controls, and a two-second hold to reset.",
      "Wrote stepper-motor routines to move the clock hand to the selected preset and back to zero on reset.",
      "Added PWM breathing effects for blue, green, and red status LEDs.",
      "Created a low-power variant that uses short ESP32 light-sleep periods when the timer is inactive."
    ]
  },
  // Review: supplied repository contains nanoGPT lecture/model scripts; chat interface not verified.
  {
    "id": "mini-chat-llm",
    "title": "Mini Chat / LLM",
    "date": "August 2026",
    "category": "ai-data",
    "shortDescription": "Built a conversational interface for interacting with a large language model.",
    "details": "",
    "technologies": [
      "LLM",
      "Chat Interface"
    ],
    "externalLink": "https://github.com/MelindaTan/ng-video-lecture-latest",
    "externalLinkLabel": "View Mini Chat / LLM repository"
  },
  // Review: circuit function, HDL, board, and repository still need confirmation.
  {
    "id": "fpga-logic-design",
    "title": "FPGA Logic Design",
    "date": "April 2025",
    "category": "hardware",
    "shortDescription": "Designed and tested a digital logic project using an FPGA.",
    "details": "",
    "technologies": [
      "FPGA",
      "Digital Logic"
    ],
    "externalLink": ""
  },
  {
    id: "flamefreeze",
    title: "FlameFreeze",
    category: "full-stack",
    shortDescription: "Web platform tracking active fires in Los Angeles with predictive modeling for firefighter response.",
    details: "Developed a comprehensive web platform that tracks active fires in Los Angeles using existing data from Google Firestat, predicts fire spread patterns, and automates firefighter response recommendations through predictive modeling. The application provides real-time fire monitoring and decision support tools.",
    technologies: ["React", "JavaScript", "Google Firestat API", "Predictive Modeling"],
    externalLink: "https://flamefreeze.vercel.app/",
    bullets: [
      "Integrated Google Firestat API for real-time fire data collection",
      "Implemented predictive algorithms for fire spread pattern analysis",
      "Built responsive web interface with interactive maps and data visualization",
      "Developed automated response recommendation system for emergency services"
    ]
  },
  {
    id: "burgerbash",
    title: "BurgerBash",
    category: "full-stack",
    shortDescription: "Dynamic Android game with interactive controls and Java backend integration.",
    details: "Designed and implemented a dynamic Android game interface with interactive controls and seamless Java backend integration, enabling smooth gameplay. The project demonstrates full-stack mobile development with clean architecture and collaborative version control practices.",
    technologies: ["Android", "Java", "GitLab", "Mobile Development"],
    externalLink: "https://github.com/MelindaTan/BurgerBashGame",
    bullets: [
      "Developed interactive Android game interface with smooth user controls",
      "Implemented Java backend for game logic and state management",
      "Utilized GitLab for version control and collaborative development",
      "Maintained clean, maintainable code throughout the project lifecycle"
    ]
  },
  {
    id: "pollution-prediction",
    title: "Pollution Prediction",
    category: "ai-data",
    shortDescription: "Machine learning analysis of air pollution dataset with classification and regression techniques.",
    details: "Led a team in analyzing an air pollution dataset, utilizing machine learning techniques like classification and regression to identify trends and categories. The project involved comprehensive data analysis and clear documentation of findings through multiple deliverables.",
    technologies: ["Python", "Machine Learning", "Classification", "Regression", "Data Analysis"],
    externalLink: "",
    bullets: [
      "Conducted comprehensive analysis of air pollution datasets",
      "Applied classification and regression ML techniques to identify patterns",
      "Created multiple deliverables including technical reports and visualizations",
      "Published final findings in HTML format for stakeholder communication"
    ]
  },
  {
    id: "truss-design-analysis",
    title: "Truss Design & Analysis",
    category: "hardware",
    shortDescription: "Structural engineering project involving force calculations, FEA analysis, and physical prototyping.",
    details: "Designed and built a structural truss by calculating internal forces using statics principles and FEA analysis. Constructed a physical prototype and performed load testing to validate theoretical calculations and ensure structural integrity under stress.",
    technologies: ["Structural Analysis", "FEA", "CAD", "Load Testing"],
    externalLink: "",
    bullets: [
      "Calculated internal forces using statics principles and engineering formulas",
      "Performed Finite Element Analysis (FEA) for structural validation",
      "Designed and constructed physical prototype using CAD software",
      "Conducted load testing to verify structural integrity under various conditions"
    ]
  },
  {
    id: "produce-prediction",
    title: "Produce Prediction",
    category: "ai-data",
    shortDescription: "Data analysis project examining fruit production trends using Python libraries.",
    details: "Retrieved and analyzed a fruit production dataset using Python libraries such as NumPy and Pandas to identify key trends in production, consumption, and attributes. Results were presented with clear annotations and published for effective communication.",
    technologies: ["Python", "NumPy", "Pandas", "Data Analysis", "Data Visualization"],
    externalLink: "",
    bullets: [
      "Processed and analyzed large fruit production datasets",
      "Utilized NumPy and Pandas for efficient data manipulation and analysis",
      "Identified key trends in production, consumption, and product attributes",
      "Created clear visualizations and annotations for stakeholder communication"
    ]
  },
  {
    id: "temperature-sensor",
    title: "Temperature Sensor",
    category: "hardware",
    shortDescription: "Hardware-software integration project with 3D printing, soldering, and microcontroller programming.",
    details: "Designed and built a functional temperature sensor system by 3D printing the enclosure, soldering electronic components (sensors, LEDs, wires), and programming microcontroller logic to read and display temperature values in real-time.",
    technologies: ["3D Printing", "Soldering", "Microcontroller", "Embedded Programming"],
    externalLink: "",
    bullets: [
      "Designed and 3D printed custom enclosure for sensor components",
      "Soldered electronic components including sensors, LEDs, and wiring",
      "Programmed microcontroller for real-time temperature reading and display",
      "Integrated hardware and software for complete functional system"
    ]
  },
  {
    id: "automated-car",
    title: "Automated Car",
    category: "hardware",
    shortDescription: "Autonomous vehicle development using CAD design, coding, and PID control systems.",
    details: "Leveraging integrated CAD design, advanced coding, and PID control systems, we developed an autonomous vehicle capable of executing complex tasks with precision and efficiency. The project combined mechanical design with software control systems.",
    technologies: ["CAD", "PID Control", "Embedded Systems", "Autonomous Systems"],
    externalLink: "",
    bullets: [
      "Designed vehicle chassis and components using CAD software",
      "Implemented PID control systems for precise autonomous navigation",
      "Developed embedded software for sensor integration and decision making",
      "Achieved reliable autonomous operation for complex task execution"
    ]
  },
  {
    id: "plant-shop",
    title: "Plant Shop",
    category: "full-stack",
    shortDescription: "Responsive e-commerce platform for plant shopping built with React.",
    details: "Developed a responsive plant shopping platform using React, featuring dynamic product listings, a shopping cart system, and a modern, user-friendly interface. Implemented component-based architecture to ensure scalability and maintainability.",
    technologies: ["React", "JavaScript", "CSS", "E-commerce", "Responsive Design"],
    externalLink: "https://melindatan.github.io/Plant-Shop/",
    bullets: [
      "Built responsive React application with modern UI/UX design",
      "Implemented dynamic product catalog with filtering and search",
      "Developed shopping cart functionality with state management",
      "Utilized component-based architecture for maintainable and scalable code"
    ]
  }
];