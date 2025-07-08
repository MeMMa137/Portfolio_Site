import React, { useState } from 'react';
import { youtubeData } from '../data/mockData';
import { Play, Eye, Clock, X } from 'lucide-react';

const YouTube = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            YouTube <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Channel</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge through tutorials, project walkthroughs, and tech insights
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {youtubeData.videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(video)}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 ${
                  hoveredVideo === video.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="bg-purple-500 rounded-full p-4 transform transition-all duration-300 hover:scale-110">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors duration-200">
                  {video.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {video.description}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{video.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{video.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Stats */}
        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Channel Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">50K+</div>
              <div className="text-gray-400">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-gray-400">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">150+</div>
              <div className="text-gray-400">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">95%</div>
              <div className="text-gray-400">Like Ratio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-white pr-8">
                  {selectedVideo.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="flex items-center space-x-4 mb-4 text-gray-400">
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{selectedVideo.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedVideo.duration}</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {selectedVideo.description}
              </p>
              
              <div className="mt-6 flex space-x-4">
                <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200">
                  Watch on YouTube
                </button>
                <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTube;