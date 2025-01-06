// Hero
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const heroIcons = [
  { icon: <FaGithub />, href: "https://github.com/Gautam5558" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/gautamjain5558/" },
  { icon: <MdOutlineEmail />, href: "mailto:gautamjain5558@gmail.com" },
];

// About
import { RiGithubLine, RiProjector2Line } from "react-icons/ri";
import { LiaToolsSolid } from "react-icons/lia";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 15,
    icon: <RiGithubLine />,
  },
  {
    title: "Successful Major Projects",
    amount: 12,
    icon: <RiProjector2Line />,
  },
  {
    title: "Technologies Learnt",
    amount: 13,
    icon: <LiaToolsSolid />,
  },
];

import { RiDownloadLine } from "react-icons/ri";
import { RiArrowLeftSFill } from "react-icons/ri";

export const downloadIcon = <RiDownloadLine />;
export const arrowLeftIcon = <RiArrowLeftSFill />;

export const aboutText =
  "Hi, I'am Gautam, a full-stack developer with expertise in technologies like React, Nextjs, TypeScript, Tailwind CSS, Nodejs, PostgreSQL, and MongoDB. My strengths lie in crafting high-performance web applications, leveraging my understanding of front-end and back-end. I specialize in optimizing applications for both speed and efficiency while ensuring a smooth and engaging user experience. I am always eager to learn, grow and embracing new challenges to refine my skills.";

// skills
export const skillsData = [
  {
    name: "NextJs",
    icon: "/skills/nextjs.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "ExpressJS",
    icon: "/skills/expressjs.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "PostgreSql",
    icon: "/skills/postgres.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Scss",
    icon: "/skills/scss.png",
  },
  {
    name: "Docker",
    icon: "/skills/docker.png",
  },
  {
    name: "Redis",
    icon: "/skills/redis.png",
  },
  {
    name: "AWS EC2",
    icon: "/skills/ec2.png",
  },
  {
    name: "AWS S3",
    icon: "/skills/s3.png",
  },
  {
    name: "AWS cloudfront",
    icon: "/skills/cloudfront.png",
  },
  {
    name: "Vscode",
    icon: "/skills/vscode.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "git",
    icon: "/skills/git.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
];

// navbar

import { RiHome5Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiBriefcaseLine } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <RiHome5Line />,
  },
  {
    id: "about",
    name: "About",
    icon: <RiUserLine />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <RiBriefcaseLine />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <GoProjectRoadmap />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <LuMessageCircle />,
  },
];
