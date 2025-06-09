# COGNITBOTZ Academy - Technical Component Documentation

## 📋 Complete Code Architecture & Component Usage

This document provides a detailed explanation of every component, service, and code structure in the COGNITBOTZ Academy platform.

## 🏗️ Project Architecture Overview

```
Frontend (React + TypeScript)
├── Components (UI Building Blocks)
├── Contexts (State Management)
├── Services (API Communication)
├── Types (TypeScript Definitions)
└── Data (Static Data)

Backend (Node.js + Express)
├── Routes (API Endpoints)
├── Middleware (Authentication)
├── Models (Data Models)
└── Server Configuration
```

## 🎯 Frontend Components Breakdown

### 1. **App.tsx** - Main Application Component
```typescript
// Purpose: Root component that orchestrates the entire application
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <AuthProvider>  // Wraps app with authentication context
      <Header onSearch={handleSearch} />  // Navigation and search
      <Hero />                           // Landing section
      <Categories />                     // Course categories
      <FeaturedCourses searchQuery={searchQuery} />  // Course listings
      <Stats />                          // Platform statistics
      <Testimonials />                   // User testimonials
      <CTA />                           // Call-to-action section
      <Footer />                        // Footer information
      <ChatBot />                       // AI-powered chatbot
    </AuthProvider>
  );
}
```

**Key Features:**
- **State Management**: Manages global search state
- **Component Composition**: Combines all major sections
- **Context Provider**: Wraps app with authentication context
- **Props Passing**: Passes search functionality to child components

### 2. **Header.tsx** - Navigation & Search Component
```typescript
// Purpose: Main navigation, search functionality, and user authentication
const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const { isAuthenticated, loading } = useAuth();
```

**Key Features:**
- **Responsive Navigation**: Mobile hamburger menu with desktop navigation
- **Real-time Search**: Live search as user types with debouncing
- **Authentication Integration**: Shows different UI based on auth state
- **Modal Management**: Controls login modal visibility
- **Smooth Scrolling**: Programmatic scrolling to page sections

**Code Highlights:**
```typescript
// Real-time search implementation
const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const query = e.target.value;
  setSearchQuery(query);
  if (onSearch) {
    onSearch(query);  // Immediate search as user types
  }
};

// Smooth scrolling to sections
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### 3. **Hero.tsx** - Landing Section Component
```typescript
// Purpose: Eye-catching landing section with platform statistics
const Hero: React.FC = () => {
  return (
    <section className="gradient-bg text-white py-20">
      {/* Main headline and description */}
      {/* Call-to-action buttons */}
      {/* Platform statistics grid */}
    </section>
  );
};
```

**Key Features:**
- **Gradient Background**: Custom CSS gradient for visual appeal
- **Statistics Display**: Platform metrics (students, courses, ratings)
- **Call-to-Action Buttons**: Primary and secondary action buttons
- **Responsive Grid**: Statistics displayed in responsive grid layout

### 4. **Categories.tsx** - Course Categories Section
```typescript
// Purpose: Displays available course categories
const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
```

**Key Features:**
- **Data Mapping**: Maps through categories array from data file
- **Responsive Grid**: Adapts from 1 to 3 columns based on screen size
- **Component Composition**: Uses CategoryCard for individual items

### 5. **CategoryCard.tsx** - Individual Category Display
```typescript
// Purpose: Displays individual category with icon, description, and course count
const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons];
  
  return (
    <div className="card p-6 text-center group cursor-pointer">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
        <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      {/* Category details */}
    </div>
  );
};
```

**Key Features:**
- **Dynamic Icons**: Dynamically loads icons from Lucide React
- **Hover Effects**: Smooth color transitions on hover
- **TypeScript Props**: Strongly typed component props
- **Responsive Design**: Adapts to different screen sizes

### 6. **FeaturedCourses.tsx** - Course Listing with Filters
```typescript
// Purpose: Main course display with filtering and search functionality
const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ searchQuery = '' }) => {
  const [filter, setFilter] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
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
        course.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }
    
    setFilteredCourses(result);
  }, [filter, searchQuery]);
