import React from 'react';
import { Download, Plus, Minus } from 'lucide-react';

const ResumeWindow = () => {
  const [scale, setScale] = React.useState(1);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.1, 1.5));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));

  return (
    <div className="w-full h-full flex flex-col bg-[#525659]">
      {/* Toolbar */}
      <div className="h-12 bg-[#323639] flex items-center justify-between px-4 shadow-md z-10 select-none">
          <span className="text-gray-200 text-sm font-medium">Resume.pdf</span>
          <div className="flex items-center space-x-2">
              <button onClick={zoomOut} className="p-1.5 hover:bg-white/10 rounded-full text-white transition-colors" title="Zoom Out">
                  <Minus size={16} />
              </button>
              <span className="text-gray-300 text-xs w-8 text-center">{Math.round(scale * 100)}%</span>
              <button onClick={zoomIn} className="p-1.5 hover:bg-white/10 rounded-full text-white transition-colors" title="Zoom In">
                  <Plus size={16} />
              </button>
              <div className="w-[1px] h-4 bg-gray-600 mx-2"></div>
              <a href="/assets/resume.pdf" download className="p-1.5 hover:bg-white/10 rounded-full text-white transition-colors" title="Download">
                  <Download size={16} />
              </a>
          </div>
      </div>

      {/* Viewer Container */}
      <div className="flex-1 w-full bg-[#525659] overflow-auto relative flex flex-col items-center justify-start p-4 scrollbar-hide">
          <div 
            className="bg-white shadow-2xl rounded-sm overflow-hidden transition-transform duration-200 origin-top"
            style={{ 
                width: '800px', 
                height: '1100px', // Approximately A4 ratio
                transform: `scale(${scale})`,
                marginBottom: `${(scale - 1) * 500}px` // Add margin when scaled up
            }}
          >
             <iframe 
                src="/assets/resume.pdf" 
                title="Resume"
                className="w-full h-full border-none"
              >
                 <div className="flex flex-col items-center justify-center h-full text-gray-800 p-8 text-center bg-gray-100">
                     <p className="mb-4 text-lg">PDF Preview not supported in this view.</p>
                     <a href="/assets/resume.pdf" download className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Download PDF
                     </a>
                 </div>
              </iframe>
          </div>
      </div>
    </div>
  );
};

export default ResumeWindow;
