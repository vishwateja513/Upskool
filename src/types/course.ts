export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: number;
  category: string;
  image: string;
  skills: string[];
  modules: number;
  projects: number;
  certificate: boolean;
  lastUpdated: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  courseCount: number;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  studentsCount: number;
  coursesCount: number;
  bio: string;
}