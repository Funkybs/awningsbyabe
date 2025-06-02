import React, { useState, useEffect, useRef } from 'react';
import { Camera, Grid3x3, Layers, X, ChevronLeft, ChevronRight, ZoomIn, Menu, ArrowRight } from 'lucide-react';

const PortfolioPage = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [touchedIndex, setTouchedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const galleryRef = useRef(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load images from the all folder
  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch('/portfolio-images.json');
        const data = await response.json();
        
        // Get all images from both commercial and residential
        const allImages = [];
        
        // Check if there's an "all" section with all images combined
        if (data.all && Array.isArray(data.all)) {
          // Use the pre-combined "all" section
          data.all.forEach(image => {
            const imagePath = image.src;
            const isCommercial = image.category.includes('hip-structures') || 
                               image.category.includes('car-washes') || 
                               image.category.includes('shade-sails') || 
                               image.category.includes('restaurant-patios') || 
                               image.category.includes('retail-storefront') || 
                               image.category.includes('awnings') || 
                               image.category.includes('custom-commercial') || 
                               image.category.includes('building-facades') || 
                               image.category.includes('walkway-covers');
            
            allImages.push({
              src: imagePath,
              category: isCommercial ? 'commercial' : 'residential',
              subcategory: image.category,
              title: `${isCommercial ? 'Commercial' : 'Residential'} - ${image.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`
            });
          });
        } else {
          // Fallback to reading from commercial and residential sections
          // Add commercial images
          Object.entries(data.commercial || {}).forEach(([category, categoryImages]) => {
            categoryImages.forEach(image => {
              allImages.push({
                src: image.src,
                category: 'commercial',
                subcategory: category,
                title: `Commercial - ${category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`
              });
            });
          });
          
          // Add residential images
          Object.entries(data.residential || {}).forEach(([category, categoryImages]) => {
            categoryImages.forEach(image => {
              allImages.push({
                src: image.src,
                category: 'residential',
                subcategory: category,
                title: `Residential - ${category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`
              });
            });
          });
        }
        
        setImages(allImages);
        setFilteredImages(allImages);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
    
    loadImages();
  }, []);

  // Filter images
  useEffect(() => {
    if (filter === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === filter));
    }
  }, [filter, images]);

  // Image loading handler
  const handleImageLoad = (index) => {
    setImageLoadStates(prev => ({ ...prev, [index]: true }));
  };

  // Lightbox navigation
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  // Swipe detection for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) navigateLightbox('next');
    if (isRightSwipe) navigateLightbox('prev');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'ArrowRight') navigateLightbox('next');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const stats = [
    { number: images.filter(img => img.category === 'commercial').length, label: 'Commercial Projects' },
    { number: images.filter(img => img.category === 'residential').length, label: 'Residential Projects' },
    { number: '17+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-md py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" className="text-lg sm:text-xl md:text-2xl font-light text-blue-900">
                <span className="font-bold">AWNING & SHADES</span> <span className="italic hidden sm:inline">by Abe</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a href="/" className="hover:text-amber-500 font-light transition-colors text-blue-900">HOME</a>
              <a href="/commercial" className="hover:text-amber-500 font-light transition-colors text-blue-900">COMMERCIAL</a>
              <a href="/residential" className="hover:text-amber-500 font-light transition-colors text-blue-900">RESIDENTIAL</a>
              <a href="/portfolio" className="text-amber-500 font-light">PORTFOLIO</a>
              <a href="/about" className="hover:text-amber-500 font-light transition-colors text-blue-900">ABOUT</a>
              <a href="/#quote" className="bg-amber-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-sm font-light hover:bg-amber-600 transition-colors text-sm sm:text-base">GET A QUOTE</a>
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
          <div className="md:hidden bg-white p-4 sm:p-6 shadow-lg absolute w-full top-full left-0 z-50">
            <a href="/" className="block py-2 sm:py-3 text-gray-600 font-light border-b border-gray-100">HOME</a>
            <a href="/commercial" className="block py-2 sm:py-3 text-gray-600 font-light border-b border-gray-100">COMMERCIAL</a>
            <a href="/residential" className="block py-2 sm:py-3 text-gray-600 font-light border-b border-gray-100">RESIDENTIAL</a>
            <a href="/portfolio" className="block py-2 sm:py-3 text-amber-500 font-light border-b border-gray-100">PORTFOLIO</a>
            <a href="/about" className="block py-2 sm:py-3 text-gray-600 font-light">ABOUT</a>
            <a href="/#quote" className="block py-2 sm:py-3 mt-3 sm:mt-4 bg-amber-500 text-white px-4 rounded-sm font-light text-center">GET A QUOTE</a>
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] overflow-hidden bg-blue-900 pt-20">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500/20"></div>
        </div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.2}px)`
          }}></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-4 sm:mb-6 tracking-tight">
              Our <span className="text-amber-400">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light px-4 sm:px-0">
              Transforming Arizona's spaces with precision-engineered shade solutions
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Layers className="text-blue-900" size={20} />
              <span className="text-base sm:text-lg font-light text-gray-700">Filter by:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`whitespace-nowrap px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-colors ${
                  filter === 'all' 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({images.length})
              </button>
              <button
                onClick={() => setFilter('commercial')}
                className={`whitespace-nowrap px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-colors ${
                  filter === 'commercial' 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Commercial ({images.filter(img => img.category === 'commercial').length})
              </button>
              <button
                onClick={() => setFilter('residential')}
                className={`whitespace-nowrap px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-colors ${
                  filter === 'residential' 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Residential ({images.filter(img => img.category === 'residential').length})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid - Masonry Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16" ref={galleryRef}>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 sm:gap-4 space-y-2 sm:space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(index)}
              onTouchStart={() => setTouchedIndex(index)}
              onTouchEnd={() => setTimeout(() => setTouchedIndex(null), 300)}
              style={{
                opacity: imageLoadStates[index] ? 1 : 0,
                transform: imageLoadStates[index] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: `${(index % 10) * 0.05}s`
              }}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto"
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Content */}
                <div className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-300 ${
                  touchedIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <h3 className="text-white text-base sm:text-lg font-light mb-1">{image.title}</h3>
                  <p className="text-amber-400 text-xs sm:text-sm">{image.subcategory.replace(/-/g, ' ').toUpperCase()}</p>
                </div>
                
                {/* Zoom Icon */}
                <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 p-1.5 sm:p-2 rounded-full transition-all duration-300 transform scale-75 ${
                  touchedIndex === index ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 group-hover:scale-100'
                }`}>
                  <ZoomIn className="text-blue-900" size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && filteredImages[currentImageIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/80 hover:text-white transition-colors p-2 z-50"
            aria-label="Close gallery"
          >
            <X size={30} />
          </button>
          
          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={35} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={35} />
          </button>
          
          {/* Image */}
          <div 
            className="max-w-7xl max-h-[90vh] mx-auto px-4 py-16" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].title}
              className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-lg sm:text-xl font-light">{filteredImages[currentImageIndex].title}</h3>
              <p className="text-amber-400 mt-1 text-sm sm:text-base">{currentImageIndex + 1} / {filteredImages.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-blue-900 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 sm:mb-6">
            Ready to Transform Your <span className="text-amber-400">Space</span>?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8">
            Let's create something extraordinary together.
          </p>
          <a
            href="/#quote"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-sm transition-all duration-300 group"
          >
            Start Your Project
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
