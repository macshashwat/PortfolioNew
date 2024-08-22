import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Shashwat Mishra",
    stack: ["Software Engineer", "Full Stack Developer", "UI/UX Designer"],
    bio: "Software developer with excellent problem-solving skills and ability to perform well in a team. I mostly work with computers, and love to develop exciting software. I also take a special interest in cybersecurity and cloud computing. Currently, I am developing Full Stack web apps for SaaS platforms."
}



const ProjectInfo = [
    {
        title: "Live Docs",
        desc: "A real-time collaborative text editor that allows multiple users to edit documents simultaneously with live updates and real-time notifications for document sharing, new comments, and collaborator activities.",
        image: "Livedocs.png",
        live: true,
        technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Live Blocks", "Heroicons", "HeadlessUI"],
        link: "https://live-docs-lemon.vercel.app/sign-in",
        github: "https://github.com/macshashwat/LiveDocs"
    },
    {
        title: "Path-Visualizer",
        desc: "A web app that visualizes algorithm paths using Maze, Graph, and Speed features, allowing users to track the algorithm's process. Currently the app has support for 4 majorly used algorithms in graph with speed levels of Slow, Medium and Fast.",
        image: "PathVisualizer.png",
        live: true,
        technologies: ["Next.js 14", "Typescript", "Tailwind CSS"],
        link: "https://pathfinding-visualizer-nu.vercel.app/",
        github: "https://github.com/macshashwat/Pathfinder-Visualizer"
    },
    {
        title: "Jot Down",
        desc: "An advanced notes app with features of adding images, video to your notes with publishing functionality, facilitating seamless content sharing and collaboration. Added dark mode to the UI for better viewing experience.",
        image: "Jotdown.png",
        live: true,
        technologies: ["Next.js 14", "Convex", "React"],
        link: "https://jot-down-two.vercel.app/",
        github: "https://github.com/macshashwat/JotDown"
    },
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "Next JS", "React JS", "Angular", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]
const socialLinks = [
    { link: "https://github.com/macshashwat", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/macshashwat", icon: IconBrandLinkedin },

    { link: "https://leetcode.com/u/macshashwat/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Software Engineer Intern",
        company: "MerlinAI",
        date: "May 2024 - July 2024",
        desc: "Designed and deployed a chatbot with code snippet that seamlessly integrates into any website, increasing client interaction rates by 35% and reducing customer service response time by 30%. Developed domain-specific chatbot capibilities to provide tailored responses to client inquiries. Optimized the chatbot's functionality to promote courses and products listed on the website, boosting sales conversion rates by 25% through integrated email marketing strategies.",
        skills: ["Next.js 14", "Typescript", "Pusher", "Node JS", "Neon", "Prisma", "OpenAI"]
    },
]
const Slugs = [
    "typescript",
    "javascript",
    "dart",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "mysql",
    "postgresql",
    "firebase",
    "nginx",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "gitlab",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };