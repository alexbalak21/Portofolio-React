import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import react from "../assets/skills/react.png"
import node from "../assets/skills/node.png"
import mongo from "../assets/skills/mongodb.png"
import spingboot from "../assets/skills/springboot.png"
import python from "../assets/skills/python.png"
import java from "../assets/skills/java.png"
import django from "../assets/skills/django.png"
import laravel from "../assets/skills/laravel.png" 
import flask from "../assets/skills/flask.png"
import php from "../assets/skills/php.png"
import sql from "../assets/skills/sql.png"
import javascript from "../assets/skills/javascript.png"
import tailwind from "../assets/skills/tailwind.png"
import typescript from "../assets/skills/typescript.png"

import google from "../assets/history/google.png"
import microsoft from "../assets/history/microsoft.png"
import netflix from "../assets/history/netflix.png"

import project from "../assets/project.png"

export const languages = [
  {
    title: "Java",
    imageSrc: java,
  },
  {
    title: "Python",
    imageSrc: python,
  },
  {
    title: "JavaScript",
    imageSrc: javascript,
  },
  {
    title: "PHP",
    imageSrc: php,
  },
]

export const frameworks = [
  {
    title: "Spring Boot",
    imageSrc: spingboot,
  },
  {
    title: "Django",
    imageSrc: django,
  },
  {
    title: "Flask",
    imageSrc: flask,
  },
  {
    title: "Laravel",
    imageSrc: laravel,
  },
]

export const technologies = [
  {
    title: "React",
    imageSrc: react,
  },
  {
    title: "Tailwind CSS",
    imageSrc: tailwind,
  },
  {
    title: "TypeScript",
    imageSrc: typescript,
  },
  {
    title: "Node",
    imageSrc: node,
  },
  {
    title: "SQL",
    imageSrc: sql,
  },
  {
    title: "MongoDB",
    imageSrc: mongo,
  },
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
]

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
