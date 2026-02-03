import React from 'react';

export const IconThisPC = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="36" height="24" rx="2" fill="#2d2d2d" stroke="#505050" strokeWidth="2"/>
    <rect x="8" y="10" width="32" height="20" fill="#1a1a1a"/>
    <path d="M12 28H14" stroke="lime" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 32V38H28V32" stroke="#505050" strokeWidth="3"/>
    <rect x="16" y="38" width="16" height="2" fill="#505050"/>
    <rect x="16" y="39" width="16" height="1" fill="#3D3D3D"/>
    {/* Screen Glint */}
    <path d="M8 10L20 28H8V10Z" fill="white" fillOpacity="0.05"/>
  </svg>
);

export const IconFolder = ({ color = "#FCD34D" }) => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
     <g filter="url(#filter0_d)">
        <path d="M4 10C4 7.79086 5.79086 6 8 6H18L22 10H40C42.2091 10 44 11.7909 44 14V38C44 40.2091 42.2091 42 40 42H8C5.79086 42 4 40.2091 4 38V10Z" fill={color}/>
        <path d="M4 14C4 11.7909 5.79086 10 8 10H40C42.2091 10 44 11.7909 44 14V38C44 40.2091 42.2091 42 40 42H8C5.79086 42 4 40.2091 4 38V14Z" fill="url(#paint0_linear)"/>
     </g>
     <path d="M8 12H38" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round"/>
     <defs>
        <linearGradient id="paint0_linear" x1="24" y1="10" x2="24" y2="42" gradientUnits="userSpaceOnUse">
           <stop stopColor="white" stopOpacity="0.2"/>
           <stop offset="1" stopColor="black" stopOpacity="0.1"/>
        </linearGradient>
        <filter id="filter0_d" x="0" y="4" width="48" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
           <feFlood floodOpacity="0" result="BackgroundImageFix"/>
           <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
           <feOffset dy="2"/>
           <feGaussianBlur stdDeviation="2"/>
           <feComposite in2="hardAlpha" operator="out"/>
           <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
           <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
           <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
     </defs>
  </svg>
);

export const IconSettings = () => (
  <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" fill="#525252"/>
    <circle cx="24" cy="24" r="14" fill="#6B7280"/>
    <circle cx="24" cy="24" r="6" fill="#1F2937"/>
    <path d="M24 6V12M24 36V42M6 24H12M36 24H42M11.2721 11.2721L15.5147 15.5147M32.4853 32.4853L36.7279 36.7279M11.2721 36.7279L15.5147 32.4853M32.4853 15.5147L36.7279 11.2721" stroke="#374151" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="18" stroke="#4B5563" strokeWidth="1"/>
  </svg>
);

export const IconChrome = () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="white"/> 
        <path d="M24 24L42 24C42 14.0589 33.9411 6 24 6C19.7825 6 15.8951 7.44781 12.75 9.90192L19.875 22.2452L24 24Z" fill="#EA4335"/>
        <path d="M24 24L12.75 9.90192C8.58327 13.0655 6 18.232 6 24C6 26.5458 6.52909 28.969 7.5 31.1769L24 24Z" fill="#FBBC04"/>
        <path d="M24 24L7.5 31.1769C10.7224 38.5039 18.0699 43.5 26.5 41.5L34.5 27.5L24 24Z" fill="#34A853"/>
        <path d="M42 24C42 25.5 41.5 26.5 41.5 26.5L32.25 40.5288C38.0706 37.1678 42 30.9823 42 24Z" fill="#1E8E3E"/>
        <circle cx="24" cy="24" r="7" fill="white"/>
        <circle cx="24" cy="24" r="5" fill="#4285F4"/>
    </svg>
)

export const IconSkills = () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="36" height="36" rx="4" fill="#7C3AED"/>
        <path d="M14 18L24 12L34 18M14 30L24 36L34 30M14 24L24 30L34 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export const IconProjects = () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="32" height="24" rx="2" fill="#F59E0B"/>
        <path d="M16 12V8C16 6.89543 16.8954 6 18 6H30C31.1046 6 32 6.89543 32 8V12" stroke="#B45309" strokeWidth="3"/>
        <path d="M8 18H40" stroke="#B45309" strokeWidth="2"/>
        <rect x="20" y="24" width="8" height="4" rx="1" fill="#78350F"/>
    </svg>
)

export const IconLearning = () => (
     <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="8" width="28" height="32" rx="2" fill="#EC4899"/>
        <path d="M16 8V40" stroke="#BE185D" strokeWidth="2"/>
        <path d="M22 16H32M22 22H32M22 28H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
     </svg>
)

export const IconExperience = () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect x="8" y="6" width="32" height="36" rx="2" fill="#84CC16"/>
         <rect x="12" y="10" width="24" height="12" rx="1" fill="white" fillOpacity="0.5"/>
         <rect x="12" y="26" width="8" height="8" rx="1" fill="white" fillOpacity="0.5"/>
         <rect x="24" y="26" width="8" height="8" rx="1" fill="white" fillOpacity="0.5"/>
         <rect x="12" y="36" width="8" height="2" rx="1" fill="white" fillOpacity="0.5"/>
         <rect x="24" y="36" width="8" height="2" rx="1" fill="white" fillOpacity="0.5"/>
    </svg>
)

export const IconConnect = () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#2563EB"/>
        <path d="M12 24C12 17.3726 17.3726 12 24 12M36 24C36 30.6274 30.6274 36 24 36M24 12C28 16 30 20 30 24C30 28 28 32 24 36M24 12C20 16 18 20 18 24C18 28 20 32 24 36M12 24H36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
)

export const IconResume = () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6H26L36 16V40C36 41.1046 35.1046 42 34 42H14C12.8954 42 12 41.1046 12 40V8C12 6.89543 12.8954 6 14 6Z" fill="#3B82F6"/>
        <path d="M26 6V16H36" fill="#1E40AF"/>
        <path d="M18 22H30M18 28H30M18 34H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
)

export const IconTerminal = () => (
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="32" rx="2" fill="#1e1e1e"/>
        <path d="M12 12H18M12 12V36M12 12H36" stroke="#333" strokeWidth="1"/>
        <path d="M14 20L20 26L14 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 32H32" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
)
