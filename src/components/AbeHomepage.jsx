// src/components/AbeHomepage.jsx
import React, { useState, useEffect } from 'react';
import { Sun, Shield, Building2, Home, Phone, Mail, Check, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const AbeHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoverProject, setHoverProject] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
    transition: 'transform 0.1s ease-out'
  };

  const testimonials = [
    {
      text: "Abe transformed our backyard into an oasis we use year-round. The custom design perfectly complements our home's architecture.",
      author: "Maria S.",
      role: "Paradise Valley Homeowner",
      rating: 5
    },
    {
      text: "We contracted Abe for our restaurant patio and the result exceeded all expectations. Our customers rave about how comfortable it is even in mid-summer.",
      author: "James T.",
      role: "Restaurant Owner, Scottsdale",
      rating: 5
    },
    {
      text: "As a commercial developer, I've worked with many contractors, but Abe's attention to detail and creative solutions stand apart from everyone else.",
      author: "David L.",
      role: "Commercial Developer, Phoenix",
      rating: 5
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Custom Structures",
      category: "Commercial",
      image: "/images/commercial1.jpg",
      description: "Custom shade structures",
    },
    {
      id: 2,
      title: "Modern Pool Solutions",
      category: "Residential",
      image: "/images/residential1.jpg",
      description: "Expert solutions for private residences",
    },
    {
      id: 3,
      title: "Unique Designs",
      category: "Commercial",
      image: "/images/commercial2.jpg",
      description: "Your vision, our attention to detail",
    }
  ];
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'service_rni3pyo',  // From EmailJS dashboard
    'template_viwqyd9', // From EmailJS dashboard
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      project_type: formData.projectType,
      message: formData.message,
    },
    'K5b2NiP3WPUxPWS8n' // From EmailJS dashboard
  )
  .then(() => {
    alert('Thank you! We\'ll contact you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'residential',
      message: ''
    });
  })
  .catch((error) => {
    console.error('EmailJS error:', error);
    alert('Oops! Something went wrong. Please try again.');
  });
};

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white overflow-hidden">
      {/* Navigation - Hidden until scroll */}
<nav className={`fixed w-full z-50 transition-all duration-500 ${
  scrollY > 100 ? 'bg-white shadow-md py-2 opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
}`}>
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-2xl font-light text-blue-900">
          <span className="font-bold">AWNING & SHADES</span> <span className="italic">by Abe</span>
        </div>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="/" className="hover:text-amber-500 font-light transition-colors text-blue-900">HOME</a>
        <a href="/commercial" className="hover:text-amber-500 font-light transition-colors text-blue-900">COMMERCIAL</a>
        <a href="/residential" className="hover:text-amber-500 font-light transition-colors text-blue-900">RESIDENTIAL</a>
        <a href="/portfolio" className="hover:text-amber-500 font-light transition-colors text-blue-900">PORTFOLIO</a>
        <a href="/about" className="hover:text-amber-500 font-light transition-colors text-blue-900">ABOUT</a>
        <a href="#quote" className="bg-amber-500 text-white px-6 py-2 rounded-sm font-light hover:bg-amber-600 transition-colors">GET A QUOTE</a>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-900">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  </div>
  
  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-white p-6 shadow-lg absolute w-full">
      <a href="/" className="block py-3 text-blue-900 font-light border-b border-gray-100">HOME</a>
      <a href="/commercial" className="block py-3 text-gray-600 font-light border-b border-gray-100">COMMERCIAL</a>
      <a href="/residential" className="block py-3 text-gray-600 font-light border-b border-gray-100">RESIDENTIAL</a>
      <a href="/portfolio" className="block py-3 text-gray-600 font-light border-b border-gray-100">PORTFOLIO</a>
      <a href="/about" className="block py-3 text-gray-600 font-light">ABOUT</a>
      <a href="#quote" className="block py-3 mt-4 bg-amber-500 text-white px-4 rounded-sm font-light text-center">GET A QUOTE</a>
    </div>
  )}
