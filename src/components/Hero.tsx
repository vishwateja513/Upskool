import React from 'react';
import { Play, Star, Users, BookOpen, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Master Tech Skills
            <br />
            <span className="text-yellow-300">Transform Your Career</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Learn cutting-edge technologies from industry experts. MERN Stack, Data Analytics, 
            Machine Learning, and more. Built for students and working professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary bg-white text-blue-600 hover:bg-gray-50 flex items-center justify-center space-x-2 text-lg px-8 py-4">
              <BookOpen className="h-5 w-5" />
              <span>Explore Courses</span>
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 flex items-center justify-center space-x-2 text-lg px-8 py-4">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-3xl font-bold">50K+</span>
              </div>
              <p className="text-blue-200">Active Students</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-3xl font-bold">100+</span>
              </div>
              <p className="text-blue-200">Expert Courses</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-3xl font-bold">4.8</span>
              </div>
              <p className="text-blue-200">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-3xl font-bold">95%</span>
              </div>
              <p className="text-blue-200">Job Placement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;