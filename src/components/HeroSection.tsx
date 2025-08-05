import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, X, Send, CheckCircle } from 'lucide-react';
import AbhijeetPhoto from "../assests/Abhijeet-photo.jpeg";

interface HeroSectionProps {
  onResumeClick: () => void;
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onResumeClick, onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHireForm, setShowHireForm] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [blinkingElement, setBlinkingElement] = useState<string | null>(null);

  const titles = [
    'CI/CD Specialist',
    'Docker Expert',
    'Automation & Scripting Specialist',
    'Kubernetes Orchestrator'
  ];

  const subtitles = [
    'DevOps Engineer',
    'Cloud Architect',
    'Automation Expert'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    
    const subtitleInterval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 2500);
    
    return () => clearInterval(titleInterval);
    return () => clearInterval(subtitleInterval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission and email sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', contact: '', message: '' });
      setIsSubmitted(false);
      setShowHireForm(false);
    }, 2000);
  };

  const openHireForm = () => {
    setShowHireForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeHireForm = () => {
    setShowHireForm(false);
    setFormData({ name: '', email: '', contact: '', message: '' });
    setIsSubmitted(false);
    document.body.style.overflow = 'unset';
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (type: 'email' | 'phone') => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Set URL hash to trigger blinking in ContactSection
      window.location.hash = type;
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/abhijeet-kamthe', label: 'LinkedIn', action: () => window.open('https://linkedin.com/in/abhijeet-kamthe', '_blank') },
    { icon: Github, href: 'https://github.com/abhijeet147', label: 'GitHub', action: () => window.open('https://github.com/abhijeet147', '_blank') },
    { icon: Mail, href: '#', label: 'Email', action: () => scrollToContact('email') },
    { icon: Phone, href: '#', label: 'Phone', action: () => scrollToContact('phone') }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Mobile Layout - Image First */}
        <div className="block md:hidden">
          <div className="flex justify-center mb-8">
                            <div className="glass-card p-6 rounded-xl border border-white/20 backdrop-blur-sm profile-card-glow w-80">
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <div className="w-40 h-40 rounded-full flex items-center justify-center ak-image-continuous">
                    <img src={AbhijeetPhoto} alt="Abhijeet Kamthe" className="w-40 h-40 rounded-full object-cover border-2 border-white" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 animate-pulse-ring"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">DevOps Engineer</h3>
                <div className="h-6 mb-4">
                  <p className="text-blue-400 animated-title text-sm">
                    {titles[currentTitle]}
                  </p>
                </div>
                
                <button
                  onClick={openHireForm}
                  className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 spark-click text-sm"
                >
                  Ready to Get Hired
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="flex items-center justify-between">
          {/* Left side - Main content */}
          <div className={`flex-1 hero-content-left ${isVisible ? 'animate' : ''}`}>
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                <span className="animated-gradient-name">
                  Abhijeet Uttam Kamthe
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 hero-subtitle-container">
                <span className="animated-subtitle">
                  {subtitles[currentSubtitle]}
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-xl typing-animation font-semibold">
                Automating Infrastructure | Scaling Delivery | Bridging Dev & Ops
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 z-10 relative">
              <button
                onClick={onResumeClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 spark-click continuous-glow-button"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 spark-click"
              >
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 z-10 relative">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={social.action}
                  className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 spark-click"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Profile card positioned in middle right */}
          <div className={`hero-content-right ${isVisible ? 'animate' : ''} hidden md:block`}>
            <div className="glass-card p-8 rounded-xl border border-white/20 backdrop-blur-sm profile-card-glow w-96">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="w-48 h-48 rounded-full flex items-center justify-center ak-image-continuous">
                    <img src={AbhijeetPhoto} alt="Abhijeet Kamthe" className="w-48 h-48 rounded-full object-cover border-2 border-white" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 animate-pulse-ring"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">DevOps Engineer</h3>
                <div className="h-6 mb-6">
                  <p className="text-blue-400 animated-title">
                    {titles[currentTitle]}
                  </p>
                </div>
                
                <button
                  onClick={openHireForm}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 spark-click"
                >
                  Ready to Get Hired
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1000`}>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Hire Me Form Modal */}
      {showHireForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Ready to Get Hired</h3>
                <button
                  onClick={closeHireForm}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors spark-click"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="hire-name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="hire-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="hire-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="hire-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="hire-contact" className="block text-sm font-medium text-gray-300 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="hire-contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="+91 8928268763"
                  />
                </div>

                <div>
                  <label htmlFor="hire-message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="hire-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Send your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed spark-click"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;