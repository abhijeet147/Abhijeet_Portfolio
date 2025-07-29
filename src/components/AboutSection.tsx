import React from 'react';
import { User, GraduationCap, Code } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded"></div>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-6">
              <User className="w-8 h-8 text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Personal Journey</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Abhijeet Uttam Kamthe, a dedicated and growth-oriented DevOps Engineer with a Bachelor's degree in Information Technology from Fr. Conceicao Rodrigues Institute of Technology (FCRIT), Vashi, graduating with a CGPA of 7.5.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Education & Foundation</h3>
              </div>
              <p className="text-gray-300">
                My academic journey at FCRIT provided me with a strong foundation in Information Technology, where I developed a deep understanding of software development principles and system architecture.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Professional Passion</h3>
              </div>
              <p className="text-gray-300">
                My passion lies in automating, scaling, and securing modern infrastructure. I specialize in leveraging powerful DevOps tools and practices to bridge the gap between development and operations, ensuring smooth, reliable, and rapid software delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;