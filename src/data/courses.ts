import { Course, Category, Instructor } from '../types/course';

export const categories: Category[] = [
  {
    id: '1',
    name: 'MERN Stack',
    description: 'Full-stack web development with MongoDB, Express, React, and Node.js',
    icon: 'Code2',
    courseCount: 12
  },
  {
    id: '2',
    name: 'Data Analytics',
    description: 'Master data analysis, visualization, and business intelligence',
    icon: 'BarChart3',
    courseCount: 8
  },
  {
    id: '3',
    name: 'Machine Learning',
    description: 'AI and ML algorithms, deep learning, and practical applications',
    icon: 'Brain',
    courseCount: 15
  },
  {
    id: '4',
    name: 'DevOps',
    description: 'CI/CD, containerization, cloud deployment, and automation',
    icon: 'Settings',
    courseCount: 10
  },
  {
    id: '5',
    name: 'Mobile Development',
    description: 'iOS and Android app development with React Native and Flutter',
    icon: 'Smartphone',
    courseCount: 9
  },
  {
    id: '6',
    name: 'Cybersecurity',
    description: 'Network security, ethical hacking, and cybersecurity fundamentals',
    icon: 'Shield',
    courseCount: 7
  }
];

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Full-Stack Developer at Google',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    studentsCount: 25000,
    coursesCount: 8,
    bio: 'Former Google engineer with 10+ years of experience in full-stack development.'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    title: 'Data Science Lead at Microsoft',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    studentsCount: 18000,
    coursesCount: 6,
    bio: 'PhD in Statistics with expertise in machine learning and data visualization.'
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    title: 'DevOps Architect at Amazon',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    studentsCount: 22000,
    coursesCount: 5,
    bio: 'Cloud infrastructure expert with extensive experience in AWS and containerization.'
  }
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete MERN Stack Development Bootcamp',
    description: 'Master full-stack web development with MongoDB, Express.js, React, and Node.js. Build 5 real-world projects including an e-commerce platform.',
    instructor: 'Sarah Johnson',
    instructorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '40 hours',
    level: 'Intermediate',
    price: 89,
    originalPrice: 149,
    rating: 4.8,
    studentsCount: 12500,
    category: 'MERN Stack',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT Authentication'],
    modules: 12,
    projects: 5,
    certificate: true,
    lastUpdated: '2024-01-15'
  },
  {
    id: '2',
    title: 'Data Analytics Masterclass with Python',
    description: 'Learn data analysis, visualization, and machine learning with Python, Pandas, and Matplotlib. Real industry datasets included.',
    instructor: 'Dr. Michael Chen',
    instructorAvatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '35 hours',
    level: 'Beginner',
    price: 79,
    originalPrice: 129,
    rating: 4.9,
    studentsCount: 8900,
    category: 'Data Analytics',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    skills: ['Python', 'Pandas', 'Matplotlib', 'SQL', 'Data Visualization'],
    modules: 10,
    projects: 4,
    certificate: true,
    lastUpdated: '2024-01-20'
  },
  {
    id: '3',
    title: 'Advanced React Development & Performance',
    description: 'Deep dive into React advanced patterns, performance optimization, testing, and modern development practices.',
    instructor: 'Sarah Johnson',
    instructorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '28 hours',
    level: 'Advanced',
    price: 99,
    originalPrice: 159,
    rating: 4.7,
    studentsCount: 6700,
    category: 'MERN Stack',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    skills: ['React Hooks', 'Context API', 'Performance Optimization', 'Testing', 'TypeScript'],
    modules: 8,
    projects: 3,
    certificate: true,
    lastUpdated: '2024-01-10'
  },
  {
    id: '4',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to ML algorithms, supervised and unsupervised learning, with hands-on Python implementation.',
    instructor: 'Dr. Michael Chen',
    instructorAvatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '45 hours',
    level: 'Intermediate',
    price: 119,
    originalPrice: 199,
    rating: 4.8,
    studentsCount: 9800,
    category: 'Machine Learning',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    skills: ['Python', 'Scikit-learn', 'TensorFlow', 'Statistics', 'Neural Networks'],
    modules: 15,
    projects: 6,
    certificate: true,
    lastUpdated: '2024-01-25'
  },
  {
    id: '5',
    title: 'DevOps Engineering Complete Guide',
    description: 'Master containerization, CI/CD pipelines, cloud deployment, and infrastructure automation.',
    instructor: 'Alex Rodriguez',
    instructorAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '50 hours',
    level: 'Intermediate',
    price: 129,
    originalPrice: 219,
    rating: 4.9,
    studentsCount: 7500,
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'],
    modules: 18,
    projects: 8,
    certificate: true,
    lastUpdated: '2024-01-18'
  },
  {
    id: '6',
    title: 'Business Intelligence & Data Visualization',
    description: 'Create stunning dashboards and reports using Tableau, Power BI, and advanced analytics techniques.',
    instructor: 'Dr. Michael Chen',
    instructorAvatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '32 hours',
    level: 'Intermediate',
    price: 89,
    originalPrice: 149,
    rating: 4.7,
    studentsCount: 5400,
    category: 'Data Analytics',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    skills: ['Tableau', 'Power BI', 'SQL', 'Excel', 'Dashboard Design'],
    modules: 11,
    projects: 5,
    certificate: true,
    lastUpdated: '2024-01-12'
  }
];