</nav>

      {/* IMPROVED Hero Section with better visibility */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with reduced overlay for better visibility */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/landingpage.png" 
            alt="Premium shade solutions" 
            className="object-cover h-full w-full"
          />
          {/* Lighter overlay */}
          <div className="absolute inset-0 bg-blue-900/30"></div>
        </div>
        
        {/* Very subtle gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
        
        {/* Main Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 md:py-0 w-full">
          <div className="flex flex-col items-start mt-8 md:mt-0">
            <span className="inline-block bg-amber-500 text-white px-4 py-1 text-sm tracking-wider font-medium mb-6">
              ARIZONA'S PREMIER SHADE SOLUTIONS
            </span>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
              <span className="block">ELEVATING</span>
              <span className="block">OUTDOOR</span> 
              <span className="block"><span className="text-amber-500">LIVING</span> SPACES</span>
            </h1>
            <p className="text-xl md:text-2xl font-extralight text-white mb-10 max-w-2xl drop-shadow-lg">
              Transforming Arizona's harshest environments into cool, elegant spaces that merge beauty with function.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
              <a href="#quote" className="group bg-amber-500 hover:bg-amber-600 text-white font-medium py-4 px-8 rounded-sm inline-flex items-center transition-all duration-300 shadow-lg">
                Request Your Design
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 border border-white/70 rounded-sm inline-flex items-center hover:border-white transition-all shadow-lg">
                Explore Our Work
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
          <span className="text-white text-sm mb-3 font-light tracking-wider">SCROLL TO EXPLORE</span>
          <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center p-1">
            <div className="w-2 h-3 bg-amber-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Featured Projects - Masonry grid with hover effects */}
      <div id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="text-4xl font-light text-blue-900 mb-4">Featured <span className="text-amber-500">Projects</span></h2>
              <p className="text-gray-600 max-w-xl">Where engineering excellence meets design sophistication.</p>
            </div>
            <a href="#" className="mt-4 md:mt-0 text-amber-500 font-semibold inline-flex items-center group">
              View Full Portfolio
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="relative overflow-hidden group h-80 cursor-pointer"
                onMouseEnter={() => setHoverProject(project.id)}
                onMouseLeave={() => setHoverProject(null)}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{backgroundImage: `url(${project.image})`}}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-amber-400 text-sm tracking-wider mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-light">{project.title}</h3>
                  <p className={`text-white/70 mt-2 transition-all duration-300 ${hoverProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    {project.description}
                  </p>
                  <a 
                    href="#" 
                    className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    View Project <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section with alternating layout and illustrations */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-blue-900 mb-4">Elevated <span className="text-amber-500">Solutions</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Combining form and function to create spaces that transform how you experience the Arizona climate.</p>
          </div>
          
          {/* Commercial Solution */}
          <div className="flex flex-col md:flex-row items-center mb-24">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="relative">
                <div className="bg-blue-100 rounded-lg h-96 w-full relative overflow-hidden">
                  <img src="/images/commercial3.jpg" alt="Commercial shade solution" className="object-cover h-full w-full" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-amber-500 p-6 rounded-lg shadow-xl">
                  <Building2 className="text-white" size={32} />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-amber-500 font-semibold tracking-wider">COMMERCIAL EXCELLENCE</span>
              <h3 className="text-3xl font-light text-blue-900 mt-2 mb-6">Transforming Business Environments</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For Arizona businesses, shade isn't a luxury—it's essential. Our commercial solutions combine architectural elegance with engineering precision, creating spaces that enhance customer experiences while withstanding the harshest desert conditions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="text-blue-900" size={16} />
                  </div>
                  <span className="text-gray-700">Custom engineered shade structures for any commercial space</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="text-blue-900" size={16} />
                  </div>
                  <span className="text-gray-700">Specialized solutions for restaurants, hotels, and retail</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="text-blue-900" size={16} />
                  </div>
                  <span className="text-gray-700">Large-scale projects with precise project management</span>
                </li>
              </ul>
              <a href="/commercial" className="inline-flex items-center text-amber-500 font-semibold group">
                Explore Commercial Solutions
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Residential Solution */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="relative">
                <div className="bg-amber-100 rounded-lg h-96 w-full relative overflow-hidden">
                  <img src="/images/residential2.jpg" alt="Residential shade solution" className="object-cover h-full w-full" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-blue-800 p-6 rounded-lg shadow-xl">
                  <Home className="text-white" size={32} />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-amber-500 font-semibold tracking-wider">RESIDENTIAL ARTISTRY</span>
              <h3 className="text-3xl font-light text-blue-900 mt-2 mb-6">Elevating Home Outdoor Living</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your home deserves more than standard solutions. Our residential designs seamlessly integrate with your architecture and lifestyle, creating outdoor sanctuaries that can be enjoyed year-round despite Arizona's challenging climate.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-amber-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="text-amber-500" size={16} />
                  </div>
                  <span className="text-gray-700">Custom-designed patio covers and structures</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="text-amber-500" size={16} />
                  </div>
                  <span className="text-gray-700">Premium shade solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="text-amber-500" size={16} />
                  </div>
                  <span className="text-gray-700">Integrated structure designs</span>
                </li>
              </ul>
              <a href="/residential" className="inline-flex items-center text-amber-500 font-semibold group">
                Discover Residential Solutions
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section with timeline */}
      <div className="py-24 bg-blue-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FFB800" d="M47.7,-57.2C59.9,-47.3,67.2,-31.5,71.2,-14.6C75.1,2.4,75.8,20.4,68.4,34.9C61,49.4,45.6,60.5,28.7,69C11.9,77.5,-6.4,83.3,-22.5,78.8C-38.6,74.4,-52.4,59.6,-63.3,43.1C-74.2,26.6,-82.2,8.4,-79.8,-8.7C-77.5,-25.7,-64.9,-41.7,-50,-52C-35.1,-62.4,-17.6,-67.2,-0.1,-67C17.3,-66.9,35.5,-67.1,47.7,-57.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FFFFFF" d="M53.2,-58.9C68.7,-47.4,80.9,-31.6,83.2,-14.5C85.6,2.6,78.1,21,67.1,35.8C56,50.6,41.4,61.8,24.4,70.1C7.4,78.4,-12,83.8,-29.8,78.7C-47.6,73.6,-63.8,58,-73.5,39.4C-83.2,20.8,-86.5,-0.9,-81,-20.4C-75.6,-39.9,-61.4,-57.3,-44.8,-68.5C-28.2,-79.7,-9.2,-84.8,4.2,-89.8C17.6,-94.8,37.6,-70.5,53.2,-58.9Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light mb-4">The <span className="text-amber-400">Abe</span> Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">From concept to completion, our approach ensures a flawless experience and exceptional results.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
                <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl mb-6">1</div>
                <h3 className="text-xl font-semibold mb-4">Consultation</h3>
                <p className="text-white/70">We begin with understanding your space, needs, and aesthetic vision through an in-depth consultation.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-amber-500/30 transform -translate-y-1/2 z-0"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
                <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl mb-6">2</div>
                <h3 className="text-xl font-semibold mb-4">Custom Design</h3>
                <p className="text-white/70">Our architects and designers create bespoke concepts tailored to your specific environment.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-amber-500/30 transform -translate-y-1/2 z-0"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
                <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl mb-6">3</div>
                <h3 className="text-xl font-semibold mb-4">Precision Fabrication</h3>
                <p className="text-white/70">Using only premium materials, we meticulously craft each component in our specialized facility.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-amber-500/30 transform -translate-y-1/2 z-0"></div>
            </div>
            
            <div>
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
                <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl mb-6">4</div>
                <h3 className="text-xl font-semibold mb-4">Expert Installation</h3>
                <p className="text-white/70">Our master installers ensure flawless implementation with minimal disruption to your space.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-blue-900 mb-4">Client <span className="text-amber-500">Experiences</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What our clients say about working with Abe.</p>
          </div>
          
          <div className="relative">
            {/* Testimonial Slides */}
            <div className="overflow-hidden">
              <div className="transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)`, display: 'flex' }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg p-10 shadow-lg">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg italic mb-8">"{testimonial.text}"</p>
                      <div>
                        <h4 className="text-blue-900 font-bold">{testimonial.author}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-10 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === index ? 'bg-amber-500 w-8' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Form */}
      <div id="quote" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-900 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-12 text-white">
                <h3 className="text-3xl font-light mb-6">Begin Your <span className="text-amber-400">Transformation</span></h3>
                <p className="text-white/70 mb-8">Share your vision with us, and let's create something extraordinary together. Our design consultants will contact you within 24 hours.</p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <Check className="text-amber-400 mr-4 mt-1" size={20} />
                    <p className="text-white/80">Complimentary design consultation</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-amber-400 mr-4 mt-1" size={20} />
                    <p className="text-white/80">Transparent pricing with detailed proposals</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-amber-400 mr-4 mt-1" size={20} />
                    <p className="text-white/80">Premium materials with industry-leading warranties</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/20 space-y-4">
                  <div className="flex items-center">
                    <Phone className="text-amber-400 mr-4" size={20} />
                    <span>(602) 555-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-amber-400 mr-4" size={20} />
                    <span>design@awningsbyabe.com</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-white p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-amber-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-b border-gray-300 focus:border-amber-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-b border-gray-300 focus:border-amber-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Project Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center bg-gray-50 p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                        <input
                          type="radio"
                          name="projectType"
                          value="residential"
                          checked={formData.projectType === 'residential'}
                          onChange={handleInputChange}
                          className="mr-3 text-amber-500 focus:ring-amber-500"
                        />
                        <div>
                          <span className="block text-gray-900">Residential</span>
                          <span className="text-sm text-gray-500">For homes & private properties</span>
                        </div>
                      </label>
                      <label className="flex items-center bg-gray-50 p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                        <input
                          type="radio"
                          name="projectType"
                          value="commercial"
                          checked={formData.projectType === 'commercial'}
                          onChange={handleInputChange}
                          className="mr-3 text-amber-500 focus:ring-amber-500"
                        />
                        <div>
                          <span className="block text-gray-900">Commercial</span>
                          <span className="text-sm text-gray-500">For business & public spaces</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Tell Us About Your Project</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="group w-full bg-amber-500 text-white py-4 px-6 rounded-sm font-medium hover:bg-amber-600 transition-colors inline-flex items-center justify-center"
                  >
                    Submit Your Request
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-light mb-6">
                <span className="font-bold">AWNING & SHADES</span> <span className="italic text-amber-400">by Abe</span>
              </div>
              <p className="text-gray-400 mb-6">Arizona's premier designer and installer of custom shade solutions that merge artistry with functionality.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-800/20 flex items-center justify-center text-white hover:bg-blue-800/40 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-800/20 flex items-center justify-center text-white hover:bg-blue-800/40 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-800/20 flex items-center justify-center text-white hover:bg-blue-800/40 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-800/20 flex items-center justify-center text-white hover:bg-blue-800/40 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="/commercial" className="hover:text-amber-400 transition-colors">Commercial Structures</a></li>
                <li><a href="/residential" className="hover:text-amber-400 transition-colors">Residential Solutions</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Custom Designs</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Retractable Systems</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Maintenance & Repair</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">About Us</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="/about" className="hover:text-amber-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Design Team</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Testimonials</a></li>
                <li><a href="/portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>7890 E. Shade Avenue<br />Scottsdale, AZ 85255</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>(602) 555-7890</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>design@awningsbyabe.com</span>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-3">Hours</h4>
                <p className="text-gray-400">Mon-Fri: 9AM - 6PM</p>
                <p className="text-gray-400">Sat: 10AM - 4PM</p>
                <p className="text-gray-400">Sun: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Awning & Shades By Abe. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Warranty Information</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AbeHomepage;