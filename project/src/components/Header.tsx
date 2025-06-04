import React, { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-blue-900/80 backdrop-blur-md py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-blue-200" />
          <span className="text-xl font-semibold text-blue-100">Taisei Utsubo</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="text-blue-200 hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#biography"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Biography
              </a>
            </li>
            <li>
              <a
                href="#hobbies"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Hobbies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;