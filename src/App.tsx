import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedCourses from './components/FeaturedCourses';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import { courses, categories } from './data/courses';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Header onSearch={handleSearch} />
        <Hero />
        <Categories />
        <FeaturedCourses searchQuery={searchQuery} />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
        <ChatBot courses={courses} categories={categories} />
      </div>
    </AuthProvider>
  );
}

export default App;