```

**Key Features:**
- **Multi-field Search**: Searches across title, description, category, instructor, and skills
- **Category Filtering**: Filter courses by technology category
- **Real-time Updates**: Updates results as user types or changes filters
- **Empty State Handling**: Shows appropriate message when no courses found
- **Performance Optimization**: Uses useEffect for efficient filtering

### 7. **CourseCard.tsx** - Individual Course Display
```typescript
// Purpose: Detailed course card with all course information
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="card overflow-hidden group">
      {/* Course image with hover overlay */}
      <div className="relative overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="h-6 w-6 text-blue-600" fill="currentColor" />
          </button>
        </div>
      </div>
      
      {/* Course content */}
      <div className="p-6">
        {/* Category, level, title, description */}
        {/* Instructor information */}
        {/* Course statistics (duration, students, projects) */}
        {/* Rating display */}
        {/* Skills tags */}
        {/* Price and enrollment button */}
      </div>
    </div>
  );
};
```

**Key Features:**
- **Image Hover Effects**: Scale and overlay effects on hover
- **Comprehensive Information**: All course details in organized layout
- **Rating System**: Star rating display with actual ratings
- **Skills Display**: Shows first 3 skills with "more" indicator
- **Price Display**: Shows current and original price with discount calculation
- **Responsive Layout**: Adapts to different screen sizes

### 8. **ChatBot.tsx** - AI-Powered Assistant
```typescript
// Purpose: Interactive AI chatbot for course recommendations and support
const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const fetchBotResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    const prompt = `
You are a smart sales assistant for Cognitzbots Academy. Provide very crisp, punchy, and persuasive responses to users' questions.
Include:
- Course prerequisites (basics required)
- What they'll learn in the course
- Benefits & why they should enroll
Keep it short, no fluff.

User says: "${userMessage}"
`;
    
    try {
      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: "meta-llama/llama-4-scout-17b-16e-instruct",
          messages: [
            { role: "system", content: "You are a crisp, persuasive sales assistant." },
            { role: "user", content: prompt }
          ],
          max_tokens: 150,
          temperature: 0.65,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
      
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      return "Oops! Something went wrong. Try again shortly.";
    } finally {
      setIsTyping(false);
    }
  };
```

**Key Features:**
- **AI Integration**: Uses Groq API with Llama model for intelligent responses
- **Real-time Chat**: Instant messaging interface with typing indicators
- **Minimizable Interface**: Can be minimized while staying accessible
- **Context-Aware Responses**: Tailored prompts for educational context
- **Error Handling**: Graceful error handling with user-friendly messages
- **Accessibility**: ARIA labels and keyboard navigation support

**Chat Interface Features:**
```typescript
// Message display with timestamps
{messages.map((message) => (
  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-200'}`}>
        {message.sender === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-gray-600" />}
      </div>
      <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <p className="text-sm leading-relaxed">{message.text}</p>
        <p className="text-xs opacity-70 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  </div>
))}
```

### 9. **Authentication Components**

#### **LoginModal.tsx** - Authentication Modal
```typescript
// Purpose: Handles user login and registration
const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, register } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await register(formData.name, formData.email, formData.password);
      }
      onClose();
      setFormData({ name: '', email: '', password: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
```

**Key Features:**
- **Dual Mode**: Switches between login and registration
- **Form Validation**: Client-side validation with error handling
- **Password Visibility**: Toggle password visibility
- **Loading States**: Shows loading during authentication
- **Error Handling**: Displays authentication errors
- **Auto-close**: Closes modal on successful authentication

#### **UserMenu.tsx** - User Profile Dropdown
```typescript
// Purpose: User profile menu with navigation options
const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
```

**Key Features:**
- **Click Outside Detection**: Closes menu when clicking outside
- **User Information Display**: Shows user name and email
- **Navigation Links**: Links to user-specific pages
- **Logout Functionality**: Secure logout with context update
- **Responsive Design**: Adapts to different screen sizes

### 10. **Additional Components**

#### **Stats.tsx** - Platform Statistics
```typescript
// Purpose: Displays platform achievements and metrics
const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Active Students',
    description: 'Learning and growing with us'
  },
  // ... more stats
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
              <stat.icon className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-xl font-semibold mb-2">{stat.label}</div>
            <div className="text-blue-100 text-sm">{stat.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
```

#### **Testimonials.tsx** - User Reviews
```typescript
// Purpose: Displays user testimonials and success stories
const testimonials = [
  {
    id: 1,
    name: 'Jessica Wang',
    role: 'Software Engineer at Netflix',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    rating: 5,
    content: 'The MERN Stack course completely transformed my career...'
  },
  // ... more testimonials
];
```

#### **CTA.tsx** - Call-to-Action Section
```typescript
// Purpose: Encourages user engagement and enrollment
const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      {/* Compelling headline */}
      {/* Action buttons */}
      {/* Feature highlights */}
    </section>
  );
};
```

#### **Footer.tsx** - Site Footer
```typescript
// Purpose: Site footer with links, contact info, and social media
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company info */}
        {/* Quick links */}
        {/* Popular categories */}
        {/* Contact information */}
      </div>
    </footer>
  );
};
```

## 🔧 Context & State Management

### **AuthContext.tsx** - Authentication State Management
```typescript
// Purpose: Global authentication state management
interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check for existing token on app start
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      
      // Verify token is still valid
      authAPI.getCurrentUser()
        .then(response => setUser(response.user))
        .catch(() => {
          // Token is invalid, clear storage
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setToken(null);
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);
```

**Key Features:**
- **Persistent Authentication**: Maintains login state across browser sessions
- **Token Validation**: Verifies token validity on app start
- **Automatic Cleanup**: Clears invalid tokens automatically
- **Loading States**: Manages loading states during authentication
- **Error Handling**: Graceful handling of authentication errors

## 🌐 API Services

### **api.ts** - API Communication Layer
```typescript
// Purpose: Centralized API communication with authentication
const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

**Key Features:**
- **Automatic Token Injection**: Adds JWT token to all requests
- **Token Expiration Handling**: Automatically handles expired tokens
- **Centralized Configuration**: Single configuration for all API calls
- **Error Handling**: Global error handling for authentication issues
- **TypeScript Support**: Fully typed API responses

### **API Endpoints:**
```typescript
// Authentication endpoints
export const authAPI = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },
  
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
  
  getCurrentUser: async (): Promise<{ user: User }> => {
    const response = await api.get('/auth/me');
    return response.data;
  },
  
  logout: async (): Promise<{ message: string }> => {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};

// User management endpoints
export const userAPI = {
  getProfile: async (): Promise<{ user: User }> => {
    const response = await api.get('/users/profile');
    return response.data;
  },
  
  updateProfile: async (data: Partial<User>): Promise<{ message: string; user: User }> => {
    const response = await api.put('/users/profile', data);
    return response.data;
  },
};
```

## 📊 Data Management

### **courses.ts** - Static Data Store
```typescript
// Purpose: Centralized data for courses, categories, and instructors
export const categories: Category[] = [
  {
    id: '1',
    name: 'MERN Stack',
    description: 'Full-stack web development with MongoDB, Express, React, and Node.js',
    icon: 'Code2',
    courseCount: 12
  },
  // ... more categories
];

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Full-Stack Developer at Google',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 4.9,
    studentsCount: 25000,
    coursesCount: 8,
    bio: 'Former Google engineer with 10+ years of experience in full-stack development.'
  },
  // ... more instructors
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete MERN Stack Development Bootcamp',
    description: 'Master full-stack web development with MongoDB, Express.js, React, and Node.js...',
    instructor: 'Sarah Johnson',
    instructorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    duration: '40 hours',
    level: 'Intermediate',
    price: 89,
    originalPrice: 149,
    rating: 4.8,
    studentsCount: 12500,
    category: 'MERN Stack',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT Authentication'],
    modules: 12,
    projects: 5,
    certificate: true,
    lastUpdated: '2024-01-15'
  },
  // ... more courses
];
```

## 🎨 Styling & Design System

### **index.css** - Global Styles & Design System
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 600;
  }
}

