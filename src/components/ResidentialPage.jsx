// src/components/ResidentialPage.jsx
import React, { useState, useEffect } from 'react';
import { Sun, Shield, ArrowRight, Check, ChevronRight, Home, ArrowLeft } from 'lucide-react';
import GalleryModal from './GalleryModal';
import useGallery from '../hooks/useGallery';

const ResidentialPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('all');
  const [hoverProject, setHoverProject] = useState(null);
  
  // Add the gallery hook
  const { 
    isModalOpen, 
    selectedImages, 
    categoryTitle, 
    openGallery, 
    closeGallery 
  } = useGallery();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
    transition: 'transform 0.1s ease-out'
  };

  // Updated categories with proper slugs matching your actual folders
  const residentialCategories = [
    { id: 'patios', name: 'Patio Covers', slug: 'patio-covers', icon: Home },
    { id: 'carports', name: 'Carports', slug: 'carports', icon: Home },
    { id: 'pools', name: 'Pool Shading', slug: 'pool-shading', icon: Home },
    { id: 'backyard', name: 'Backyard Solutions', slug: 'backyard-solutions', icon: Home },
    { id: 'custom', name: 'Custom Designs', slug: 'custom-designs', icon: Home },
    { id: 'rv', name: 'RV Carports', slug: 'rvCarports', icon: Home },
  ];

  const residentialFeatures = {
    all: {
      title: "Complete Residential Solutions",
      description: "Transform your home with our comprehensive range of custom shade solutions. From elegant patio covers to functional carports, we create outdoor living spaces that enhance your lifestyle and add value to your property.",
      features: [
        "Full range of residential shade options",
        "Custom designs to match your home's architecture",
        "Professional installation",
        "Energy-efficient solutions that reduce cooling costs",
      ],
      image: "/images/portfolio/residential/residential.png"
    },
    patios: {
      title: "Custom Patio Covers",
      description: "Transform your outdoor living space with our custom-designed patio covers that blend seamlessly with your home's architecture while providing protection from Arizona's harsh sun.",
      features: [
        "Custom-designed to complement your home's architecture",
        "Choices of aluminum, wood, or fabric materials",
        "Optional integrated lighting, fans, and heating elements",
        "Motorized, retractable, or fixed options available",
      ],
      image: "/images/portfolio/residential/patio-covers/PC4.jpg"
    },
    carports: {
      title: "Elegant Carports",
      description: "Protect your vehicles while enhancing your home's curb appeal with our custom-designed carports that add architectural interest and value.",
      features: [
        "Structural design that complements your home's style",
        "Weather-resistant materials for Arizona's climate",
        "Optional integrated drainage systems",
        "Available with integrated lighting for nighttime safety",
      ],
      image: "/images/portfolio/residential/carports/cp4.jpg"
    },
    pools: {
      title: "Luxurious Pool Shading",
      description: "Create comfortable poolside lounging areas with our custom pool shading solutions, from elegant cabanas to practical shade structures that keep your pool area cool and inviting.",
      features: [
        "Custom-designed pool cabanas and pergolas",
        "Optional misting systems for enhanced cooling",
        "Retractable options to control sunlight",
        "Weather-resistant materials designed for pool environments",
      ],
      image: "/images/portfolio/residential/pool-shading/ps1.jpg"
    },
    backyard: {
      title: "Backyard Solutions",
      description: "Complete backyard transformations with our custom shade solutions designed to create comfortable outdoor living and entertainment spaces.",
      features: [
        "Comprehensive backyard shade coverage",
        "Integration with outdoor kitchens and BBQ areas",
        "Custom designs for any backyard layout",
        "Durable materials for long-lasting beauty",
      ],
      image: "/images/portfolio/residential/backyard-solutions/BY5.jpg"
    },
    custom: {
      title: "Custom Design Solutions",
      description: "Unique, one-of-a-kind shade structures designed specifically for your home's architecture and your personal style preferences.",
      features: [
        "Completely custom architectural designs",
        "Unlimited design possibilities",
        "Premium materials and finishes",
        "Engineered for your specific requirements",
      ],
      image: "/images/portfolio/residential/custom-designs/CUSTOM2.jpg"
    },
    rv: {
      title: "RV Carports",
      description: "Protect your RV with our custom-designed carports that provide ample space and robust protection against the elements.",
      features: [
        "Structural design that complements your home's style",
        "Weather-resistant materials for Arizona's climate",
        "Optional integrated drainage systems",
        "Available with integrated lighting for nighttime safety",
      ],
      image: "/images/portfolio/residential/RV/RV3.jpg"
    },
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white overflow-hidden">
      {/* Hero Section - Dramatic, full-screen with premium residential imagery */}
      <div className="relative h-[80vh] flex items-center overflow-hidden">
        {/* Background - Would be replaced with actual residential image */}
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
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-0">
          <a href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </a>
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
              <span className="text-amber-400">Residential</span> Shade Solutions
            </h1>
            <p className="text-xl md:text-2xl font-extralight text-gray-100 mb-10 max-w-2xl">
              Transforming Arizona homes with custom shade solutions that enhance your lifestyle and elevate your outdoor living spaces.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#featured" className="group bg-amber-500 hover:bg-amber-600 text-white font-light py-3 px-8 rounded-sm inline-flex items-center transition-all duration-300">
                Explore Residential Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/#quote" className="bg-transparent hover:bg-white/10 text-white font-light py-3 px-8 border border-white/50 rounded-sm inline-flex items-center hover:border-white transition-all">
                Request a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigator */}
      <div className="sticky top-20 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto py-4 scrollbar-hide -mx-4 px-4">
            <button 
              onClick={() => setActiveSection('all')}
              className={`whitespace-nowrap px-5 py-2 rounded-full mr-3 transition-colors ${activeSection === 'all' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Solutions
            </button>
            {residentialCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveSection(category.id)}
                className={`whitespace-nowrap px-5 py-2 rounded-full mr-3 transition-colors ${activeSection === category.id ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Solution Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="relative">
                <div className="bg-blue-50 rounded-lg h-96 w-full relative overflow-hidden">
                  <img 
                    src={residentialFeatures[activeSection]?.image || residentialFeatures.all.image} 
                    alt={residentialFeatures[activeSection]?.title || residentialFeatures.all.title} 
                    className="object-cover h-full w-full" 
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-amber-500 p-6 rounded-lg shadow-xl">
                  <Home className="text-white" size={32} />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-amber-500 font-semibold tracking-wider">RESIDENTIAL EXCELLENCE</span>
              <h3 className="text-3xl font-light text-blue-900 mt-2 mb-6">
                {residentialFeatures[activeSection]?.title || residentialFeatures.all.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {residentialFeatures[activeSection]?.description || residentialFeatures.all.description}
              </p>
              <ul className="space-y-3 mb-8">
                {(residentialFeatures[activeSection]?.features || residentialFeatures.all.features).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-amber-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-amber-500" size={16} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => {
                  if (activeSection === 'all') {
                    openGallery('residential', 'all', 'All Residential Projects');
                  } else {
                    const category = residentialCategories.find(c => c.id === activeSection);
                    if (category) {
                      openGallery('residential', category.slug, category.name);
                    }
                  }
                }}
                className="inline-flex items-center text-amber-500 font-semibold group cursor-pointer"
              >
                View Gallery
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* See Our Work - Category Gallery */}
      <div id="featured" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-4xl font-light text-blue-900 mb-4">See Our <span className="text-amber-500">Work</span></h2>
              <p className="text-gray-600 max-w-xl">Explore our portfolio of residential shade solutions by category.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Patio Covers */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('residential', 'patio-covers', 'Patio Covers')}
              onMouseEnter={() => setHoverProject('patio-covers')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/residential/patio-covers/PC1.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Patio Covers</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'patio-covers' ? 'opacity-100' : 'opacity-0'}`}>
                  Transform your outdoor living space
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'patio-covers' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Carports */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('residential', 'carports', 'Carports')}
              onMouseEnter={() => setHoverProject('carports')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/residential/carports/cp1.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Carports</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'carports' ? 'opacity-100' : 'opacity-0'}`}>
                  Protect vehicles with style
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'carports' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Pool Shading */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('residential', 'pool-shading', 'Pool Shading')}
              onMouseEnter={() => setHoverProject('pool-shading')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/residential/pool-shading/ps1.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Pool Shading</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'pool-shading' ? 'opacity-100' : 'opacity-0'}`}>
                  Luxurious poolside comfort
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'pool-shading' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Backyard Solutions */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('residential', 'backyard-solutions', 'Backyard Solutions')}
              onMouseEnter={() => setHoverProject('backyard-solutions')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/residential/backyard-solutions/BY1.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Backyard Solutions</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'backyard-solutions' ? 'opacity-100' : 'opacity-0'}`}>
                  Complete outdoor transformations
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'backyard-solutions' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Custom Designs */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('residential', 'custom-designs', 'Custom Designs')}
              onMouseEnter={() => setHoverProject('custom-designs')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/residential/custom-designs/CUSTOM1.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Custom Designs</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'custom-designs' ? 'opacity-100' : 'opacity-0'}`}>
                  Unique architectural solutions
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'custom-designs' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* RV */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('residential', 'rv', 'RV Carports')}
              onMouseEnter={() => setHoverProject('rv')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/residential/RV/RV3.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">RV Carports</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'rv' ? 'opacity-100' : 'opacity-0'}`}>
                  Protect your RV with style
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'custom-designs' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* All Residential Projects */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('residential', 'all', 'All Residential Projects')}
              onMouseEnter={() => setHoverProject('all-residential')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"
              ></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
                <div className="bg-amber-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Home className="text-white" size={36} />
                </div>
                <h3 className="text-white text-2xl font-light mb-2">View All Projects</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'all-residential' ? 'opacity-100' : 'opacity-80'}`}>
                  Browse our complete residential portfolio
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'all-residential' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View All <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-blue-900 text-white relative overflow-hidden">
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
            <h2 className="text-4xl font-light mb-4">Why Choose <span className="text-amber-400">Abe</span> for Your Home</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Our residential shade solutions are designed with your lifestyle in mind, offering beauty, functionality, and lasting value.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center text-blue-900 mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Warranties</h3>
              <p className="text-white/70">Our residential shade solutions are backed by industry-leading warranties, ensuring your investment is protected for years to come.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center text-blue-900 mb-6">
                <Sun className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Energy Efficiency</h3>
              <p className="text-white/70">Our shade solutions can reduce cooling costs by up to 30%, creating a more comfortable home environment while lowering your energy bills.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center text-blue-900 mb-6">
                <Home className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Increased Home Value</h3>
              <p className="text-white/70">Custom shade solutions aren't just beautiful—they're an investment that can increase your property value and enhance curb appeal.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div id="quote" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-12">
                <h3 className="text-3xl font-light text-blue-900 mb-6">Ready to Transform Your <span className="text-amber-500">Outdoor Space</span>?</h3>
                <p className="text-gray-600 mb-8">Schedule a complimentary design consultation with our residential shade experts. We'll help you create the perfect custom solution for your home.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-blue-900" size={16} />
                    </div>
                    <span className="text-gray-700">Free in-home consultation with design experts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-blue-900" size={16} />
                    </div>
                    <span className="text-gray-700">Digital visualization of your custom solution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-blue-900" size={16} />
                    </div>
                    <span className="text-gray-700">Detailed quote with transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-blue-900" size={16} />
                    </div>
                    <span className="text-gray-700">Flexible financing options available</span>
                  </li>
                </ul>
                <a 
                  href="/#quote" 
                  className="inline-flex items-center bg-amber-500 text-white px-8 py-3 rounded-sm hover:bg-amber-600 transition-colors group"
                >
                  Schedule Your Free Consultation
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="md:w-1/2 bg-blue-900 p-12 text-white hidden md:block">
                <div className="h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <img 
                      src="/images/portfolio/residential/custom-designs/CUSTOM1.jpg" 
                      alt="Beautiful residential shade solution" 
                      className="object-cover rounded-lg h-full w-full" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-2xl font-light mb-4">"The outdoor living space Abe created for us has become our favorite part of our home."</p>
                      <p className="text-white/80 italic">— The Martinez Family, Paradise Valley</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Solutions */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-blue-900 mb-12 text-center">Explore More <span className="text-amber-500">Solutions</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a href="/commercial" className="group block relative overflow-hidden h-80 rounded-lg">
              <div className="absolute inset-0 bg-blue-900">
                <img 
                  src="/images/portfolio/commercial/hip-structures/HS1.jpg" 
                  alt="Commercial shade solutions" 
                  className="object-cover h-full w-full opacity-80 group-hover:opacity-60 transition-opacity" 
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-light text-white mb-2">Commercial Solutions</h3>
                  <p className="text-white/80 mb-4">Discover our custom shade solutions for businesses, restaurants, and commercial properties.</p>
                  <span className="text-amber-400 inline-flex items-center font-medium group-hover:underline">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </a>
            
            <a href="/#quote" className="group block relative overflow-hidden h-80 rounded-lg">
              <div className="absolute inset-0 bg-blue-900">
                <img 
                  src="/images/portfolio/residential/custom-designs/CUSTOM2.jpg" 
                  alt="Custom design process" 
                  className="object-cover h-full w-full opacity-80 group-hover:opacity-60 transition-opacity" 
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-light text-white mb-2">Get Started Today</h3>
                  <p className="text-white/80 mb-4">Ready to transform your home? Request a consultation now.</p>
                  <span className="text-amber-400 inline-flex items-center font-medium group-hover:underline">
                    Get a Quote <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Add the Gallery Modal at the very end */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={closeGallery}
        images={selectedImages}
        categoryTitle={categoryTitle}
      />
    </div>
  );
};

export default ResidentialPage;