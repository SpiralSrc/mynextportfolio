import rrs from "../../../public/projects-assets/rrs-hero.png";
import sampleTemplate from "../../../public/projects-assets/sampleTemplate.png";
import startpage from "../../../public/projects-assets/startpage.png";

export const projectsData = [
  {
    id: 1,
    name: "Rustic Roots Salon",
    desc: "Business website personally designed based on client's theme.",
    banner: rrs,
    tools: [
      {
        name: "NextJs",
        icon: "",
      },
      {
        name: "React Js",
        icon: "",
      },
      {
        name: "Tailwindcss",
        icon: "",
      },
    ],
    url: "https://rusticroots.salon/",
    pc: "",
    mobile: "",
  },
  {
    id: 2,
    name: "Exotic",
    desc: "Sample landing page template.",
    banner: sampleTemplate,
    tools: [
      {
        name: "HTML5",
        icon: "",
      },
      {
        name: "CSS3",
        icon: "",
      },
      {
        name: "Javascript",
        icon: "",
      },
    ],
    url: "https://spiralsrc.dev/template/",
    pc: "",
    mobile: "",
  },
  {
    id: 3,
    name: "My Startpage",
    desc: "Personal project used as everyday startpage, with note taking using in-app rich text editor and saving links.",
    banner: startpage,
    tools: [
      {
        name: "NextJs",
        icon: "",
      },
      {
        name: "React Js",
        icon: "",
      },
      {
        name: "Tailwindcss",
        icon: "",
      },
      {
        name: "Prisma ORM",
        icon: "",
      },
      {
        name: "MONGODB Compass",
        icon: "",
      },
    ],
    url: "https://startpage.spiralsrc.dev/",
    pc: "",
    mobile: "",
  },
];
