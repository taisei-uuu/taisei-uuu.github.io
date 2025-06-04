import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Biography from './components/Biography';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background Elements */}
      <Particles />
      <div className="fixed inset-0 bg-gradient-radial from-transparent to-blue-950/50 pointer-events-none"></div>
      
      {/* Content */}
      <Header />
      <main>
        <About />
        <Biography />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;