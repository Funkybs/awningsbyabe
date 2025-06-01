// src/components/GalleryModal.jsx
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Grid3x3 } from 'lucide-react';

const GalleryModal = ({ isOpen, onClose, category, images = [], categoryTitle }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'lightbox'

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (viewMode === 'lightbox') {
          setViewMode('grid');
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, viewMode]);

  // Navigate images in lightbox mode
  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.src === selectedImage.src);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(images[newIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyNav = (e) => {
      if (viewMode === 'lightbox') {
        if (e.key === 'ArrowRight') navigateImage('next');
        if (e.key === 'ArrowLeft') navigateImage('prev');
      }
    };

    document.addEventListener('keydown', handleKeyNav);
    return () => document.removeEventListener('keydown', handleKeyNav);
  }, [viewMode, selectedImage, images]);

  if (!isOpen) return null;

  // Debug logging
  console.log('Gallery Modal - Images:', images);
  console.log('Gallery Modal - Category:', categoryTitle);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setViewMode('lightbox');
  };

  const closeLightbox = () => {
    setViewMode('grid');
    setSelectedImage(null);
  };

  return (
    <>
      {/* Main Modal Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={viewMode === 'grid' ? onClose : closeLightbox}
      >
        {/* Modal Container */}
        <div 
          className={`fixed inset-4 md:inset-8 lg:inset-12 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
            viewMode === 'lightbox' ? 'bg-black' : ''
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 ${
            viewMode === 'lightbox' ? 'bg-black/90 border-gray-800' : ''
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className={`text-2xl font-light ${
                  viewMode === 'lightbox' ? 'text-white' : 'text-blue-900'
                }`}>
                  {categoryTitle} <span className="text-amber-500">Gallery</span>
                </h2>
                <p className={`text-sm mt-1 ${
                  viewMode === 'lightbox' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {images.length} projects in this category
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {viewMode === 'lightbox' && (
                  <button
                    onClick={closeLightbox}
                    className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                    title="Back to grid"
                  >
                    <Grid3x3 size={20} />
                  </button>
                )}
                <button
                  onClick={viewMode === 'lightbox' ? closeLightbox : onClose}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'lightbox' 
                      ? 'bg-white/10 text-white hover:bg-white/20' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`h-full overflow-auto ${viewMode === 'lightbox' ? 'bg-black' : 'bg-gray-50'}`}>
            {viewMode === 'grid' ? (
              // Grid View
              <div className="p-6">
                {images.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">No images available in this category yet.</p>
                    <p className="text-gray-400 mt-2">Check back soon for updates!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => {
                      console.log('Rendering image:', image.src); // Debug log
                      return (
                        <div
                          key={`${image.src}-${index}`}
                          className="relative cursor-pointer"
                          onClick={() => openLightbox(image)}
                        >
                          <img
                            src={image.src}
                            alt={image.name}
                            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                            onError={(e) => {
                              console.error('Image failed to load:', image.src);
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              // Lightbox View
              <div className="relative h-full flex items-center justify-center p-4">
                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                  title="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                  title="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Display */}
                {selectedImage && (
                  <div className="max-w-full max-h-full flex flex-col items-center">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.name}
                      className="max-w-full max-h-[calc(100vh-200px)] object-contain"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/800x600/083344/white?text=Image+Coming+Soon';
                      }}
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                      <h3 className="text-white text-xl font-medium capitalize mb-2">{selectedImage.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {images.findIndex(img => img.src === selectedImage.src) + 1} of {images.length}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryModal;