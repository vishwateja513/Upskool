import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jessica Wang',
    role: 'Software Engineer at Netflix',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    content: 'The MERN Stack course completely transformed my career. Within 6 months of completing the program, I landed my dream job at Netflix. The hands-on projects were incredible.'
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    role: 'Data Analyst at Spotify',
    image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    content: 'As a working professional, I needed flexible learning. CourseHub\'s Data Analytics program fit perfectly into my schedule. Now I\'m leading data initiatives at Spotify.'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'ML Engineer at Tesla',
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    content: 'The Machine Learning course exceeded my expectations. The instructors are world-class, and the curriculum is cutting-edge. Highly recommend for anyone serious about AI.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with CourseHub
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 rounded-xl p-8 relative">
              <Quote className="h-8 w-8 text-blue-400 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;