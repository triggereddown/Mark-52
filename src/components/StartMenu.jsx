import React from 'react';
import { useWindow } from '../context/WindowContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  FileText, 
  Cpu, 
  Briefcase, 
  BookOpen, 
  FileSpreadsheet, 
  FileUser, 
  Wifi, 
  Settings,
  Search,
  Power
} from 'lucide-react';
import { 
    IconThisPC, 
    IconFolder, 
    IconSettings, 
    IconSkills, 
    IconProjects, 
    IconLearning,
    IconExperience,
    IconConnect,
    IconResume
} from './Icons';

// Import Window Contents handled by opening windows
import HomeWindow from '../windows/HomeWindow';
import AboutWindow from '../windows/AboutWindow';
import SkillsWindow from '../windows/SkillsWindow';
import ProjectsWindow from '../windows/ProjectsWindow';
import LearningWindow from '../windows/LearningWindow';
import ExperienceWindow from '../windows/ExperienceWindow';
import ResumeWindow from '../windows/ResumeWindow';
import ConnectWindow from '../windows/ConnectWindow';
import SettingsWindow from '../windows/SettingsWindow';

const StartMenu = () => {
  const { startMenuOpen, openWindow, toggleStartMenu } = useWindow();

  const apps = [
    { id: 'home', label: 'This PC', icon: <div className="w-8 h-8"><IconThisPC /></div>, component: <HomeWindow />, title: 'This PC' },
    { id: 'about', label: 'About', icon: <div className="w-8 h-8"><IconFolder color="#3B82F6" /></div>, component: <AboutWindow />, title: 'About Me' },
    { id: 'skills', label: 'Skills', icon: <div className="w-8 h-8"><IconSkills /></div>, component: <SkillsWindow />, title: 'Skills' },
    { id: 'projects', label: 'Projects', icon: <div className="w-8 h-8"><IconProjects /></div>, component: <ProjectsWindow />, title: 'Projects' },
    { id: 'learning', label: 'Learning', icon: <div className="w-8 h-8"><IconLearning /></div>, component: <LearningWindow />, title: 'Learning Journey' },
    { id: 'experience', label: 'Experience', icon: <div className="w-8 h-8"><IconExperience /></div>, component: <ExperienceWindow />, title: 'Experience' },
    { id: 'connect', label: 'Connect', icon: <div className="w-8 h-8"><IconConnect /></div>, component: <ConnectWindow />, title: 'Connect' },
    { id: 'settings', label: 'Settings', icon: <div className="w-8 h-8"><IconSettings /></div>, component: <SettingsWindow />, title: 'Settings' },
  ];

  const handleAppClick = (app) => {
      openWindow(app.id, app.title, app.component);
      // Window context handles closing start menu
  };

  return (
    <AnimatePresence>
      {startMenuOpen && (
        <motion.div
           initial={{ opacity: 0, y: 50, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           exit={{ opacity: 0, y: 20, scale: 0.95 }}
           transition={{ type: "spring", stiffness: 300, damping: 25 }}
           className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-[600px] h-[700px] bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl z-50 flex flex-col p-6 text-white overflow-hidden"
           onClick={(e) => e.stopPropagation()} // Prevent close on click inside
        >
           {/* Search Bar */}
           <div className="relative mb-6">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <Search size={18} className="text-gray-400" />
               </div>
               <input 
                  type="text" 
                  placeholder="Type here to search" 
                  className="w-full bg-[#1F1F1F] border border-transparent focus:border-cyan-500/50 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:bg-[#252525] transition-colors placeholder:text-gray-500"
               />
           </div>

           {/* Pinned Section */}
           <div className="flex-1 overflow-y-auto custom-scrollbar">
               <div className="flex justify-between items-center mb-4 px-2">
                   <span className="text-sm font-bold text-gray-300">Pinned</span>
                   <button className="text-xs text-gray-400 hover:bg-white/10 px-2 py-1 rounded">All apps &gt;</button>
               </div>
               
               <div className="grid grid-cols-6 gap-4">
                   {apps.map((app) => (
                       <div 
                         key={app.id} 
                         onClick={() => handleAppClick(app)}
                         className="flex flex-col items-center gap-2 p-2 hover:bg-white/5 rounded-md cursor-pointer transition-colors group"
                       >
                           <div className="transition-transform group-active:scale-90">
                              {app.icon}
                           </div>
                           <span className="text-xs text-gray-300 text-center truncate w-full">{app.label}</span>
                       </div>
                   ))}
               </div>

                {/* Simulation of recommended items */}
               <div className="mt-8">
                   <div className="flex justify-between items-center mb-4 px-2">
                       <span className="text-sm font-bold text-gray-300">Recommended</span>
                       <button className="text-xs text-gray-400 hover:bg-white/10 px-2 py-1 rounded">More &gt;</button>
                   </div>
                   <div className="grid grid-cols-2 gap-2">
                       <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer group" onClick={() => openWindow('resume', 'Resume', <ResumeWindow />)}>
                            <div className="w-8 h-8 bg-red-500/10 rounded flex items-center justify-center text-red-400"><FileUser size={18}/></div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-200">Resume.pdf</span>
                                <span className="text-xs text-gray-500">Recently opened</span>
                            </div>
                       </div>
                       <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-md cursor-pointer group" onClick={() => openWindow('projects', 'Projects', <ProjectsWindow />)}>
                            <div className="w-8 h-8 bg-amber-500/10 rounded flex items-center justify-center text-amber-400"><Briefcase size={18}/></div>
                             <div className="flex flex-col">
                                <span className="text-sm text-gray-200">Project Alpha</span>
                                <span className="text-xs text-gray-500">Recently added</span>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
           
           {/* Footer */}
           <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center px-4">
               <div className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-md cursor-pointer transition-colors">
                   <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold">DM</div>
                   <span className="text-sm font-medium">Deep Moitra</span>
               </div>
               
               <button className="p-2 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors">
                   <Power size={18} />
               </button>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartMenu;
