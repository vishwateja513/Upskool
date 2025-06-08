import React from 'react';
import * as Icons from 'lucide-react';
import { Category } from '../types/course';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="card p-6 text-center group cursor-pointer">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
        <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{category.name}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
      <div className="text-sm text-blue-600 font-medium">
        {category.courseCount} courses available
      </div>
    </div>
  );
};

export default CategoryCard;