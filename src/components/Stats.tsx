import React from 'react';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Active Students',
    description: 'Learning and growing with us'
  },
  {
    icon: Award,
    value: '95%',
    label: 'Job Placement Rate',
    description: 'Students land jobs within 6 months'
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Average Salary Increase',
    description: 'After course completion'
  },
  {
    icon: Globe,
    value: '150+',
    label: 'Countries Reached',
    description: 'Global community of learners'
  }
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real results from real students who trusted us with their career transformation
          </p>
        </div>
        
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
      </div>
    </section>
  );
};

export default Stats;