@layer components {
  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95;
  }
  
  .btn-secondary {
    @apply bg-white hover:bg-gray-50 text-gray-900 font-medium px-6 py-3 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md active:scale-95;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1;
  }
  
  .gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
}
```

**Design System Features:**
- **Consistent Components**: Reusable button and card styles
- **Hover Effects**: Smooth transitions and micro-interactions
- **Typography System**: Consistent font weights and line heights
- **Color System**: Gradient backgrounds and consistent color palette
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🔧 Backend Architecture

### **Server Configuration (server/index.js)**
```javascript
// Purpose: Main server setup with middleware and routes
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});
```

### **Authentication Middleware (server/middleware/auth.js)**
```javascript
// Purpose: JWT token verification middleware
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    
    req.user = user;
    next();
  });
};
```

### **User Model (server/models/User.js)**
```javascript
// Purpose: User data model with CRUD operations
export class User {
  constructor(userData) {
    this.id = nextId++;
    this.name = userData.name;
    this.email = userData.email;
    this.password = userData.password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
  
  static async findByEmail(email) {
    return users.find(user => user.email === email);
  }
  
  static async findById(id) {
    return users.find(user => user.id === parseInt(id));
  }
  
  async save() {
    const existingUserIndex = users.findIndex(user => user.id === this.id);
    if (existingUserIndex !== -1) {
      users[existingUserIndex] = this;
    } else {
      users.push(this);
    }
    return this;
  }
  
  toJSON() {
    const { password, ...userWithoutPassword } = this;
    return userWithoutPassword;
  }
}
```

### **Authentication Routes (server/routes/auth.js)**
```javascript
// Purpose: Authentication endpoints (register, login, logout)
// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ 
        message: 'Please provide name, email, and password' 
      });
    }
    
    // Check if user exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ 
        message: 'User with this email already exists' 
      });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: user.toJSON()
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});
```

## 🔒 Security Implementation

### **Password Security**
```javascript
// Password hashing with bcrypt
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);

