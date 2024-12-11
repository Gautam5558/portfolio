// Hero
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const heroIcons: JSX.Element[] = [
  <FaGithub key={1} />,
  <FaLinkedin key={2} />,
  <FaTelegram key={3} />,
  <FaInstagramSquare key={4} />,
  <FaXTwitter key={5} />,
];

// About
import { RiProjector2Line } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { RiAwardFill } from "react-icons/ri";
export const aboutData = [
  {
    title: "Github Repos",
    amount: 15,
    icon: <FaGithub />,
  },
  {
    title: "Successful Projects",
    amount: 9,
    icon: <RiProjector2Line />,
  },
  {
    title: "Satisfied Clients",
    amount: 2,
    icon: <RiGroupLine />,
  },
  {
    title: "Awards and Recoganition",
    amount: 4,
    icon: <RiAwardFill />,
  },
];

import { RiDownloadLine } from "react-icons/ri";
import { RiArrowLeftSFill } from "react-icons/ri";

export const downloadIcon = <RiDownloadLine />;
export const arrowLeftIcon = <RiArrowLeftSFill />;

export const aboutText =
  " Hi, I'm Nick, a web developer & designer. I blend the technical  skills of web development with the creative aspects of web design. I code in HTML, CSS, JavaScript, React, NextJS... to build functional and responsive websites, while also using design tools like Photoshop and Figma to create visually appealing and user-friendly  interfaces. My role allows me to ensure that websites not only work well but also look great and provide an excellent user experience.";
