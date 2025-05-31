import React, { useState, useEffect } from 'react';
import { Play, MessageCircle, Mic, Globe, Shield, Heart, Zap, Users, Star, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import './index.css';
import logo from './assets/Sehat_Sakhi.png';

const HealthSathiLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Communicate in Hindi & English with natural conversation flow"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Assistant",
      description: "Speak your symptoms naturally - our AI understands voice input"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ayurvedic Remedies",
      description: "Traditional home remedies backed by ancient Indian wisdom"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Triage",
      description: "Intelligent assessment to determine when medical attention is needed"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Response",
      description: "Get immediate guidance 24/7 through Telegram"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Friendly",
      description: "Designed for all ages with simple, caring interactions"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "बहुत ही उपयोगी है! घरेलू नुस्खे बहुत काम आए।"
    },
    {
      name: "Rajesh Kumar",
      location: "Lucknow, UP",
      rating: 5,
      text: "Easy to use and gives good advice. Helped my family a lot."
    },
    {
      name: "Meera Devi",
      location: "Patna, Bihar",
      rating: 5,
      text: "Voice feature is amazing. I can speak in Hindi and get instant help."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-orange-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <img 
                src={logo} 
                alt="Sehat Sakhi Logo" 
                className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Sehat Sakhi
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Demo</a>
              <a href="#testimonials" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Reviews</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-4 py-2 mb-6">
                <Globe className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-sm font-medium text-orange-700">Available in Hindi & English</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Personal{' '}
                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-amber-600 bg-clip-text text-transparent">
                  Health Assistant
                </span>{' '}
                on Telegram
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get instant Ayurvedic remedies, health guidance, and medical advice through AI. 
                Speak in Hindi or English - we understand both your language and your health concerns.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://t.me/SehatSakhiBot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Chat on Telegram
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button 
                  onClick={() => document.getElementById('demo-video').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-orange-200 text-orange-600 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span>10,000+ users helped</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-center mx-auto mb-6">
                    <img 
                      src={logo} 
                      alt="Sehat Sakhi Logo" 
                      className="w-40 h-40 object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Health Guidance</h3>
                    <p className="text-gray-600">Combining traditional Ayurvedic wisdom with modern AI technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powerful Features for Your{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Health Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare like never before with our AI-powered assistant that understands your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-50 hover:-translate-y-2 hover:border-orange-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-orange-600 group-hover:text-red-600 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              See Sehat Sakhi in{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-xl text-gray-600">Watch how easy it is to get health guidance through Telegram</p>
          </div>

          <div id="demo-video" className="relative bg-gradient-to-br from-orange-900 to-red-900 rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video bg-black/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
              <button className="group bg-white/90 hover:bg-white rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-2xl">
                <Play className="w-12 h-12 text-orange-600 ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Loved by{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Thousands</span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from real people across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-orange-50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Your Health Journey?</h2>
              <p className="text-xl mb-8 text-orange-100">
                Join thousands of users who trust Sehat Sakhi for their daily health guidance
              </p>
              <a 
                href="https://t.me/SehatSakhiBot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6 inline mr-2" />
                Start Chatting Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-orange-600 rounded-sm"></div>
                  </div>
                </div>
                <span className="text-xl font-bold">Sehat Sakhi</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering India with AI-powered health guidance through traditional wisdom and modern technology.
              </p>
              <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl text-sm">
                <strong>Medical Disclaimer:</strong> This bot provides general health information only and is not a substitute for professional medical advice, diagnosis, or treatment.
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <div className="flex flex-col">
                    <span>vilansh@gmail.com</span>
                    <span>jhalokesh187@gmail.com</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9468679776
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Jaipur, Rajasthan
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sehat Sakhi. Made with ❤️ for India's health.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthSathiLanding;