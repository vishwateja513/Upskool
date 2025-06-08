import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  courses: any[];
  categories: any[];
}

const ChatBot: React.FC<ChatBotProps> = ({ courses, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your course assistant. I can help you find the perfect course, answer questions about our programs, or provide information about instructors and pricing. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Course recommendations
    if (message.includes('recommend') || message.includes('suggest') || message.includes('best course')) {
      if (message.includes('beginner')) {
        return "For beginners, I recommend starting with our 'Data Analytics Masterclass with Python' - it's designed for newcomers and has excellent reviews. You could also consider our MERN Stack course if you're interested in web development.";
      }
      if (message.includes('advanced')) {
        return "For advanced learners, check out our 'Advanced React Development & Performance' or 'Machine Learning Fundamentals' courses. Both offer deep technical knowledge and hands-on projects.";
      }
      return "Based on our most popular courses, I'd recommend the 'Complete MERN Stack Development Bootcamp' for web development or 'Data Analytics Masterclass' for data science. What's your background and interests?";
    }

    // Pricing questions
    if (message.includes('price') || message.includes('cost') || message.includes('fee')) {
      return "Our courses range from $79 to $129, with significant discounts available. Most courses are currently 40-50% off their original price. All courses include lifetime access, certificates, and hands-on projects. Would you like pricing details for a specific course?";
    }

    // Duration questions
    if (message.includes('duration') || message.includes('long') || message.includes('time')) {
      return "Course durations vary from 28 to 50 hours of content. Most students complete courses in 6-12 weeks studying 5-10 hours per week. All courses are self-paced, so you can learn at your own speed. Which course duration are you interested in?";
    }

    // Certificate questions
    if (message.includes('certificate') || message.includes('certification')) {
      return "Yes! All our courses include a certificate of completion. These certificates are recognized by industry professionals and can be added to your LinkedIn profile. You'll receive your certificate after completing all modules and projects.";
    }

    // Instructor questions
    if (message.includes('instructor') || message.includes('teacher')) {
      return "Our instructors are industry experts from top companies like Google, Microsoft, and Amazon. Sarah Johnson (Google), Dr. Michael Chen (Microsoft), and Alex Rodriguez (Amazon) lead our most popular courses. All have 4.8+ ratings and years of teaching experience.";
    }

    // Job placement
    if (message.includes('job') || message.includes('career') || message.includes('placement')) {
      return "We have a 95% job placement rate! Our career support includes resume review, interview preparation, and job placement assistance. Many students land jobs within 6 months of completion, with an average 40% salary increase.";
    }

    // Specific course inquiries
    if (message.includes('mern') || message.includes('react') || message.includes('node')) {
      return "Our MERN Stack courses are very popular! The Complete MERN Stack Bootcamp covers MongoDB, Express, React, and Node.js with 5 real-world projects. It's 40 hours of content for $89 (originally $149). Perfect for aspiring full-stack developers.";
    }

    if (message.includes('data') || message.includes('analytics') || message.includes('python')) {
      return "Our Data Analytics courses are excellent for career changers! The Python Masterclass covers data analysis, visualization, and machine learning. It's beginner-friendly, 35 hours long, and costs $79. Dr. Michael Chen from Microsoft is the instructor.";
    }

    if (message.includes('machine learning') || message.includes('ai') || message.includes('ml')) {
      return "Our Machine Learning Fundamentals course is comprehensive! It covers supervised/unsupervised learning, neural networks, and practical Python implementation. 45 hours of content with 6 hands-on projects for $119. Great for entering the AI field.";
    }

    if (message.includes('devops') || message.includes('docker') || message.includes('kubernetes')) {
      return "The DevOps Engineering Complete Guide is perfect for infrastructure roles! Learn Docker, Kubernetes, AWS, and CI/CD pipelines. 50 hours of content with 8 projects for $129. Alex Rodriguez from Amazon teaches this course.";
    }

    // Prerequisites
    if (message.includes('prerequisite') || message.includes('requirement') || message.includes('background')) {
      return "Most of our courses are designed for different skill levels. Beginner courses require no prior experience, while intermediate courses assume basic programming knowledge. Advanced courses need solid foundation in the subject. What's your current experience level?";
    }

    // Support questions
    if (message.includes('support') || message.includes('help') || message.includes('stuck')) {
      return "We provide comprehensive support! Each course includes discussion forums, direct instructor access, and peer community. Plus, our support team is available 24/7 for technical issues. You're never alone in your learning journey.";
    }

    // Refund policy
    if (message.includes('refund') || message.includes('money back') || message.includes('guarantee')) {
      return "We offer a 30-day money-back guarantee on all courses. If you're not satisfied within the first 30 days, we'll provide a full refund, no questions asked. We're confident you'll love our courses!";
    }

    // General greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to our learning platform. I'm here to help you find the perfect course for your career goals. Are you interested in web development, data science, machine learning, or something else?";
    }

    // Default response
    return "I'd be happy to help you with that! I can provide information about our courses, pricing, instructors, job placement, and more. Could you be more specific about what you'd like to know? For example, you could ask about course recommendations, pricing, or specific technologies.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
    }`}>
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5" />
          <span className="font-semibold">Course Assistant</span>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:bg-blue-700 p-1 rounded"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 p-1 rounded"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-200'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-gray-600" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-xs">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about courses, pricing, or anything else..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;