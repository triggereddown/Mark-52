import React from 'react';
import { motion } from 'framer-motion';

const AboutWindow = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-6 p-2">
       {/* Left Column - Text */}
       <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6 text-emerald-400 flex items-center gap-3"
          >
             <span className="w-8 h-1 bg-emerald-400 rounded-full inline-block"></span>
             About Me
          </motion.h2>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="space-y-6 text-gray-300 leading-relaxed text-lg"
          >
            <p>
              I am a <span className="text-white font-medium">B.Tech AIML student</span> passionate about frontend engineering, system design, and building meaningful full-stack applications.
            </p>
            <p>
              My journey started with simple HTML/CSS pages, but my curiosity led me to explore modern frameworks like <span className="text-emerald-200">React</span>, backend technologies like <span className="text-emerald-200">Node.js</span>, and the vast world of AI integration.
            </p>
            <p>
              I enjoy turning simple ideas into structured, interactive products that solve real problems. Whether it's optimizing a database query or crafting a pixel-perfect UI, I love the process of <span className="italic text-white">creation</span>.
            </p>

             <div className="pt-6 grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">2+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">Years Exp</div>
                 </div>
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">15+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">Projects</div>
                 </div>
             </div>
          </motion.div>
       </div>

       {/* Right Column - Visual */}
       <div className="hidden md:flex flex-1 items-center justify-center p-6 relative">
           <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl"></div>
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="relative z-10 w-full max-w-xs aspect-square backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center"
           >
              {/* Abstract avatar representation */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 shadow-[0_0_50px_rgba(16,185,129,0.4)] flex items-center justify-center text-4xl font-bold text-black/50">
                 DM
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs font-mono text-emerald-400 shadow-xl">
                 &lt;Developer /&gt;
              </div>
               <div className="absolute -bottom-4 -left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs font-mono text-cyan-400 shadow-xl">
                 Problem Solver
              </div>
           </motion.div>
       </div>
    </div>
  );
};

export default AboutWindow;
