import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  systaldyn,
  anchors,
  clinical,
  solidity,
  blockchain,
  polygon,
  receipe,
  instaclone,
  dappchat,
  x,
  gmail,
  githublogo,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3.0 Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "blockchain",
    icon: blockchain,
  },
  {
    name: "polygon",
    icon: polygon,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Anchors",
    icon: anchors,
    iconBg: "#383E56",
    date: "June 2023 - Dec 2023",
    points: [
      " Developed and maintained web applications using React.js and associated technologies.",
      "Collaborated with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality products.",
      "Implemented responsive design techniques to ensure seamless user experiences across various devices and browsers.",
      "Actively participated in code reviews, offering constructive feedback to foster continuous improvement within the development team.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Clinical AI Assistance",
    icon: clinical,
    iconBg: "#383E56",
    date: "Dec 2023 - Feb 2024",
    points: [
      " Developed and maintained web applications using React.js and related technologies, including creating APIs for appointment scheduling with doctors using Node.js",
      "Integrated the Razorpay gateway for secure payment processing in collaboration with cross-functional teams.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Systaldyn",
    icon: systaldyn,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Current",
    points: [
      "Led the frontend development efforts for the Hitachi-Industrial-Asset-Monetization project, leveraging React and integrating Highcharts for dynamic data visualization",
      "Designed and implemented features for asset creation, image uploads, data input, and PDF attachment functionalities.",
      "Managed backend development utilizing Node.js APIs to ensure efficient asset information management and data retrieval.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Media App",
    description:
      "A full-stack application where users can upload posts with captions, like, comment, and save the posts. Complete authentication is implemented end-to-end, enabling users to edit their profiles and reset their passwords.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "red-text-gradient",
      },
    ],
    image: instaclone,
    live_link: "https://charming-belekoy-1d7e17.netlify.app/",
    source_code_link: "https://github.com/Rachit2323/Startup",
  },
  {
    name: "Decentralised Chat Application",
    description:
      "A decentralized application where users can chat with each other, integrated with MetaMask for authentication and transactions. The smart contract is written in Solidity and deployed on the Polygon (formerly Matic) blockchain.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: dappchat,
    live_link: "https://fancy-gnome-3504f4.netlify.app/",
    source_code_link: "https://github.com/Rachit2323/React_Dapp",
  },
  {
    name: "Food Receipe",
    description:
      "You have the flexibility to contribute your own recipes, complete with  steps and  photos, ensuring a comprehensive culinary experience. Additionally, this platform empowers you to enhance existing recipes by offering the option to edit and refine them according to your preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: receipe,
    live_link: "https://food-receipe-g6mi.vercel.app/",
    source_code_link: "https://github.com/Rachit2323/Food_Receipe",
  },
];

export { services, technologies, experiences, testimonials, projects };
