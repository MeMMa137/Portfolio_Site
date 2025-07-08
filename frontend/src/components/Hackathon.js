import React, { useState } from 'react';
import { hackathonData } from '../data/mockData';
import { Trophy, Calendar, Code, Award, ExternalLink } from 'lucide-react';

const Hackathon = () => {
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const openModal = (hackathon) => {
    setSelectedHackathon(hackathon);
  };

  const closeModal = () => {
    setSelectedHackathon(null);
  };

  const getAwardColor = (award) => {
    if (award.includes('1st')) return 'text-yellow-400';
    if (award.includes('2nd')) return 'text-gray-400';
    if (award.includes('3rd')) return 'text-orange-400';
    return 'text-purple-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Journey</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Competing in hackathons to push boundaries and create innovative solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-gray-400">Hackathons</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <Code className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400">Technologies Used</div>
          </div>
        </div>

        {/* Hackathon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathonData.hackathons.map((hackathon, index) => (
            <div
              key={hackathon.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(hackathon)}
              onMouseEnter={() => setHoveredCard(hackathon.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Award Badge */}
              <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold ${getAwardColor(hackathon.award)} bg-gray-900 border border-current`}>
                {hackathon.award}
              </div>

              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">{hackathon.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-1 group-hover:text-blue-400 transition-colors duration-200">
                  {hackathon.event}
                </h3>
                <h4 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-200">
                  {hackathon.project}
                </h4>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {hackathon.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {hackathon.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                hoveredCard === hackathon.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                <ExternalLink className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-xl p-8 border border-purple-400/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-gray-300 mb-6">
              I'm always looking for exciting hackathons and innovative projects to work on.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Let's Build Something Amazing
            </button>
          </div>
        </div>
      </div>

      {/* Hackathon Modal */}
      {selectedHackathon && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    {selectedHackathon.project}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <span>{selectedHackathon.event}</span>
                    <span>•</span>
                    <span>{selectedHackathon.date}</span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getAwardColor(selectedHackathon.award)} bg-gray-900 border border-current mb-4`}>
                {selectedHackathon.award}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {selectedHackathon.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedHackathon.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 font-semibold">
                  View Project
                </button>
                <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hackathon;