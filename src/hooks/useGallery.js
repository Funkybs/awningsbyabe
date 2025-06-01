// src/hooks/useGallery.js
import { useState, useEffect } from 'react';

const useGallery = () => {
  const [portfolioImages, setPortfolioImages] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');

  // Load the portfolio images JSON
  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch('/portfolio-images.json');
        const data = await response.json();
        setPortfolioImages(data);
      } catch (error) {
        console.error('Error loading portfolio images:', error);
      }
    };

    loadImages();
  }, []);

  // Open gallery for a specific category
  const openGallery = (type, category, title) => {
    if (!portfolioImages) return;
    
    let images = [];
    
    if (category === 'all') {
      // Get all images from the specified type (commercial or residential)
      if (type === 'commercial' && portfolioImages.commercial) {
        // Combine all commercial subcategories
        Object.keys(portfolioImages.commercial).forEach(subCategory => {
          images = [...images, ...portfolioImages.commercial[subCategory]];
        });
      } else if (type === 'residential' && portfolioImages.residential) {
        // Combine all residential subcategories
        Object.keys(portfolioImages.residential).forEach(subCategory => {
          images = [...images, ...portfolioImages.residential[subCategory]];
        });
      }
    } else {
      // Get images from specific category
      images = portfolioImages[type]?.[category] || [];
    }
    
    console.log(`Opening gallery for ${type}/${category}:`, images.length, 'images'); // Debug log
    
    setSelectedCategory(category);
    setSelectedImages(images);
    setCategoryTitle(title);
    setIsModalOpen(true);
  };

  // Close gallery
  const closeGallery = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    setSelectedImages([]);
    setCategoryTitle('');
  };

  return {
    portfolioImages,
    isModalOpen,
    selectedCategory,
    selectedImages,
    categoryTitle,
    openGallery,
    closeGallery
  };
};

export default useGallery;