//Skills section loto

import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
//Project section Logo's
import RPSpLogo from './assets/work_logo/RPSp.png';
import ImaggepLogo from './assets/work_logo/imaggep.png';
import digitalPLogo from './assets/work_logo/digitalP.png';
//Education section Logo's
import BscLogo from './assets/education_logo/bsc.png'
import clgLogo from './assets/education_logo/clg.jpg'
import highSchoolLogo from './assets/education_logo/highSchool.webp'

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "HTML", logo: htmlLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", logo: nodejsLogo },
      { name: "Express js", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const Projects = [
    {
        id:0,
        title:"Rock-Paper-Scissor-Game",
        description:
        "Rock-Paper-Scissors Game is a web-based application built with HTML, CSS, and JavaScript that lets users play against the computer, delivering an interactive gameplay experience with instant results.",
        image:RPSpLogo,
        tags:["HTML","CSS","JavaScript"],
        github:"https://github.com/Gogeta22/Rock-Paper-Scissor-Game",
        website:"https://gogeta22.github.io/Rock-Paper-Scissor-Game/"
    },
    {
        id:1,
        title:"Random-Photos",
        description:
        "Random Photo Generator is a web-based project built with HTML, CSS, and JavaScript that displays a new random image on each interaction, creating a fresh and engaging visual experience..",
        image:ImaggepLogo,
        tags:["HTML","CSS","JavaScript"],
        github:"https://github.com/Gogeta22/Random-Photos",
        website:"https://gogeta22.github.io/Random-Photos/"
    },
    {
        id:2,
        title:"Digital Clock",
        description:
        "Digital Clock Website is a simple web application built using HTML, CSS, and JavaScript that displays the current time in real-time with a clean and responsive interface.",
        image:digitalPLogo,
        tags:["HTML","CSS","JavaScript"],
        github:"https://github.com/Gogeta22/Digital-Clock",
        website:"https://gogeta22.github.io/Digital-Clock/"
    },
]

export const eduction = [
{
    id: 0,
    img:BscLogo,
    school:"SDSM Collage Palghar",
    date:"Aug 2019 - jun 2022",
    grade:"7.1 CGPA",
    decs:"B.Sc. Computer Science graduate from SDSM College with knowledge of Data Structures, DBMS, Operating Systems, Computer Networks, and Programming Languages.",
    degree:"Bachelor of Science - BSC (Computer Science)"

},
{
    id: 1,
    img:clgLogo,
    school:"Mk Junior College Chinchani",
    date:"july 2016 - jun 2018",
    grade:"41%",
    decs:"I have completed my 12th grade in Science, where I developed a strong foundation in Physics, Chemistry, and Mathematics, along with analytical thinking and problem-solving skills.",
    degree:"Bachelor of Science - BSC (Computer Science)"

},
{
    id: 2,
    img:highSchoolLogo,
    school:"Janata High School, Navapure - Palghar",
    date:"Aug 2019 - jun 2022",
    grade:"72%",
    decs:"I have completed my 10th standard in the Semi-English medium, where I built a strong foundation in basic academics along with communication and comprehension skills.",
    degree:"Bachelor of Science - BSC (Computer Science)"

},
]
