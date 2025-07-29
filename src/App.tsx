import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import AnimatedBackground from './components/AnimatedBackground';
import CursorTrail from './components/CursorTrail';
import Toast from './components/Toast';
import './styles/animations.css';

function App() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleResumeDownload = () => {
    // Create and download resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your actual resume file to the public folder
    link.download = 'Abhijeet_Kamthe_Resume.pdf';
    link.target = '_blank';
    link.click();
    
    setToastMessage('Resume downloaded successfully');
    setShowToast(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 z-50 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 font-semibold transition bg-transparent border-none cursor-pointer">Home</button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-blue-400 font-semibold transition bg-transparent border-none cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection('resume')} className="text-white hover:text-blue-400 font-semibold transition bg-transparent border-none cursor-pointer">Resume</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 font-semibold transition bg-transparent border-none cursor-pointer">About Me</button>
          </div>
        </nav>
      </header>
      <main className="pt-20">
        <AnimatedBackground />
        <CursorTrail />
        
        <div className="relative z-10">
          <section id="home">
            <HeroSection 
              onResumeClick={() => scrollToSection('resume')}
              onContactClick={() => scrollToSection('contact')}
            />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <SkillsSection />
          <section id="projects">
            <ProjectsSection />
          </section>
          <CertificationsSection />
          <div id="resume" className="py-20 text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Resume
              </h2>
              <button
                onClick={handleResumeDownload}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 spark-click"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
          <ContactSection />
        </div>

        <Toast 
          show={showToast} 
          message={toastMessage} 
          onClose={() => setShowToast(false)} 
        />
      </main>
    </>
  );
}

export default App;