import { Github, Linkedin, Mail } from 'lucide-react';

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  // { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/candika95',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/candika-dwi-handaru',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:candikadwihandaru@mail.ugm.ac.id',
    icon: Mail,
  },
];

export const aboutData = {
  bio: `Hi, I'm Candika Dwi Handaru, usually called Candika. I'm a sixth-semester Electronics and Instrumentation student at Universitas Gadjah Mada. I'm passionate about the latest technological advancements and always eager to explore new developments in the field. My interests span across Artificial Intelligence, Cloud Computing, Software Development, and Hardware Systems. Through my studies and hands-on projects, I aim to contribute to innovative solutions by exploring how cutting-edge technologies can address real-world challenges.`,
  mission: `My goal is to create accessible and impactful technology by applying interdisciplinary knowledge across software and hardware fields. I'm continuously learning, building, and collaborating on projects that enhance human-centered innovation.`,
  education: `Undergraduate Electronics and Instrumentation, Universitas Gadjah Mada (Expected 2026), GPA: 3.54`,
  experience: `Hands-on experience in backend and hardware development, including national-scale internships and tech competitions. Actively seeking research and innovation environments where I can apply both software and electronics skills.`,
  // achievements: `Dean's List (2022–2023), Winner of University Hackathon 2023, Cloud Track Graduate of Bangkit Academy 2024, Lead Developer on multiple research-backed IoT and software projects.`,
};

// export const skills = {
//   frontend: [
//     { name: 'HTML/CSS', level: 90 },
//     { name: 'JavaScript', level: 85 },
//     { name: 'React.js', level: 80 },
//     { name: 'TypeScript', level: 75 },
//     { name: 'Tailwind CSS', level: 85 },
//   ],
//   backend: [
//     { name: 'Next.js', level: 80 },
//     { name: 'Node.js', level: 75 },
//     { name: 'Express.js', level: 70 },
//     { name: 'PostgreSQL', level: 80 },
//     { name: 'Firebase', level: 70 },
//     { name: 'RESTful APIs', level: 80 },
//   ],
//   tools: [
//     { name: 'Git/GitHub', level: 85 },
//     { name: 'Docker Compose', level: 70 },
//     { name: 'VS Code', level: 90 },
//     { name: 'Figma', level: 75 },
//     { name: 'CI/CD Pipelines', level: 70 },
//   ],
//   design: [
//     { name: 'UI/UX Design', level: 70 },
//     { name: 'Prototyping', level: 75 },
//     { name: 'Design Systems', level: 65 },
//   ],
// };

