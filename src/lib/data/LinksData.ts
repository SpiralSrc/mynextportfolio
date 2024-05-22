import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiMongoose,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

// socials icons
import { FaGithub } from "react-icons/fa";

export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
  // {
  //   title: "Blogs",
  //   path: "/blogs",
  // },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const skillsData = [
  {
    name: "ReactJs",
    icon: FaReact,
  },
  {
    name: "NextJs",
    icon: TbBrandNextjs,
  },
  {
    name: "HTML5",
    icon: AiOutlineHtml5,
  },
  {
    name: "CSS3",
    icon: TbBrandCss3,
  },
  {
    name: "Javascript",
    icon: RiJavascriptLine,
  },
  {
    name: "Tailwindcss",
    icon: SiTailwindcss,
  },
  {
    name: "MongoDb",
    icon: SiMongodb,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Prisma ORM",
    icon: SiPrisma,
  },
  {
    name: "Mongoose",
    icon: SiMongoose,
  },
];

export const socialsData = [
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/SpiralSrc",
  },
];
