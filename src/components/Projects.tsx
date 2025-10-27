import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  status: string;
  category: string;
}

type TabType = 'all' | 'frontend' | 'fullstack' | 'clone';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const projectsData: Record<TabType, Project[]> = {
    all: [
      {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
        technologies: ["React", "Tailwind CSS", "Andd",],
        image: "🛒",
        liveLink: "https://grabitecommerce.netlify.app/",
        githubLink: "https://github.com/Yasvant12/Multivendor_React_FrontEnd/tree/master",
        status: "Live",
        category: "Frontend"
      },
      // {
      //   title: "Task Management App",
      //   description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      //   technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      //   image: "📋",
      //   liveLink: "#",
      //   githubLink: "#",
      //   status: "Live",
      //   category: "fullstack"
      // },
      {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and interactive elements.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "🎨",
        liveLink: "#",
        githubLink: "#",
        status: "Live",
        category: "frontend"
      },
      // {
      //   title: "Weather Dashboard",
      //   description: "A beautiful weather application with real-time data, interactive maps, and detailed forecasts for multiple locations.",
      //   technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      //   image: "🌤️",
      //   liveLink: "#",
      //   githubLink: "#",
      //   status: "Live",
      //   category: "frontend"
      // },
      // {
      //   title: "Netflix Clone",
      //   description: "A Netflix-inspired streaming platform clone with movie browsing, search functionality, and responsive design.",
      //   technologies: ["React", "TMDB API", "Firebase", "Tailwind CSS"],
      //   image: "🎬",
      //   liveLink: "#",
      //   githubLink: "#",
      //   status: "Live",
      //   category: "clone"
      // },
      // {
      //   title: "Spotify Clone",
      //   description: "A music streaming application clone with playlist management, audio controls, and user authentication.",
      //   technologies: ["React", "Spotify API", "Node.js", "MongoDB"],
      //   image: "🎵",
      //   liveLink: "#",
      //   githubLink: "#",
      //   status: "Live",
      //   category: "clone"
      // }
    ],
    frontend: [
      {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and interactive elements.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "🎨",
        liveLink: "#",
        githubLink: "#",
        status: "Live",
        category: "frontend"
      },
      {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
        technologies: ["React", "Tailwind CSS", "Andd",],
        image: "🛒",
        liveLink: "https://grabitecommerce.netlify.app/",
        githubLink: "https://github.com/Yasvant12/Multivendor_React_FrontEnd/tree/master",
        status: "Live",
        category: "Frontend"
      },
      // {
      //   title: "Weather Dashboard",
      //   description: "A beautiful weather application with real-time data, interactive maps, and detailed forecasts for multiple locations.",
      //   technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      //   image: "🌤️",
      //   liveLink: "#",
      //   githubLink: "#",
      //   status: "Live",
      //   category: "frontend"
      // }
    ],
    fullstack: [
      // {
      //   title: "E-Commerce Platform",
      //   description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      //   technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      //   image: "🛒",
      //   liveLink: "#",
      //   githubLink: "#",
      //   status: "Live",
      //   category: "fullstack"
      // },
      // {
      //   title: "Task Management App",
      //   description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      //   technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      //   image: "📋",
      //   liveLink: "#",
      //   githubLink: "#",
      //   status: "Live",
      //   category: "fullstack"
      // }
    ],
    clone: [
      // {
      //   title: "Netflix Clone",
      //   description: "A Netflix-inspired streaming platform clone with movie browsing, search functionality, and responsive design.",
      //   technologies: ["React", "TMDB API", "Firebase", "Tailwind CSS"],
      //   image: "🎬",
      //   liveLink: "#",
      //   githubLink: "#",
      //   status: "Live",
      //   category: "clone"
      // },
      // {
      //   title: "Spotify Clone",
      //   description: "A music streaming application clone with playlist management, audio controls, and user authentication.",
      //   technologies: ["React", "Spotify API", "Node.js", "MongoDB"],
      //   image: "🎵",
      //   liveLink: "#",
      //   githubLink: "#",
      //   status: "Live",
      //   category: "clone"
      // }
    ]
  };

  return (
    <section id="projects" className="py-25 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <h2 className="text-5xl font-bold text-center mb-15 text-gradient animate-fadeInUp">Projects</h2>
      
      {/* Tab Navigation */}
     <div className="flex justify-center mb-12">
  <div className="bg-glass rounded-2xl p-2 border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] w-full sm:w-auto">
    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
      {[
        { id: 'all', label: 'All Projects', icon: '🚀', count: projectsData.all.length },
        { id: 'frontend', label: 'Frontend', icon: '🎨', count: projectsData.frontend.length },
        { id: 'fullstack', label: 'Full Stack', icon: '⚙️', count: projectsData.fullstack.length },
        { id: 'clone', label: 'Clones', icon: '🎯', count: projectsData.clone.length }
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as TabType)}
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
            activeTab === tab.id
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-[0_8px_32px_rgba(139,92,246,0.3)]'
              : 'text-gray-300 hover:text-white hover:bg-[rgba(139,92,246,0.1)]'
          }`}
        >
          <span className="text-lg">{tab.icon}</span>
          <span>{tab.label}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            activeTab === tab.id ? 'bg-white/20' : 'bg-[rgba(139,92,246,0.2)]'
          }`}>
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  </div>
</div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData[activeTab].map((project, index) => (
          <div 
            key={index}
            className="bg-glass rounded-2xl overflow-hidden border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] transition-all duration-500 hover:-translate-y-5 hover:rotate-x-0 hover:scale-105 hover:bg-glass-hover hover:shadow-[0_30px_60px_rgba(139,92,246,0.2)] shadow-[0_10px_30px_rgba(139,92,246,0.1)] animate-scaleIn group relative"
            style={{ animationDelay: `${(index + 1) * 0.2}s` }}
          >
            {/* Project Image */}
            <div className="h-50 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-5xl transition-all duration-300 group-hover:scale-110 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
              <div className="relative z-10 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                {project.image}
              </div>
              
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-yellow-500/20 text-yellow-300'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="tech-tag text-white px-3 py-1 rounded-xl text-xs animate-scaleIn"
                    style={{ animationDelay: `${techIndex * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Links */}
              <div className="flex gap-4">
                <a 
                  href={project.liveLink} 
                  className="text-purple-400 hover:text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span>🌐</span>
                  Live Demo
                </a>
                <a 
                  href={project.githubLink} 
                  className="text-purple-400 hover:text-white font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span>📁</span>
                  GitHub
                </a>
              </div>
            </div>
            
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
          </div>
        ))}
      </div>
      
      {/* Projects summary */}
      <div className="mt-16 bg-glass rounded-2xl p-8 border border-[rgba(139,92,246,0.2)] backdrop-blur-[20px] animate-fadeInUp" style={{ animationDelay: '1s' }}>
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Project Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2 animate-float">5+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2 animate-float" style={{ animationDelay: '0.2s' }}>15+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2 animate-float" style={{ animationDelay: '0.4s' }}>95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          {/* <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2 animate-float" style={{ animationDelay: '0.6s' }}>24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects; 