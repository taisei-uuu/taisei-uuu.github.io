import React from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-6 transition-all duration-1000 transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto bg-blue-900/20 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-glow">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Taisei Utsubo
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-teal-300 rounded-full mb-8"></div>
          <h2 className="text-xl md:text-2xl text-blue-200 mb-4 font-medium">
            Student at Keio University
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            Welcome to my portfolio. I'm currently studying at Keio University, 
            pursuing my passion for knowledge and preparing for a future where I can 
            make meaningful contributions to society and technology.
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce text-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;