import React from 'react';
import { useWindow } from '../context/WindowContext';
import { motion } from 'framer-motion';

const SettingsWindow = () => {
  const { changeWallpaper, wallpaper } = useWindow();

  const wallpapers = [
    { id: 1, path: '/assets/wallpapers/bloom.svg', name: 'Windows Bloom' },
    { id: 2, path: '/assets/wallpapers/bloom-dark.svg', name: 'Bloom Dark' },
    { id: 3, path: '/assets/wallpapers/1.jpg', name: 'Abstract Blue' },
  ];

  return (
    <div className="p-6 h-full bg-gradient-to-br from-black/0 to-black/30">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Settings</h2>
      
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4 font-bold">Personalization</h3>
        <p className="text-gray-300 mb-4 text-sm">Choose your desktop wallpaper</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {wallpapers.map((wp) => (
            <motion.div 
              key={wp.id} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer rounded-xl overflow-hidden transition-all shadow-xl aspect-video relative group ${wallpaper === wp.path ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-[#1a1a1a]' : ''}`}
              onClick={() => changeWallpaper(wp.path)}
            >
              <div className="w-full h-full bg-gray-800">
                 <img src={wp.path} alt={wp.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" onError={(e) => e.target.style.display = 'none'} />
              </div>
              
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-3">
                 <span className="text-xs font-medium text-white">{wp.name}</span>
              </div>
              
              {wallpaper === wp.path && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xs shadow-lg">
                      ✓
                  </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsWindow;