export const skills = {
  programmingLanguages: [
    { name: 'Python', level: 85 },
    { name: 'Go', level: 75 },
    { name: 'C++', level: 70 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
  ],
  frameworksAndLibraries: [
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Express.js', level: 75 },
  ],
  dataAndAI: [
    { name: 'Convolutional Neural Networks (CNN)', level: 80 },
    { name: 'YOLO (You Only Look Once)', level: 75 },
    { name: 'Computer Vision', level: 80 },
    { name: 'Machine Learning (ML)', level: 70 },
  ],
  databases: [
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 75 },
  ],
  toolsAndPlatforms: [
    { name: 'Google Cloud Platform (GCP)', level: 75 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Docker & Docker Compose', level: 70 },
    { name: 'CI/CD', level: 70 },
  ],
  generalSkills: [
    { name: 'Problem Solving', level: 90 },
    { name: 'Version Control', level: 85 },
    { name: 'Artificial Intelligence', level: 75 },
    { name: 'Cloud Computing', level: 75 },
    { name: 'Hardware Integration', level: 70 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Cimon – Image Recognition for Chili Farmers',
    description: 'Led backend and cloud development for an image recognition system that detects early signs of chili disease, leveraging CI/CD pipelines and scalable architecture.',
    image: '/cimon.png',
    category: 'ai',
    technologies: ['Next.js', 'PostgreSQL', 'Docker', 'Cloud Services', 'CI/CD'],
    links: {
      demo: '',
      github: '',
    },
  },
  {
    id: 2,
    title: 'SiPuber – Smart Public Air Monitoring',
    description: 'Built APIs and integrated IoT air sensors to display real-time air quality using ISPU standards.',
    image: '/iwms.png',
    category: 'iot',
    technologies: ['Node.js', 'Express', 'IoT Sensors', 'Realtime APIs'],
    links: {
      demo: '',
      github: '',
    },
  },
  {
    id: 3,
    title: 'Selebrasi Interaktif – Cakra Sankhara',
    description: 'Directed mechanical and system integration for a large-scale interactive art installation as part of student creativity showcase.',
    image: '/cakra.png',
    category: 'art-tech',
    technologies: ['Hardware Design', 'Problem Solving', 'Leadership'],
    links: {
      demo: '',
      github: '',
    },
  },
  {
    id: 4,
    title: 'G-Connect Early Warning System',
    description: 'Designed and programmed a microcontroller-based flood detection system integrated with real-time sensors.',
    image: '/g.png',
    category: 'hardware',
    technologies: ['Microcontroller', 'IoT Sensors', 'C Programming'],
    links: {
      demo: '',
      github: '',
    },
  },
  {
    id: 5,
    title: 'KKN Profil Desa',
    description: 'Developed a comprehensive village profile website during community service program, featuring village demographics, government structure, activity documentation, local business directory, and community information management system.',
    image: '/image.png',
    category: 'web',
    technologies: ['React.js', 'TypeScript', 'CSS', 'Node.js'],
    links: {
      demo: '',
      github: '',
    },
  },
];

export const experienceData = [
  {
    title: 'Software Developer',
    organization: 'Badan Riset dan Inovasi Nasional',
    location: 'Remote',
    period: 'Feb 2025 – Jun 2025',
    description: 'Developed backend services and APIs, handled PostgreSQL data architecture, and implemented scalable Docker Compose environments.',
  },
  {
    title: 'Cloud Computing Trainee',
    organization: 'Bangkit Academy',
    location: 'Remote',
    period: 'Sep 2024 – Dec 2024',
    description: 'Google-led program combining backend development, cloud technologies, and real-world problem solving. Worked on CI/CD and cloud deployment practices.',
  },
  {
    title: 'Hardware Programmer',
    organization: 'G-Connect Project Indonesia',
    location: 'Remote',
    period: 'Sep 2024 – Dec 2024',
    description: 'Programmed microcontrollers and designed flood detection hardware using sensor integrations.',
  },
  {
    title: 'Lab Assistant – Actuator Systems',
    organization: 'Universitas Gadjah Mada',
    location: 'Yogyakarta',
    period: 'Aug 2024 – Dec 2024',
    description: 'Led lab sessions and guided students on actuator and control system experiments.',
  },
  {
    title: 'Module Lab Assistant',
    organization: 'Universitas Gadjah Mada',
    location: 'Yogyakarta',
    period: 'Feb 2024 – Jul 2024',
    description: 'Developed beginner Linux modules and learning materials on process management and shell scripting.',
  },
  {
    title: 'Volunteer – Jogja-NETPAC Asian Film Festival',
    organization: 'JAFF',
    location: 'Yogyakarta',
    period: 'Nov 2024 – Dec 2024',
    description: "Managed merchandise inventory and registration during Indonesia's largest film market event.",
  },
  {
    title: 'Staff of Equipment & Usher',
    organization: 'Pionir Gadjah Mada',
    location: 'UGM',
    period: 'Mar 2024 – Aug 2024',
    description: 'Assisted logistics and welcomed 10,000+ students; ensured event flow and equipment delivery.',
  },
  {
    title: 'Volunteer – VEX Asia Pacific Robotics Championship',
    organization: 'VEX Robotics',
    location: 'Yogyakarta',
    period: 'Jan 2024',
    description: 'Operated registration and managed robotics arena during international robotics competition.',
  },
  {
    title: 'Data Visualization Intern',
    organization: 'PT Asuransi Tugu Pratama Indonesia Tbk',
    location: 'Remote',
    period: 'Sep 2023 – Jan 2024',
    description: 'Developed a data dashboard that visualized predictive models and allowed stakeholders to manipulate parameters for business analysis.',
  },
  {
    title: 'Programmer',
    organization: 'Elins Research Club',
    location: 'Universitas Gadjah Mada',
    period: 'Jan 2023 – Jan 2024',
    description: 'Actively engaged in hardware and software innovation projects, leveraging Arduino, ESP32, and sensors for hardware while also building web applications using Go, Python, and JavaScript (Next.js, React, Express). Explored machine learning techniques for computer vision using CNN, Mobilenet, EfficientNet, and YOLO.',
  }
];

export const educationData = [
  {
    title: "Bachelor's Degree in Electronics and Instrumentation",
    organization: 'Universitas Gadjah Mada',
    location: 'Yogyakarta, Indonesia',
    period: 'Jul 2022 – Present',
    description: 'GPA: 3.54 | Engaged in both software and hardware projects including IoT systems and AI.',
  },
  {
    title: 'Cloud Computing Track Graduate',
    organization: 'Bangkit Academy led by Google',
    location: 'Online',
    period: 'Sep 2024 – Dec 2024',
    description: 'Focused on backend and cloud deployment, CI/CD pipelines, and software engineering best practices.',
  },
];

export const contactInfo = {
  email: 'candikadwihandaru@mail.ugm.ac.id',
  phone: '+62 (812) 3456-7890',
  location: 'Kalasan, Sleman, Yogyakarta',
};