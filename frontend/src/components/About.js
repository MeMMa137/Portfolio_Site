import React, { useState, useEffect } from 'react';
import { aboutData } from '../data/mockData';
import { User, Code, Award, Calendar } from 'lucide-react';

const About = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(aboutData.skills);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', ...new Set(aboutData.skills.map(skill => skill.category))];
  const filteredSkills = selectedCategory === 'All' 
    ? aboutData.skills 
    : aboutData.skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about the intersection of technology, biology, and human potential
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={aboutData.image}
                  alt="Alex Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold text-white">My Story</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {aboutData.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <h3 className="text-purple-400 font-semibold mb-2">Focus Areas</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• AI & Machine Learning</li>
                  <li>• Biohacking & Health Tech</li>
                  <li>• IoT & Hardware</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <h3 className="text-purple-400 font-semibold mb-2">Passions</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Robotics</li>
                  <li>• Bioinformatics</li>
                  <li>• Open Source</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Code className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl font-semibold text-white">Skills & Expertise</h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-purple-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: visibleSkills.includes(skill) ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
                <p className="text-gray-400 text-sm mt-2">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Calendar className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl font-semibold text-white">Journey</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {aboutData.timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center space-x-3 mb-3">
                        <Award className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-400 font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-purple-400 mb-3">{item.company}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;