import work1 from '../projects/work-1.png';
import work7 from '../projects/work-7.png';
import work8 from '../projects/work-8.png';
import work9 from '../projects/work-9.png';
import work10 from "../projects/work-10.png";

export const projects = [
  {
    id: 1,
    title: "Analytify-Pomodoro Analytics Platform",
    description:
      "Full-stack platform enabling users to complete,start and abandon sessions of 25min and trac their daily and session wise analytics",
    image: work10,
    github: "https://github.com/triggereddown/Analytify",
    live: "https://analytify.vercel.app/",
    type: "project",
    date: "2026-01-25",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  },
  {
    id: 2,
    title: "GamerThred - Game Quest & Rewards Platform",
    description:
      "Full-stack platform enabling gamers to complete curated quests and earn rewards through a structured progression system with admin workflows.",
    image: work8,
    github: null,
    live: "https://projectgamerthred.vercel.app/",
    type: "project",
    date: "2026-01-25",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  },
  {
    id: 3,
    title: "HealthHive - AI Powered Health Platform",
    description:
      "React frontend integrated with FastAPI ML backend featuring NLP interaction, mental health chatbot, and intelligent insights.",
    image: work9,
    github: "https://github.com/triggereddown/HealthHive",
    live: "https://health-hive-nine.vercel.app/",
    type: "project",
    date: "2026-01-10",
    tech: ["React", "FastAPI", "ML Model", "NLP", "Tailwind"],
  },
  {
    id: 4,
    title: "AlfredAIChat - AI Code Reviewer & Chat App",
    description:
      "MERN based AI-powered code review system combined with real-time team chat for collaborative development.",
    image: work7,
    github: "https://github.com/triggereddown/AlfredCodeV2",
    live: "https://aichattrigger.onrender.com/",
    type: "project",
    date: "2025-12-20",
    tech: ["MERN", "Socket.io", "AI APIs", "JWT"],
  },
  {
    id: 5,
    title: "Forge UI Store",
    description:
      "Full-stack platform for discovering and managing modern UI components with admin panel and futuristic interface.",
    image: work1,
    github: "https://github.com/triggereddown/UIStore",
    live: "https://forge-ui-seven.vercel.app/",
    type: "project",
    date: "2025-11-10",
    tech: ["React", "Node.js", "MongoDB", "Admin Panel"],
  },
  
];
