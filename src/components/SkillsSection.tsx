import React, { useState, useEffect } from 'react';
import { Container, Settings, GitBranch, Cloud, Server, Activity, ArrowRight } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Docker', level: 90, icon: Container, color: 'from-blue-500 to-blue-600' },
    { name: 'Kubernetes', level: 85, icon: Settings, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Jenkins', level: 88, icon: GitBranch, color: 'from-green-500 to-green-600' },
    { name: 'AWS', level: 82, icon: Server, color: 'from-orange-500 to-orange-600' },
    { name: 'Ansible', level: 80, icon: Server, color: 'from-red-500 to-red-600' },
    { name: 'ArgoCD', level: 75, icon: ArrowRight, color: 'from-purple-500 to-purple-600' },
    { name: 'Prometheus', level: 78, icon: Activity, color: 'from-yellow-500 to-yellow-600' }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 spark-click wave-motion-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ${
                      isVisible ? 'animate-progress' : 'w-0'
                    }`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;