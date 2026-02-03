import React from 'react';

const DesktopIcon = ({ label, icon: IconComponent, onClick }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center w-[100px] h-[100px] hover:bg-white/5 rounded-[4px] cursor-default transition-colors duration-100 group border border-transparent hover:border-white/10"
      onClick={onClick}
      onDoubleClick={onClick}
    >
      <div className="w-12 h-12 mb-1 transition-transform duration-200 group-active:scale-95 drop-shadow-md">
        {React.isValidElement(IconComponent) ? IconComponent : <IconComponent />}
      </div>
      <span className="text-white text-[12px] text-center px-1 rounded-sm line-clamp-2 drop-shadow-md">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
