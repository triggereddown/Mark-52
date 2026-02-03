import React, { useEffect } from 'react';
import { useWindow } from '../context/WindowContext';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import Dock from './Dock';
import { motion } from 'framer-motion';
import StartMenu from './StartMenu';
import { 
  IconThisPC, 
  IconFolder, 
  IconSettings, 
  IconChrome, 
  IconSkills, 
  IconProjects, 
  IconLearning,
  IconExperience,
  IconConnect,
  IconResume,
  IconTerminal
} from './Icons';

// Import Window Contents
import HomeWindow from '../windows/HomeWindow';
import AboutWindow from '../windows/AboutWindow';
import SkillsWindow from '../windows/SkillsWindow';
import ProjectsWindow from '../windows/ProjectsWindow';
import LearningWindow from '../windows/LearningWindow';
import ExperienceWindow from '../windows/ExperienceWindow';
import ResumeWindow from '../windows/ResumeWindow';
import ConnectWindow from '../windows/ConnectWindow';
import SettingsWindow from '../windows/SettingsWindow';
import TerminalWindow from '../windows/TerminalWindow';

const Desktop = () => {
  const { windows, openWindow, wallpaper, toggleStartMenu, setStartMenuOpen } = useWindow();

  // Define desktop icons and their mappings
  const desktopIcons = [
    { id: 'home', label: 'This PC', icon: <IconThisPC />, component: <HomeWindow />, title: 'This PC' },
    { id: 'about', label: 'About', icon: <IconFolder color="#3B82F6" />, component: <AboutWindow />, title: 'About Me' },
    { id: 'skills', label: 'Skills', icon: <IconSkills />, component: <SkillsWindow />, title: 'Skills' },
    { id: 'projects', label: 'Projects', icon: <IconProjects />, component: <ProjectsWindow />, title: 'Projects' },
    { id: 'learning', label: 'Learning', icon: <IconLearning />, component: <LearningWindow />, title: 'Learning Journey' },
    { id: 'experience', label: 'Experience', icon: <IconExperience />, component: <ExperienceWindow />, title: 'Experience' },
    { id: 'resume', label: 'Resume', icon: <IconResume />, component: <ResumeWindow />, title: 'Resume' },
    { id: 'connect', label: 'Connect', icon: <IconConnect />, component: <ConnectWindow />, title: 'Connect' },
    { id: 'terminal', label: 'Terminal', icon: <IconTerminal />, component: <TerminalWindow />, title: 'Command Prompt' },
    { id: 'settings', label: 'Settings', icon: <IconSettings />, component: <SettingsWindow />, title: 'Settings' },
  ];

  return (
    <div 
      className="h-screen w-screen overflow-hidden relative font-sans text-white selection:bg-blue-500/30 bg-black"
      style={{ 
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={() => setStartMenuOpen(false)} 
    >
      {/* Desktop Icons Grid - Windows Grid Flow */}
      <div className="absolute top-0 left-0 p-2 flex flex-col flex-wrap h-[calc(100vh-60px)] content-start gap-1 z-10 w-fit">
        {desktopIcons.map((icon, idx) => (
          <div key={icon.id}>
            <DesktopIcon
                label={icon.label}
                icon={icon.icon}
                onClick={() => openWindow(icon.id, icon.title, icon.component)}
            />
          </div>
        ))}
      </div>

      {/* Windows Layer */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {windows.map((win) => (
          <div key={win.id} className="pointer-events-auto">
             <Window windowItem={win} />
          </div>
        ))}
      </div>

      {/* Start Menu Layer */}
      <StartMenu />

      {/* Taskbar Layer */}
      <Dock />
    </div>
  );
};

export default Desktop;
