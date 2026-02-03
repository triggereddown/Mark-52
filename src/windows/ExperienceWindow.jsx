import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const ExperienceItem = ({ title, company, period, description, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="relative pl-8 pb-8 border-l border-white/10 last:pb-0"
    >
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.5)]"></div>
        <div className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-lime-500/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <div className="flex items-center gap-4 text-sm text-lime-300/80 mb-3">
                 <span className="flex items-center gap-1"><Building2 size={14} /> {company}</span>
                 <span className="flex items-center gap-1"><Calendar size={14} /> {period}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    </motion.div>
);

const ExperienceWindow = () => {
  return (
    <div className="p-2 md:p-8 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Career Timeline</h2>
      
      <div className="max-w-3xl mx-auto mt-4">
          <ExperienceItem 
             index={0}
             title="Full Stack Developer Intern"
             company="GamerThred"
             period="June 2025 - September 2025"
             description="Built responsive dashboards using React and Recharts. Integrated REST APIs for real-time data visualization. Optimized frontend performance by 30%."
          />
          <ExperienceItem 
             index={1}
             title="Freelance Web Developer"
             company="Self Employed"
             period="Jan 2024 - May 2025"
             description="Delivered 5+ client websites. Specialized in landing pages and small e-commerce stores using Shopify and modern JAMstack technologies."
          />
          {/* Add more as needed */}
      </div>

       <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-200 text-center">
            Currently open for internship opportunities in Full Stack Development.
       </div>
    </div>
  );
};

export default ExperienceWindow;
