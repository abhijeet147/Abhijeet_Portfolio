import React from 'react';
import { Award, GitBranch } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'GIT & GITHUB',
      issuer: 'Professional Certification',
      date: '2024',
      icon: GitBranch,
      color: 'from-purple-500 to-pink-500',
      description: 'Advanced version control and collaboration workflows'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 spark-click"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} mr-4`}>
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{cert.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{cert.date}</span>
                <div className="flex items-center text-purple-400">
                  <Award className="w-4 h-4 mr-1" />
                  <span className="text-sm">Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;