import React, { useState } from 'react';
import { projectsData } from '../data/mockData';
import { ExternalLink, Github, Filter, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projectsData.projects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData.projects 
    : projectsData.projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'text-cyan-400',
      'IoT': 'text-purple-400',
      'Security': 'text-green-400',
      'Research': 'text-red-400'
    };
    return colors[category] || 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of innovative projects spanning AI, IoT, security, and research
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-90' : 'opacity-60'
                }`} />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(project.category)} bg-gray-900/80 border border-current`}>
                  {project.category}
                </div>

                {/* Action Buttons */}
                <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-700 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-700 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-xl border-2 border-cyan-400/30 transition-all duration-300 ${
                hoveredProject === project.id ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-xl p-8 border border-cyan-400/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to Collaborate?
            </h2>
            <p className="text-gray-300 mb-6">
              I'm always interested in working on innovative projects and exploring new technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start a Project
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;