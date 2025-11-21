import React from 'react';
import waterImage from '../assets/water.png';
import glassImage from '../assets/glass.png';



 
export default function About() {
  return (
    <div
      id="about" // ID for navbar scrolling
      className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden"
      style={{ backgroundColor: '#4E75D9' }} // Set the solid blue background color
    >
      {/* Background Image: water.png */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${waterImage})` }}
      ></div>

      {/* Overlay Image: glass.png */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${glassImage})` }}
      ></div>

      {/* Central Content Box with updated styling */}
      <div 
        className="relative z-10 bg-white/90 backdrop-blur-sm text-gray-800 p-8 md:p-12 rounded-lg max-w-3xl text-center
                   border-2 border-black
                   shadow-inner shadow-blue-400/50
                   hover:shadow-blue-600/75 hover:shadow-xl
                   transition-all duration-300"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          About Me:
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
        I’m Annisa, a UX Engineer who loves building clean interfaces and solving real user problems. I work across design and front end development using React, Next.js, Tailwind, and modern JavaScript. My background in customer support and conversational design helps me create products that feel intuitive, thoughtful, and easy to use.
        Right now I’m focused on leveling up my skills and creating projects that show the full range of my design thinking and engineering abilities.
       
        </p>
        <a np
    
    href="/AnnisaCResumeUXEngineer.pdf" 
    
   
    download="Annisa_C_Resume_UX_Engineer.pdf" 
    
    
    className="glass-hover 
               px-6 
               py-2 
               bg-white 
               text-blue-800 
               font-semibold 
               rounded-full
               border-2 
               border-black
               shadow-inner
               shadow-blue-400/50
               hover:bg-blue-50 
               hover:text-blue-900
               hover:shadow-blue-600/75 
               hover:shadow-xl
               transition-all 
               duration-300 
               ease-in-out
               focus:outline-none 
               focus:ring-2 
               focus:ring-blue-500 
               focus:ring-opacity-75
               w-full 
               md:w-auto 
               text-lg 
               text-center 
               inline-block"
>
     My Resume
</a>
      </div>
    </div>
  );
}