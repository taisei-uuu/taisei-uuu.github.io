import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-blue-900/60 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} Taisei Utsubo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;