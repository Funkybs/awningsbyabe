// scripts/generateImageList.js
const fs = require('fs');
const path = require('path');

function getImagesFromFolder(folderPath) {
  const fullPath = path.join(process.cwd(), 'public', folderPath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`Folder not found: ${fullPath}`);
    return [];
  }
  
  const files = fs.readdirSync(fullPath);
  const images = files
    .filter(file => {
      // Filter for image files only
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    })
    .map(file => ({
      src: `/${folderPath}/${file}`,
      name: file.split('.')[0].replace(/[-_]/g, ' '), // Convert filename to readable name
      category: folderPath.split('/').pop() // Get the category from folder name
    }));
  
  return images;
}

function generateImageList() {
  const portfolioData = {
    residential: {},
    commercial: {},
    all: []
  };

  // Residential categories
  const residentialCategories = [
    'patio-covers',
    'pergolas',
    'carports',
    'pool-shading',
    'shade-sails',
    'recreational-areas',
    'backyard-solutions',
    'window-shades',
    'retractable-awnings',
    'motorized-systems',
    'custom-designs'
  ];

  // Commercial categories
  const commercialCategories = [
    'hip-structures',
    'car-washes',
    'shade-sails',
    'restaurant-patios',
    'retail-storefront',
    'awnings',
    'canopies',
    'cabanas',
    'large-structures',
    'custom-commercial',
    'building-facades',
    'walkway-covers'
  ];

  // Process residential images
  residentialCategories.forEach(category => {
    const images = getImagesFromFolder(`images/portfolio/residential/${category}`);
    portfolioData.residential[category] = images;
    portfolioData.all = [...portfolioData.all, ...images];
    console.log(`Found ${images.length} images in residential/${category}`);
  });

  // Process commercial images
  commercialCategories.forEach(category => {
    const images = getImagesFromFolder(`images/portfolio/commercial/${category}`);
    portfolioData.commercial[category] = images;
    portfolioData.all = [...portfolioData.all, ...images];
    console.log(`Found ${images.length} images in commercial/${category}`);
  });

  // Write the data to a JSON file
  const outputPath = path.join(process.cwd(), 'public', 'portfolio-images.json');
  fs.writeFileSync(outputPath, JSON.stringify(portfolioData, null, 2));
  
  console.log(`\n✅ Successfully generated portfolio-images.json with ${portfolioData.all.length} total images`);
  console.log(`📁 Output saved to: ${outputPath}`);
}

// Run the script
generateImageList();