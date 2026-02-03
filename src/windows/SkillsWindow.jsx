import React from 'react';
import { motion } from 'framer-motion';

const SkillPill = ({ name }) => (
  <span className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md text-sm text-gray-200 border border-white/5 transition-colors cursor-default">
    {name}
  </span>
);

const SkillCategory = ({ title, skills, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-black/30 transition-all group"
  >
    <h3 className={`font-bold mb-4 text-lg ${color} flex items-center gap-2`}>
       <span className={`w-2 h-2 rounded-full bg-current shadow-[0_0_10px_currentColor]`}></span>
       {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillPill key={skill} name={skill} />
      ))}
    </div>
  </motion.div>
);

const SkillsWindow = () => {
  return (
    <div className="p-2 md:p-6 h-full overflow-y-auto">
      <div className="mb-8 text-center">
         <h2 className="text-3xl font-bold text-white mb-2">Technical Arsenal</h2>
         <p className="text-gray-400 text-sm">Tools and technologies I use to build digital products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <SkillCategory 
            title="Frontend Engineering" 
            color="text-violet-400"
            skills={["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", "Framer Motion", "Vite"]}
            delay={0.1}
        />
        <SkillCategory 
            title="Backend Systems" 
            color="text-emerald-400"
            skills={["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth", "Firebase"]}
            delay={0.2}
        />
        <SkillCategory 
            title="DevOps & Tools" 
            color="text-amber-400"
            skills={["Git", "GitHub", "Vercel", "Netlify", "Postman", "VS Code", "Figma"]}
            delay={0.3}
        />
         <SkillCategory 
            title="Core Concepts" 
            color="text-cyan-400"
            skills={["Data Structures", "Algorithms", "System Design", "OOP", "Responsive Design"]}
            delay={0.4}
        />
      </div>
    </div>
  );
};

export default SkillsWindow;
