

import google from "../assets/history/google.png"
import microsoft from "../assets/history/microsoft.png"
import netflix from "../assets/history/netflix.png"

import project from "../assets/project.png"


export const history = [
  {
    role: "Software Engineer",
    organisation: "Google",
    startDate: "Sept, 2022",
    endDate: "Present",
    experiences: ["Worked on Google Maps", "Reduced load times by 50%"],
    imageSrc: google,
  },
  {
    role: "UI Designer",
    organisation: "Mirosoft",
    startDate: "Aug, 2021",
    endDate: "Aug, 2022",
    experiences: ["Worked on Windows 10", "Designed the control panel"],
    imageSrc: microsoft,
  },
  {
    role: "SWE Intern",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: ["Worked on component library", "Helped create UI components"],
    imageSrc: netflix,
  },
]

export const projects = [
  {
    title: "Project A",
    imageSrc: project,
    description:
      "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
  {
    title: "Project B",
    imageSrc: project,
    description:
      "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node", "Sass"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
  {
    title: "Project C",
    imageSrc: project,
    description:
      "This is a project made to learn the latest languages by building an app.",
    skills: ["React", "Express", "Node"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
]
