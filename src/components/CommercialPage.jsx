// src/components/CommercialPage.jsx
import React, { useState, useEffect } from 'react';
import { Sun, Shield, Building2, Droplets, Briefcase, Building, Factory, ArrowRight, Check, ChevronRight, ArrowLeft } from 'lucide-react';
import GalleryModal from './GalleryModal';
import useGallery from '../hooks/useGallery';

const CommercialPage = () => {
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

  // Updated categories with slugs for folder mapping
  const commercialCategories = [
    { id: 'hip-structures', name: 'Hip Structures', slug: 'hip-structures', icon: Building },
    { id: 'car-washes', name: 'Car Washes', slug: 'car-washes', icon: Droplets },
    { id: 'shade-sails', name: 'Shade Sails', slug: 'shade-sails', icon: Building2 },
    { id: 'restaurant', name: 'Restaurant Patios', slug: 'restaurant-patios', icon: Building },
    { id: 'retail', name: 'Retail & Storefront', slug: 'retail-storefront', icon: Briefcase },
    { id: 'shade-materials', name: 'Shade Materials', slug: 'shade-materials', icon: Briefcase }, // Changed to lowercase with hyphen
  ];

  // Updated with real images for featured sections
  const commercialFeatures = {
    'all': {
      title: "Complete Commercial Solutions",
      description: "Awning and Shades by Abe provides comprehensive shade solutions for all types of commercial properties. From restaurants and retail stores to car washes and large commercial complexes, we deliver custom-engineered shade systems that enhance your business environment.",
      features: [
        "Full range of commercial shade solutions",
        "Custom engineering for any business type",
        "Professional design and installation services",
        "Long-term warranties and maintenance support",
      ],
      image: "/images/portfolio/commercial/allcommericial.png"
    },
    'hip-structures': {
      title: "Engineered Hip Structures",
      description: "Our custom-designed hip structures provide maximum shade coverage with architectural appeal, ideal for entrances, walkways, and outdoor gathering spaces at commercial properties.",
      features: [
        "Engineered for Arizona's high wind and UV conditions",
        "Custom sizes from 10' x 10' to 30' x 100'",
        "Powder-coated steel frames with 20-year warranty",
        "Various fabric options with 10-15 year lifespan",
      ],
      image: "/images/portfolio/commercial/hip-structures/HS2.jpg"
    },
    'car-washes': {
      title: "Car Wash Shade Solutions",
      description: "Purpose-built shade systems for car wash facilities that protect customers and vehicles while enhancing your business aesthetics and customer experience.",
      features: [
        "Corrosion-resistant materials designed for wet environments",
        "Integrated drainage systems",
        "Custom branding opportunities",
        "Designed for vacuum stations, waiting areas, and washing bays",
      ],
      image: "/images/portfolio/commercial/car-washes/CW4.jpg"
    },
    'shade-sails': {
      title: "Commercial Shade Sails",
      description: "Create stunning visual appeal while providing functional shade with our custom-engineered commercial shade sail installations for plazas, courtyards, and outdoor spaces.",
      features: [
        "Computer-engineered for optimal tension and performance",
        "High-density polyethylene fabrics with 10-15 year warranty",
        "Wind-rated up to 90mph when properly engineered",
        "Virtually unlimited design configurations and color options",
      ],
      image: "/images/portfolio/commercial/shade-sails/SS1.jpg"
    },
    'restaurant': {
      title: "Restaurant Patio Solutions",
      description: "Extend your seating capacity and create comfortable outdoor dining experiences year-round with our custom restaurant patio shade and enclosure systems.",
      features: [
        "Retractable roof systems for versatility",
        "Optional side enclosures for weather protection",
        "Integrated heating, lighting, and fan systems",
        "Custom designs that complement your restaurant's aesthetic",
      ],
      image: "/images/portfolio/commercial/restaurant-patios/RP1.jpg"
    },
    'retail': {
      title: "Retail & Storefront Awnings",
      description: "Enhance your brand presence and protect your customers with custom-designed storefront awnings and entryway shade solutions.",
      features: [
        "Custom branding and graphics integration",
        "Illuminated options for 24-hour visibility",
        "Weather-resistant fabrics in hundreds of color options",
        "Retractable or fixed design options",
      ],
      image: "/images/portfolio/commercial/retail-storefront/1.jpg"
    },
    'shade-materials': { // Changed from 'Shade Materials' to 'shade-materials'
      title: "Commercial Grade Shade Fabrics",
      description: "We use only the best in the industry—Commercial 95 and Monotec 340 series shade fabrics. These are engineered specifically for extreme heat, UV resistance, and long-term performance in harsh environments like Arizona. Trusted for commercial, municipal, and industrial shade structures across the country, they represent the standard for quality and durability. Whether you're covering a playground, walkway, or outdoor seating area, we've got you covered. Don't see the exact fabric you need? Contact us—we provide a wide variety of shade cloths and custom options to meet any project need.",
      features: [
        "Monotec 340: 100% monofilament HDPE, no tape yarns—maximum strength, minimal stretch",
        "Commercial 95: Up to 95% UV block, breathable HDPE for cooler shaded areas",
        "Fire-rated, mold-resistant, and engineered to withstand years of sun and wind",
        "10-year fabric warranties and proven performance in extreme climates"
      ],
      image: "/images/portfolio/colors.png"
    }
 };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white overflow-hidden">
      {/* Hero Section - Dramatic, full-screen with premium commercial imagery */}
      <div className="relative h-[80vh] flex items-center overflow-hidden">
        {/* Background - Would be replaced with actual commercial image */}
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
              <span className="text-amber-400">Commercial</span> Shade Solutions
            </h1>
            <p className="text-xl md:text-2xl font-extralight text-gray-100 mb-10 max-w-2xl">
              Engineered shade systems that elevate your business environment while delivering long-term performance and value.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#featured" className="group bg-amber-500 hover:bg-amber-600 text-white font-light py-3 px-8 rounded-sm inline-flex items-center transition-all duration-300">
                Explore Commercial Projects
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
            {commercialCategories.map(category => (
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
                    src={commercialFeatures[activeSection]?.image || commercialFeatures['all'].image} 
                    alt={commercialFeatures[activeSection]?.title || commercialFeatures['all'].title} 
                    className="object-cover h-full w-full" 
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-amber-500 p-6 rounded-lg shadow-xl">
                  <Building2 className="text-white" size={32} />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-amber-500 font-semibold tracking-wider">COMMERCIAL EXCELLENCE</span>
              <h3 className="text-3xl font-light text-blue-900 mt-2 mb-6">
                {commercialFeatures[activeSection]?.title || commercialFeatures['all'].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {commercialFeatures[activeSection]?.description || commercialFeatures['all'].description}
              </p>
              <ul className="space-y-3 mb-8">
                {(commercialFeatures[activeSection]?.features || commercialFeatures['all'].features).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-blue-900" size={16} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => {
                  if (activeSection === 'all') {
                    openGallery('commercial', 'all', 'All Commercial Projects');
                  } else {
                    const category = commercialCategories.find(c => c.id === activeSection);
                    if (category) {
                      openGallery('commercial', category.slug, category.name);
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
              <p className="text-gray-600 max-w-xl">Explore our portfolio of commercial shade solutions by category.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hip Structures */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('commercial', 'hip-structures', 'Hip Structures')}
              onMouseEnter={() => setHoverProject('hip-structures')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/commercial/hip-structures/HS2.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Hip Structures</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'hip-structures' ? 'opacity-100' : 'opacity-0'}`}>
                  Engineered canopies for maximum coverage
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'hip-structures' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Car Washes */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('commercial', 'car-washes', 'Car Washes')}
              onMouseEnter={() => setHoverProject('car-washes')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/commercial/car-washes/CW4.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Car Washes</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'car-washes' ? 'opacity-100' : 'opacity-0'}`}>
                  Durable shade solutions for car wash facilities
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'car-washes' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Shade Sails */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('commercial', 'shade-sails', 'Shade Sails')}
              onMouseEnter={() => setHoverProject('shade-sails')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/commercial/shade-sails/SS1.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Shade Sails</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'shade-sails' ? 'opacity-100' : 'opacity-0'}`}>
                  Architectural fabric designs for modern spaces
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'shade-sails' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Restaurant Patios */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('commercial', 'restaurant-patios', 'Restaurant Patios')}
              onMouseEnter={() => setHoverProject('restaurant-patios')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/commercial/restaurant-patios/RP1.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Restaurant Patios</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'restaurant-patios' ? 'opacity-100' : 'opacity-0'}`}>
                  Expand dining capacity with outdoor comfort
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'restaurant-patios' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* Retail & Storefront */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('commercial', 'retail-storefront', 'Retail & Storefront')}
              onMouseEnter={() => setHoverProject('retail-storefront')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{backgroundImage: `url(/images/portfolio/commercial/retail-storefront/1.jpg)`}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2">Retail & Storefront</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'retail-storefront' ? 'opacity-100' : 'opacity-0'}`}>
                  Eye-catching awnings with brand integration
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'retail-storefront' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  View Gallery <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </div>

            {/* All Commercial Projects */}
            <div 
              className="relative overflow-hidden group h-80 cursor-pointer rounded-lg shadow-lg"
              onClick={() => openGallery('commercial', 'all', 'All Commercial Projects')}
              onMouseEnter={() => setHoverProject('all-commercial')}
              onMouseLeave={() => setHoverProject(null)}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"
              ></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
                <div className="bg-amber-500 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="text-white" size={36} />
                </div>
                <h3 className="text-white text-2xl font-light mb-2">View All Projects</h3>
                <p className={`text-white/70 transition-all duration-300 ${hoverProject === 'all-commercial' ? 'opacity-100' : 'opacity-80'}`}>
                  Browse our complete commercial portfolio
                </p>
                <div 
                  className={`mt-4 text-white inline-flex items-center transition-all duration-300 ${hoverProject === 'all-commercial' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
            <h2 className="text-4xl font-light mb-4">The <span className="text-amber-400">Abe</span> Commercial Advantage</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Our commercial shade solutions deliver the perfect blend of aesthetics, performance, and return on investment.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center text-blue-900 mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Engineering Excellence</h3>
              <p className="text-white/70">Every commercial project is custom-designed by structural engineers to meet or exceed local building codes and wind requirements.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center text-blue-900 mb-6">
                <Factory className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Commercial-Grade Materials</h3>
              <p className="text-white/70">We use only premium, commercial-grade materials designed for Arizona's climate, with warranties up to 10 years on structural components.</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center text-blue-900 mb-6">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">ROI-Focused Solutions</h3>
              <p className="text-white/70">Our solutions deliver tangible business benefits—expanded usable space, reduced energy costs, enhanced customer experience, and increased property value.</p>
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
                <h3 className="text-3xl font-light text-blue-900 mb-6">Ready for a <span className="text-amber-500">Commercial Consultation</span>?</h3>
                <p className="text-gray-600 mb-8">Schedule a site visit with our commercial shade experts. We'll assess your needs and develop a custom solution for your business.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-blue-900" size={16} />
                    </div>
                    <span className="text-gray-700">Complimentary on-site assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-blue-900" size={16} />
                    </div>
                    <span className="text-gray-700">3D renderings of proposed solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-blue-900" size={16} />
                    </div>
                    <span className="text-gray-700">Detailed proposals with transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <Check className="text-blue-900" size={16} />
                    </div>
                    <span className="text-gray-700">Project management from design to installation</span>
                  </li>
                </ul>
                <a 
                  href="/#quote" 
                  className="inline-flex items-center bg-amber-500 text-white px-8 py-3 rounded-sm hover:bg-amber-600 transition-colors group"
                >
                  Request Commercial Consultation
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="md:w-1/2 bg-blue-900 p-12 text-white hidden md:block">
                <div className="h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <img 
                      src="/images/portfolio/commercial/hip-structures/HS2.jpg" 
                      alt="Commercial shade solution" 
                      className="object-cover rounded-lg h-full w-full" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-2xl font-light mb-4">"The shade solution that Abe designed has dramatically increased our customer comfort and dwell time."</p>
                      <p className="text-white/80 italic">— The Village at Sun Valley Apartments, Mesa</p>
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
            <a href="/residential" className="group block relative overflow-hidden h-80 rounded-lg">
              <div className="absolute inset-0 bg-blue-900">
                <img 
                  src="/images/portfolio/residential/residential.png" 
                  alt="Residential shade solutions" 
                  className="object-cover h-full w-full opacity-80 group-hover:opacity-60 transition-opacity" 
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-light text-white mb-2">Residential Solutions</h3>
                  <p className="text-white/80 mb-4">Discover our custom shade solutions for homes and residential properties.</p>
                  <span className="text-amber-400 inline-flex items-center font-medium group-hover:underline">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </a>
            
            <a href="/#quote" className="group block relative overflow-hidden h-80 rounded-lg">
              <div className="absolute inset-0 bg-blue-900">
                <img 
                  src="/images/portfolio/commercial/shade-sails/SS1.jpg" 
                  alt="Custom design process" 
                  className="object-cover h-full w-full opacity-80 group-hover:opacity-60 transition-opacity" 
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-light text-white mb-2">Get Started Today</h3>
                  <p className="text-white/80 mb-4">Ready to transform your commercial space? Request a consultation now.</p>
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

export default CommercialPage;