// Password verification
const isPasswordValid = await bcrypt.compare(password, user.password);
```

### **JWT Token Management**
```javascript
// Token generation
const token = jwt.sign(
  { userId: user.id, email: user.email },
  JWT_SECRET,
  { expiresIn: '7d' }
);

// Token verification
jwt.verify(token, JWT_SECRET, (err, user) => {
  if (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
  req.user = user;
  next();
});
```

### **CORS Configuration**
```javascript
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

## 📱 Responsive Design Implementation

### **Mobile-First Approach**
```css
/* Base styles for mobile */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet styles */
@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### **Responsive Navigation**
```typescript
// Mobile menu toggle
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Conditional rendering for mobile/desktop
{isMenuOpen && (
  <div className="md:hidden py-4 border-t border-gray-200">
    {/* Mobile navigation content */}
  </div>
)}
```

## 🚀 Performance Optimizations

### **Image Optimization**
```typescript
// Lazy loading and optimized images
<img 
  src={course.image} 
  alt={course.title}
  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
  loading="lazy"
/>
```

### **Component Optimization**
```typescript
// Memoization for expensive operations
const filteredCourses = useMemo(() => {
  return courses.filter(course => {
    // Filtering logic
  });
}, [courses, searchQuery, filter]);

// Debounced search
const debouncedSearch = useCallback(
  debounce((query: string) => {
    onSearch(query);
  }, 300),
  [onSearch]
);
```

### **Bundle Optimization**
```typescript
// Dynamic imports for code splitting
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Vite optimization
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

## 🧪 Testing Strategy

### **Component Testing**
```typescript
// Example test for CourseCard component
import { render, screen } from '@testing-library/react';
import CourseCard from './CourseCard';

test('renders course information correctly', () => {
  const mockCourse = {
    id: '1',
    title: 'Test Course',
    instructor: 'Test Instructor',
    // ... other properties
  };
  
  render(<CourseCard course={mockCourse} />);
  
  expect(screen.getByText('Test Course')).toBeInTheDocument();
  expect(screen.getByText('Test Instructor')).toBeInTheDocument();
});
```

### **API Testing**
```javascript
// Example API endpoint test
import request from 'supertest';
import app from '../server/index.js';

describe('Auth Endpoints', () => {
  test('POST /api/auth/register', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    };
    
    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);
    
    expect(response.body.user.email).toBe(userData.email);
    expect(response.body.token).toBeDefined();
  });
});
```

## 📈 Monitoring & Analytics

### **Error Tracking**
```typescript
// Error boundary for React components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error tracking service
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    
    return this.props.children;
  }
}
```

### **Performance Monitoring**
```typescript
// Performance tracking
const trackPageLoad = () => {
  const loadTime = performance.now();
  console.log(`Page loaded in ${loadTime}ms`);
  // Send to analytics service
};

useEffect(() => {
  trackPageLoad();
}, []);
```

## 🔄 Development Workflow

### **Git Workflow**
```bash
# Feature branch workflow
git checkout -b feature/new-component
git add .
git commit -m "feat: add new component with tests"
git push origin feature/new-component
# Create pull request
```

### **Code Quality**
```json
// ESLint configuration
{
  "extends": [
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
```

### **Build Process**
```json
// Package.json scripts
{
  "scripts": {
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "client": "vite",
    "server": "nodemon server/index.js",
    "build": "vite build",
    "test": "jest",
    "lint": "eslint . --ext .ts,.tsx"
  }
}
```

## 🚀 Deployment Configuration

### **Frontend Deployment (Netlify/Vercel)**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### **Backend Deployment (Heroku)**
```json
// Procfile
web: node server/index.js

// Environment variables
PORT=5000
NODE_ENV=production
JWT_SECRET=your-production-secret
MONGODB_URI=your-mongodb-connection
```

## 📚 Documentation Standards

### **Component Documentation**
```typescript
/**
 * CourseCard Component
 * 
 * Displays individual course information including:
 * - Course image with hover effects
 * - Instructor details
 * - Course statistics
 * - Pricing information
 * - Enrollment button
 * 
 * @param course - Course object containing all course details
 * @returns JSX element representing a course card
 */
interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // Component implementation
};
```

### **API Documentation**
```javascript
/**
 * Authentication Routes
 * 
 * POST /api/auth/register
 * - Registers a new user
 * - Body: { name, email, password }
 * - Returns: { token, user, message }
 * 
 * POST /api/auth/login
 * - Authenticates existing user
 * - Body: { email, password }
 * - Returns: { token, user, message }
 */
```

This comprehensive documentation covers every aspect of the COGNITBOTZ Academy codebase, from individual components to the overall architecture. Each section provides detailed explanations of the code's purpose, implementation, and key features, making it easy for developers to understand and contribute to the project.