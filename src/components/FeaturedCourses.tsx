import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import { courses } from '../data/courses';

interface FeaturedCoursesProps {
  searchQuery?: string;
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ searchQuery = '' }) => {
  const [filter, setFilter] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  const filters = ['All', 'MERN Stack', 'Data Analytics', 'Machine Learning', 'DevOps'];

  useEffect(() => {
    let result = courses;

    // Apply category filter
    if (filter !== 'All') {
      result = result.filter(course => course.category === filter);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query) ||
        course.skills.some(skill => skill.toLowerCase().includes(query)) ||
        course.level.toLowerCase().includes(query)
      );
    }

    setFilteredCourses(result);
  }, [filter, searchQuery]);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Courses'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {searchQuery 
              ? `Found ${filteredCourses.length} course${filteredCourses.length !== 1 ? 's' : ''} matching your search`
              : 'Handpicked courses from industry experts to accelerate your career growth'
            }
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === filterOption
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
        </div>
        
        {filteredCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="btn-primary text-lg px-8 py-4">
                View All Courses
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No courses found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any courses matching "{searchQuery}". Try searching for different keywords or browse our categories.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Browse All Courses
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCourses;