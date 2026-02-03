import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';
import { useWindow } from '../context/WindowContext';

const Window = ({ windowItem }) => {
  const { closeWindow, minimizeWindow, focusWindow, toggleMaximize } = useWindow();
  const { id, title, component, zIndex, minimized, maximized } = windowItem;

  return (
    <AnimatePresence>
      {!minimized && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={
            maximized 
            ? { scale: 1, opacity: 1, y: 0, width: '100vw', height: '100vh', top: 0, left: 0, borderRadius: 0 }
            : { scale: 1, opacity: 1, y: 0, width: 'min(90vw, 900px)', height: 'min(80vh, 600px)', borderRadius: '1rem' }
          }
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.8 }}
          drag={!maximized}
          dragMomentum={false}
          onMouseDown={() => focusWindow(id)}
          style={{ zIndex, ...(maximized ? { transform: 'none !important' } : {}) }}
          className={`absolute flex flex-col overflow-hidden text-white shadow-2xl backdrop-blur-xl bg-black/60 border border-white/10 ring-1 ring-white/5
            ${!maximized ? 'top-20 left-10 md:left-40 rounded-xl' : ''}`}
        >
          {/* Glass Title Bar */}
          <div className="h-10 bg-white/5 border-b border-white/5 flex items-center justify-between px-4 select-none backdrop-blur-md"
               onDoubleClick={() => toggleMaximize(id)}>
            <div className="flex items-center space-x-3 group">
               <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] cursor-pointer hover:bg-[#FF5F56]/80 transition-colors shadow-inner flex items-center justify-center" onClick={(e) => { e.stopPropagation(); closeWindow(id); }}>
                  <X size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
               </div>
               <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] cursor-pointer hover:bg-[#FFBD2E]/80 transition-colors shadow-inner flex items-center justify-center" onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}>
                   <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
               </div>
               <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] cursor-pointer hover:bg-[#27C93F]/80 transition-colors shadow-inner flex items-center justify-center" onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }}>
                   <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
               </div>
            </div>
            
            <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-200/90 tracking-wide shadow-sm">
               {title}
            </div>

            <div className="w-10"></div> {/* Spacer for balance */}
          </div>

          {/* Window Content */}
          <div className="flex-1 overflow-auto bg-black/20 p-0 cursor-default relative w-full h-full" onMouseDown={(e) => e.stopPropagation()}>
             {/* Inner glow effect */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
             <div className="relative z-10 h-full">
                {component}
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window;
