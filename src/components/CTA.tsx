import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join thousands of professionals who have already advanced their careers with our expert-led courses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary bg-white text-blue-600 hover:bg-gray-50 flex items-center justify-center space-x-2 text-lg px-8 py-4">
              <span>Start Learning Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Talk to Advisor
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Expert Instructors</h3>
                <p className="text-blue-100 text-sm">Learn from industry professionals with years of experience</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Hands-on Projects</h3>
                <p className="text-blue-100 text-sm">Build real-world applications for your portfolio</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Job Placement Support</h3>
                <p className="text-blue-100 text-sm">Career guidance and job placement assistance included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;