import { projectShowcaseListItemType } from "@/types";

export const projectShowcaseList: projectShowcaseListItemType[] = [
  {
    index: 0,
    title: "Dev Overflow",
    href: "/projects",
    tags: [
      "Nextjs",
      "Reactjs",
      "Typescript",
      "TailwindCss",
      "Shadcn",
      "webhooks",
      "React-hook-form",
      "zod",
    ],
    image: "/projects/dev-overflow.png",
  },
  {
    index: 1,
    title: "Taskify",
    href: "/projects",
    tags: [
      "Nextjs",
      "Typescript",
      "Stripe",
      "Unsplash",
      "dnd(drag&drop)",
      "clerk",
    ],
    image: "/projects/taskify.png",
  },
  {
    index: 2,
    title: "Homyz",
    href: "/projects",
    tags: [
      "Reactjs",
      "Expressjs",
      "Tanstack-Query",
      "MantineUI",
      "React-Leaflet",
      "framer-motion",
      "JWT",
    ],
    image: "/projects/homyz.png",
  },
];

export const projectData = [
  {
    id: 1,
    title: "Dev overflow",
    description:
      "A community platform asking and answering programming questions.Get help,share knowledge and collaborate with developers all around the world. Explore topics in web development ,data structures etc.",
    favicon: "/projects/dev-overflow-favicon.png",
    githubLink: "https://github.com/Gautam5558/dev_overflow",
    deploymentLink: "https://dev-overflow-iota-six.vercel.app/",
    images: [
      "/projects/dev-overflow.png",
      "/projects/dev-overflow-profile.png",
      "/projects/dev-overflow-dark.png",
      "/projects/dev-overflow-search.png",
    ],
  },
  {
    id: 2,
    title: "Taskify",
    description:
      " Taskify is a web app designed for efficient task management and collaboration within teams. It provides a user-friendly UI for organizing tasks into customizable boards, lists, and cards, allowing teams to effectively track their projects from start to finish.",
    favicon: "/projects/taskify-favicon.png",
    githubLink: "https://github.com/Gautam5558/taskify",
    deploymentLink: "https://taskify-coral-zeta.vercel.app/",
    images: [
      "/projects/taskify.png",
      "/projects/taskify-board.png",
      "/projects/taskify-home.png",
      "/projects/taskify-activity.png",
    ],
  },
  {
    id: 3,
    title: "Homyz",
    description:
      "A real estate application for both dealers and buyers to make bookings for visiting a property. It offers a seamless user experience with beautiful UI design, powered by various technologies and libraries such as JWT authentication, Tanstack Query for efficient data fetching etc.",
    favicon: "/projects/homyz-favicon.png",
    githubLink: "https://github.com/Gautam5558/real_estate_app",
    deploymentLink: "https://real-estate-app-client.vercel.app/",
    images: [
      "/projects/homyz.png",
      "/projects/homyz-residencies.png",
      "/projects/homyz-booking.png",
      "/projects/homyz-search.png",
    ],
  },
];
