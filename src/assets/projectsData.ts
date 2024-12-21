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
    favicon: "/projects/dev_overflow_favicon.png",
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
      "Collaborate, manage projects and reach new productivity peaks",
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
    id: 1,
    title: "Homyz",
    description: "",
    favicon: "",
    githubLink: "",
    deploymentLink: "",
    images: ["", ""],
  },
];
