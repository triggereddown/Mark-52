import React from 'react';
import { useWindow } from '../context/WindowContext';
import { motion, AnimatePresence } from 'framer-motion';
import { IconThisPC, IconFolder } from './Icons';

const Dock = () => {
  const { windows, restoreWindow, activeWindowId, toggleStartMenu } = useWindow();

  return (
    <div className="fixed bottom-0 left-0 w-full h-[52px] bg-white/20 backdrop-blur-lg border-t border-white/10 z-50 flex items-center justify-center shadow-lg">
      <div className="flex items-center gap-1 h-full px-2">
         {/* Start Button */}
         <div 
            className="w-10 h-10 rounded-md hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer active:bg-white/50"
            onClick={(e) => { e.stopPropagation(); toggleStartMenu(); }}
         >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
               <rect x="2" y="2" width="9" height="9" fill="#00ADEF"/>
               <rect x="13" y="2" width="9" height="9" fill="#00ADEF"/>
               <rect x="2" y="13" width="9" height="9" fill="#00ADEF"/>
               <rect x="13" y="13" width="9" height="9" fill="#00ADEF"/>
            </svg>
         </div>

         <div className="w-[1px] h-6 bg-gray-400/30 mx-2"></div>

         <AnimatePresence>
            {windows.map((win) => (
              <motion.div
                key={win.id}
                initial={{ scale: 0.8, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="relative group"
                onClick={() => restoreWindow(win.id)}
              >
                <div className={`w-10 h-10 rounded-md flex items-center justify-center transition-all duration-200
                    ${activeWindowId === win.id && !win.minimized ? 'bg-white/30 shadow-sm' : 'hover:bg-white/10'}
                `}>
                   {/* Simplified generic icon for taskbar based on app type */}
                   {win.id === 'home' ? <div className="w-6 h-6"><IconThisPC /></div> : 
                    <div className="w-6 h-6"><IconFolder color="#3B82F6" /></div>}
                </div>
                
                {/* Active Indicator */}
                <div className={`absolute bottom-[2px] left-1/2 -translate-x-1/2 w-1.5 h-1 rounded-full transition-all duration-300
                    ${activeWindowId === win.id && !win.minimized ? 'w-4 bg-blue-500' : win.minimized ? 'w-1.5 bg-gray-400' : 'w-1.5 bg-gray-400 scale-0'}
                `}></div>

                {/* Tooltip */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-2 bg-[#202020] text-white text-xs rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                   {win.title}
                </div>
              </motion.div>
            ))}
         </AnimatePresence>
      </div>
    </div>
  );
};

export default Dock;
