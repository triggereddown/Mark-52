import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Code2, Terminal } from 'lucide-react';
import { useWindow } from '../context/WindowContext';
import ProjectsWindow from './ProjectsWindow';

const HomeWindow = () => {
  const { openWindow, minimizeWindow } = useWindow();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center relative overflow-hidden p-6">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10"
      >
        <div className="relative inline-block mb-6">
           <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-2xl opacity-20 rounded-full"></div>
           <Terminal size={80} className="relative z-10 text-white drop-shadow-2xl" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4 tracking-tight drop-shadow-sm">
          Deep Moitra
        </h1>
        
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6"></div>

        <h2 className="text-xl md:text-2xl font-light text-cyan-200 mb-8 tracking-wider">
          Full Stack Developer <span className="text-gray-500 mx-2">|</span> AIML Student
        </h2>

        <p className="text-gray-300 max-w-2xl leading-relaxed text-lg mx-auto mb-10 font-light">
          "I build <span className="text-white font-normal">clean, practical, and interactive</span> web applications that focus on usability, data, and user experience. 
          This portfolio is designed as a desktop environment to reflect how I think about systems and interfaces."
        </p>

        <div className="flex justify-center gap-4">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => openWindow('projects', 'Projects', <ProjectsWindow />)}
             className="px-6 py-3 bg-white text-black font-medium rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow"
           >
              <Code2 size={18} /> View Projects
           </motion.button>
             <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => minimizeWindow('home')}
             className="px-6 py-3 bg-white/10 text-white font-medium rounded-full flex items-center gap-2 border border-white/20 hover:bg-white/20 backdrop-blur-md transition-colors"
           >
              <MousePointer2 size={18} /> Explore Desktop
           </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeWindow;
