import React from 'react';
import { learningProjects } from '../assets/data/learning';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const LearningCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group bg-black/40 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 flex flex-col h-full"
  >
    {/* Image Container */}
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
      />
      
      {/* Overlay Actions */}
      <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
         {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-colors" title="View Source">
                <Github size={20} />
            </a>
         )}
         {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-colors" title="Live Demo">
                <ExternalLink size={20} />
            </a>
         )}
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
         <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{project.title}</h3>
         <span className="text-xs text-gray-500 font-mono mt-1">{project.date}</span>
      </div>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
        {project.tech?.slice(0, 4).map((t) => (
          <span key={t} className="text-xs font-medium text-pink-200/80 bg-pink-900/20 px-2 py-1 rounded border border-pink-500/10">
            {t}
          </span>
        ))}
         {project.tech?.length > 4 && (
             <span className="text-xs text-gray-500 px-1 py-1">+{project.tech.length - 4}</span>
         )}
      </div>
    </div>
  </motion.div>
);

const LearningWindow = () => {
  const learningProjectsList = learningProjects
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="p-2 md:p-6 h-full overflow-y-auto custom-scrollbar">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-6">
        <div>
           <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
               <span className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></span>
               Learning Journey
           </h2>
           <p className="text-gray-400 max-w-lg">
             Experiments, mini-builds, and coding challenges exploring new technologies.
            </p>
        </div>
        <div className="text-sm text-gray-500 font-mono">
           {learningProjectsList.length} Experiements
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-8">
        {learningProjectsList.map((project, idx) => (
          <LearningCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default LearningWindow;
