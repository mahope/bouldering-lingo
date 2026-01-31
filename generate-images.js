const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateImages() {
  const imagesDir = path.join(__dirname, 'images');
  
  // OG Image (1200x630)
  console.log('Generating OG image...');
  await sharp(path.join(imagesDir, 'og-image.svg'))
    .resize(1200, 630)
    .png()
    .toFile(path.join(imagesDir, 'og-image.png'));
  
  // Apple Touch Icon (180x180)
  console.log('Generating Apple Touch Icon...');
  await sharp(path.join(imagesDir, 'apple-touch-icon.svg'))
    .resize(180, 180)
    .png()
    .toFile(path.join(imagesDir, 'apple-touch-icon.png'));
  
  // Favicon 32x32
  console.log('Generating favicon-32x32...');
  await sharp(path.join(imagesDir, 'favicon.svg'))
    .resize(32, 32)
    .png()
    .toFile(path.join(imagesDir, 'favicon-32x32.png'));
  
  // Favicon 16x16
  console.log('Generating favicon-16x16...');
  await sharp(path.join(imagesDir, 'favicon.svg'))
    .resize(16, 16)
    .png()
    .toFile(path.join(imagesDir, 'favicon-16x16.png'));
  
  // Favicon ICO (use 32x32 PNG as base, browsers accept PNG as favicon too)
  console.log('Copying favicon.svg for direct SVG support...');
  
  console.log('Done! All images generated.');
}

generateImages().catch(console.error);
