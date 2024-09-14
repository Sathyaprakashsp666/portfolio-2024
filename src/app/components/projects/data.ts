import { Project } from "@/types/project";
import memories from "../../../../public/projects/mempries.png";
import qtrip from "../../../../public/projects/atrip.png";
import qkart from "../../../../public/projects/qkart.png";
import qnews from "../../../../public/projects/qnews.png";

const projects: Project[] = [
  {
    id: "QKart",
    category: "Web App",
    name: "QKart",
    description: `QKart is an e-commerce application offering a variety of products for customers to choose from. `,
    points: [
      "Implemented the core logic for authentication, shopping cart and checkout",
      "Improved UI by adding responsive design elements for uniform experience across different devices",
      "Utilized REST APIs to dynamically load and render data served by the backend server",
    ],
    tags: [
      "Javascript",
      "React",
      "CSS",
      "React Hooks",
      "React Router",
      "Material UI",
      "Debouncing",
      "ES6",
      "REST",
    ],
    link: "https://qkart-app-06.netlify.app/",
    repo:
      "https://www.crio.do/learn/portfolio/sathyaprakash-sp-6/ME_QKART_FRONTEND_V2/",
    image: qkart,
  },
  {
    id: "QTripDynamic",
    category: "Web App",
    name: "QTripDynamic",
    description: `QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. `,
    points: [
      "Created web pages using HTML and CSS and made them dynamic using JavaScript",
      "Improved UX with multi-select filters, image carousels",
      "Utilised localStorage to persist user preferences at client-sides",
    ],
    tags: [
      "HTML5",
      "CSS3",
      "Javascript",
      "HTTP",
      "Bootstrap",
      "localStorage",
      "DOM Manipulation",
    ],
    link: "https://sathya-prakash-q-trip-dynamic.netlify.app/",
    repo:
      "https://www.crio.do/learn/portfolio/sathyaprakash-sp-6/ME_QTRIPDYNAMIC/",
    image: qtrip,
  },
  {
    id: "XBoard",
    category: "Web App",
    name: "XBoard",
    description: `XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.`,
    points: [
      "Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch",
      "Used Accordions and Image Carousel to improve UI",
      "Fetched news content from flipboard's RSS feed using REST API",
    ],
    tags: [
      "HTML5",
      "CSS3",
      "Javascript",
      "Netlify",
      "Figma",
      "Bootstrap Carousel",
      "ES6",
    ],
    link: "https://satya-x-board.netlify.app/",
    repo: "https://satya-x-board.netlify.app/",
    image: qnews,
  },
  {
    id: "Memory Creator",
    category: "Web Application",
    name: "Memory Creato",
    description: ` The App is called "Memories" and it is a simple social media app that allows users to post interesting events that happened in their lives.`,
    points: [
      "Create, Read, Update, and Delete Memories",
      "Responsive design",
      "Developed a form with image upload capabilities, enabling users to attach photos to their memory posts",
      "Integrated secure OAuth authentication to allow users to sign in using third-party providers.",
    ],
    tags: [
      "React JS",
      "CSS3",
      "Material UI",
      "Node JS",
      "ExpressJS",
      "MongoDB",
    ],
    link: "https://memories-creator-app.netlify.app/",
    repo: "https://github.com/Sathyaprakashsp666/Memories-MERN",
    image: memories,
  },
];

export default projects;
