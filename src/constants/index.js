import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  mern,
  react,
  net,
  brts,
  silvert,
  facility,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Enthusiastic  Gamer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN + React Native SDE",
    company_name: "The One Technologies",
    icon: mern,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Building and enhancing mobile applications with React Native and associated technologies.",
      "Implementing adaptive designs and ensuring compatibility across various mobile platforms.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Engaging in collaborative code reviews and offering valuable feedback to fellow developers.",
    ],
  },

  {
    title: "React Native",
    company_name: "Aldairtiyna",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jan 2023",
    points: [
      "Implementing adaptive designs and ensuring compatibility across various mobile platforms.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Active participation in code reviews, providing insightful feedback, and maintaining code quality standards.",
    ],
  },
  {
    title: "React JS",
    company_name: "Aldairtiyna",
    icon: react,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Working closely with diverse teams, including designers and product managers, to deliver top-notch mobile solutions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: ".Net Developer",
    company_name: "GEC, Patan",
    icon: net,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Creating robust web applications using the .NET framework and associated technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Ensuring scalability and reliability by implementing best practices in .NET development.",
      "Active participation in code reviews, providing insightful feedback, and maintaining code quality standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a App as beautiful as our product, but Rick proved me wrong.",
    name: "Kuldip Panchal",
    designation: "SDE 2",
    company: "The One Technologies.",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've encountered few developers as dedicated to their clients' success as Aditya, a true advocate for achieving excellence in web and app development.",
    name: "Nirali Timbadiya",
    designation: "SDE 1",
    company: "The One Technologies.",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Swapnil Panchal",
    designation: "Project Manager",
    company: "The One Technologies.",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "BRTS App",
    description:
      "Empowering commuters in Ahmedabad, my BRTS app streamlines city bus travel, providing real-time updates, route information, and seamless navigation for a convenient and efficient public transportation experience.",
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
        name: "react-naitve",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: brts,
    source_code_link: "https://github.com/A3939/React-Native-BRT-App",
  },
  {
    name: "Facility Rental",
    description:
      "Revolutionizing fitness scheduling, my cross-platform app simplifies the process of booking basketball and gym courts. Seamlessly accessible on various devices, it ensures users effortlessly reserve their preferred courts, enhancing the overall experience of sports enthusiasts and fitness enthusiasts alike.",
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
        name: "react-naitve",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: facility,
  },
  {
    name: "Silvert Smart",
    description:
      "Experience enhanced peace of mind with my cutting-edge app, using smart shoe technology to monitor travel history and provide real-time location insights for your loved ones. Stay connected and informed about your child or grandparents effortlessly, right from your fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-naitve",
        color: "pink-text-gradient",
      },
    ],
    image: silvert,
  },
];

export { services, technologies, experiences, testimonials, projects };
