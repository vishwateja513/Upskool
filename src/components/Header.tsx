import React, { useState } from 'react';
import { Search, Menu, X, ShoppingCart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './auth/LoginModal';
import UserMenu from './auth/UserMenu';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const { isAuthenticated, loading } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
      // Scroll to courses section after search
      scrollToSection('courses');
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Real-time search as user types
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://www.cognitbotz.com/wp-content/uploads/2023/02/Logo-768x182.png" 
                alt="CognitBotz" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('categories')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Categories
              </button>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInput}
                  placeholder="Search courses, technologies, instructors..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      if (onSearch) onSearch('');
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </form>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <button className="hidden md:flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                </button>
              )}
              
              {!loading && (
                <>
                  {isAuthenticated ? (
                    <UserMenu />
                  ) : (
                    <>
                      <button 
                        onClick={() => setIsLoginModalOpen(true)}
                        className="btn-secondary hidden md:block"
                      >
                        Sign In
                      </button>
                      <button 
                        onClick={() => setIsLoginModalOpen(true)}
                        className="btn-primary hidden md:block"
                      >
                        Login
                      </button>
                    </>
                  )}
                </>
              )}
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInput}
                    placeholder="Search courses, technologies, instructors..."
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        if (onSearch) onSearch('');
                      }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </form>
                <nav className="flex flex-col space-y-2">
                  <button 
                    onClick={() => scrollToSection('courses')}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left"
                  >
                    Courses
                  </button>
                  <button 
                    onClick={() => scrollToSection('categories')}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left"
                  >
                    Categories
                  </button>
                  <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">About</a>
                </nav>
                
                {!loading && !isAuthenticated && (
                  <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => {
                        setIsLoginModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="btn-secondary w-full"
                    >
                      Sign In
                    </button>
                    <button 
                      onClick={() => {
                        setIsLoginModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="btn-primary w-full"
                    >
                      Login
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;
