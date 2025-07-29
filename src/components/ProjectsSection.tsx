import React, { useState } from 'react';
import { ExternalLink, Github, X, Code, Cloud, TestTube } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'CI-CD Pipeline using Docker, K8S, Jenkins, Git, Python',
      description: 'A robust CI/CD pipeline integrating Docker, Kubernetes, Jenkins, Git, and Python for automated build, test, and deployment.',
      longDescription: `This project demonstrates a complete CI/CD pipeline setup using Docker for containerization, Kubernetes for orchestration, Jenkins for automation, Git for version control, and Python for application logic.

      Highlights:
      1. Automated build and deployment pipeline using Jenkins
      2. Containerized application with Docker
      3. Orchestrated deployment on Kubernetes (K8S)
      4. Integrated Git for source code management and triggers
      5. End-to-end automation from code commit to production deployment
      6. Python-based application as the deployment target`,
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Python', 'CI/CD'],
      icon: TestTube,
      color: 'from-blue-500 to-cyan-500',
      githubUrl: 'https://github.com/abhijeet147/jenkins_automate_project.git'
    },
    {
      id: 2,
      title: 'Weather Forecast Web Application',
      description: 'Full-stack weather application with cloud deployment and DevOps practices.',
      longDescription: `A modern weather forecasting application showcasing end-to-end cloud deployment and DevOps best practices.

      Key Features:
      • Built with Node.js and OpenWeatherMap API integration
      • Hosted on AWS EC2 with secure setup using SSH and SCP
      • Clean, responsive UI for real-time weather updates
      • Demonstrated end-to-end cloud deployment practices
      • Automated deployment scripts for consistent environments
      • SSL certificate configuration for secure connections
      • Load balancing and auto-scaling configuration
      • Monitoring and alerting setup with CloudWatch`,
      technologies: ['Node.js', 'AWS EC2', 'API Integration', 'SSH', 'Cloud Deployment'],
      icon: Cloud,
      color: 'from-green-500 to-blue-500',
      githubUrl: '#'
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-400">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card p-6 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer spark-click continuous-glow-card wave-motion-card"
              style={{ animationDelay: `${project.id * 0.3}s` }}
              onClick={() => openModal(project.id)}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-blue-400 hover:text-cyan-400 transition-colors">
                <span className="mr-2">View Details</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors spark-click"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="whitespace-pre-line text-gray-300">
                    {projects.find(p => p.id === selectedProject)?.longDescription}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {projects.find(p => p.id === selectedProject)?.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href={projects.find(p => p.id === selectedProject)?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors spark-click"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;