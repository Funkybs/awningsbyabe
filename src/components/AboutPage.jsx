// src/components/AboutPage.jsx
import React, { useState, useEffect } from 'react';
import { Calendar, Award, Users, Heart, Star, ArrowRight, Check, ChevronRight, ArrowLeft } from 'lucide-react';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
    transition: 'transform 0.1s ease-out'
  };

  const milestones = [
    {
      year: "Early 1990s",
      title: "Industry Beginnings",
      description: "Abe begins his career in the shade industry, learning the craft and developing expertise in custom shade solutions."
    },
    {
      year: "2008",
      title: "Company Founded",
      description: "Awning & Shades by Abe is officially established, with a focus on delivering premium custom shade solutions."
    },
    {
      year: "2013",
      title: "Commercial Expansion",
      description: "The company expands its offerings to include large-scale commercial projects, including car washes and retail centers. Abe's son joins the business, bringing fresh ideas while maintaing the company's commitment to quality and service"
    },
    {
      year: "2023",
      title: "15th Anniversary",
      description: "Celebrating 15 years of excellence and hundreds of successful installations across Arizona."
    }
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "We never cut corners. From materials to installation, we deliver the highest quality in every aspect of our work."
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "As an owner-operated business, we provide direct, personal attention to every project from start to finish."
    },
    {
      icon: Calendar,
      title: "Reliability & Timeliness",
      description: "We respect your time and deliver on our promises, completing projects on schedule and as promised."
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Your complete satisfaction is our ultimate goal. We're not finished until you're delighted with the results."
    }
  ];

  const testimonials = [
    {
      quote: "Abe personally handled every aspect of our project, from design to installation. His attention to detail and commitment to quality were evident at every step.",
      author: "Michael R.",
      title: "Scottsdale Homeowner"
    },
    {
      quote: "As a commercial property manager, I've worked with many contractors. Abe's professionalism, timeliness, and quality of work are truly exceptional.",
      author: "Sarah T.",
      title: "Commercial Property Manager"
    },
    {
      quote: "The father-son team brought both experience and innovation to our complex project. They delivered exactly what they promised, on time and on budget.",
      author: "David L.",
      title: "Restaurant Owner"
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full" style={parallaxStyle}>
            <div className="absolute top-20 right-20 w-32 h-32 bg-amber-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute top-40 right-40 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          <a href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </a>
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
              Our <span className="text-amber-400">Story</span>
            </h1>
            <p className="text-xl md:text-2xl font-extralight text-gray-100 mb-6 max-w-2xl">
              A legacy of excellence in custom shade solutions, built on craftsmanship and commitment.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-amber-500 font-semibold tracking-wider">OUR JOURNEY</span>
              <h2 className="text-3xl font-light text-blue-900 mt-2 mb-8">Family-Owned Excellence Since 2008</h2>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  Abe began his journey in the shade industry in the early 1990s, where he honed his craft and developed a deep understanding of materials, design, and installation techniques. After years of gaining valuable experience, he made the decision to launch his own venture—Awnings & Shades by Abe—in 2008.
                </p>
                
                <p className="leading-relaxed">
                  Since founding the company, Abe has built a strong reputation for his exceptional professionalism, unwavering reliability, and meticulous attention to detail. Clients throughout Arizona know him for his punctuality and his commitment to delivering exactly what was promised, when it was promised.
                </p>
                
                <p className="leading-relaxed">
                  Today, with the collaboration of his son, Awnings & Shades by Abe continues to thrive as a proud owner-operated company. This father-son partnership combines decades of experience with fresh perspectives, ensuring the business remains at the forefront of shade innovation while maintaining the personal touch that has been their hallmark since day one.
                </p>
                
                <p className="leading-relaxed">
                  Together, they remain dedicated to their founding principles: delivering premium quality products, exceptional craftsmanship, and outstanding customer service to every client.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-blue-50 rounded-lg h-[32rem] w-full relative overflow-hidden">
                  <img 
                    src="https://placehold.co/800x1000/083344/white?text=Abe+and+Son" 
                    alt="Abe and his son" 
                    className="object-cover h-full w-full" 
                  />
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">The Abe Difference</h3>
                  <p className="text-gray-700">
                    "Every project receives our personal attention from start to finish. We're not just building shade structures—we're crafting comfort, protection, and beauty that will last for decades."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-blue-900 mb-4">Our <span className="text-amber-500">Journey</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From industry beginnings to becoming Arizona's premier shade solution provider, our path has been defined by growth and commitment to excellence.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-16">
                    <div className={`bg-blue-900 text-white px-8 py-3 rounded-lg shadow-lg inline-block ${index % 2 === 0 ? 'md:rounded-tr-none' : 'md:rounded-tl-none'}`}>
                      <span className="text-amber-400 font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  
                  {/* Center Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-amber-500 rounded-full items-center justify-center z-10 hidden md:flex">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="md:w-1/2 mt-4 md:mt-0 md:pl-16">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-blue-900 mb-4">Our <span className="text-amber-500">Values</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and define who we are as a company.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-blue-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FFB800" d="M47.7,-57.2C59.9,-47.3,67.2,-31.5,71.2,-14.6C75.1,2.4,75.8,20.4,68.4,34.9C61,49.4,45.6,60.5,28.7,69C11.9,77.5,-6.4,83.3,-22.5,78.8C-38.6,74.4,-52.4,59.6,-63.3,43.1C-74.2,26.6,-82.2,8.4,-79.8,-8.7C-77.5,-25.7,-64.9,-41.7,-50,-52C-35.1,-62.4,-17.6,-67.2,-0.1,-67C17.3,-66.9,35.5,-67.1,47.7,-57.2Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Client <span className="text-amber-400">Experiences</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              What our clients say about working with our team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-8 backdrop-blur-sm relative">
                <div className="absolute -top-4 -left-4 text-amber-500">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 10V16.6667H16V10H9.33333ZM4 10V16.6667H8.33333V10H4ZM9.33333 17.6667V22H16V17.6667H9.33333ZM4 17.6667V22H8.33333V17.6667H4ZM9.33333 2V9H16V2H9.33333ZM4 2V9H8.33333V2H4Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-white/90 italic mt-6 mb-8">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="flex-grow">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-white/70 text-sm">{testimonial.title}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-2/3 p-12">
                <h3 className="text-3xl font-light text-blue-900 mb-6">Experience the <span className="text-amber-500">Abe Difference</span></h3>
                <p className="text-gray-600 mb-8">
                  Ready to transform your space with a custom shade solution? Get in touch today to schedule a consultation with Abe and his team.
                </p>
                <a 
                  href="/#quote" 
                  className="inline-flex items-center bg-amber-500 text-white px-8 py-3 rounded-sm hover:bg-amber-600 transition-colors group"
                >
                  Request Your Free Quote
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="md:w-1/3 p-12 hidden md:block">
                <div className="flex justify-center">
                  <div className="w-48 h-48 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">15+</span>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-4 text-xl">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;