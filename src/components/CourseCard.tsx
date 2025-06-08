import React from 'react';
import { Star, Clock, Users, Award, Play } from 'lucide-react';
import { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="card overflow-hidden group">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="h-6 w-6 text-blue-600" fill="currentColor" />
          </button>
        </div>
        {course.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Category & Level */}
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
            {course.category}
          </span>
          <span className="text-xs text-gray-500 font-medium">{course.level}</span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center mb-4">
          <img 
            src={course.instructorAvatar} 
            alt={course.instructor}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-sm text-gray-700 font-medium">{course.instructor}</span>
        </div>

        {/* Course Stats */}
        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{course.studentsCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-1" />
            <span>{course.projects} Projects</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-900">{course.rating}</span>
          <span className="text-sm text-gray-500 ml-1">({course.studentsCount.toLocaleString()})</span>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {course.skills.slice(0, 3).map((skill) => (
              <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
            {course.skills.length > 3 && (
              <span className="text-xs text-gray-500">+{course.skills.length - 3} more</span>
            )}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">${course.price}</span>
            {course.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
            )}
          </div>
          <button className="btn-primary text-sm px-4 py-2">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;