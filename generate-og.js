const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// OG Image dimensions
const width = 1200;
const height = 630;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background gradient (dark blue-gray)
const gradient = ctx.createLinearGradient(0, 0, 0, height);
gradient.addColorStop(0, '#1a1f2e');
gradient.addColorStop(1, '#0d1117');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// Mountain shapes at bottom
ctx.fillStyle = '#2d3a4d';
const mountains = [
    [100, 630, 250, 400, 400, 630],
    [350, 630, 500, 350, 650, 630],
    [600, 630, 750, 380, 900, 630],
    [850, 630, 1000, 320, 1150, 630],
];
mountains.forEach(m => {
    ctx.beginPath();
    ctx.moveTo(m[0], m[1]);
    ctx.lineTo(m[2], m[3]);
    ctx.lineTo(m[4], m[5]);
    ctx.closePath();
    ctx.fill();
});

// Decorative circles (boulders/holds)
const circles = [
    { x: 900, y: 150, r: 35, color: '#3d4a5c' },
    { x: 1050, y: 220, r: 25, color: '#3d4a5c' },
    { x: 180, y: 450, r: 20, color: '#3d4a5c' },
    { x: 750, y: 280, r: 18, color: '#3d4a5c' },
];
circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
});

// Danish flag in top right corner (with padding)
const flagX = width - 120;
const flagY = 50;
const flagW = 70;
const flagH = 45;

// Red background
ctx.fillStyle = '#c8102e';
ctx.fillRect(flagX, flagY, flagW, flagH);

// White cross
ctx.fillStyle = '#ffffff';
ctx.fillRect(flagX + 20, flagY, 8, flagH); // Vertical
ctx.fillRect(flagX, flagY + 18, flagW, 8); // Horizontal

// Climber icon (simplified stick figure)
ctx.strokeStyle = '#e54b4b';
ctx.fillStyle = '#e54b4b';
ctx.lineWidth = 6;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// Frame/box around climber
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 4;
ctx.strokeRect(90, 140, 100, 130);

// Climber body
ctx.strokeStyle = '#e54b4b';
ctx.lineWidth = 8;

// Head
ctx.beginPath();
ctx.arc(140, 175, 18, 0, Math.PI * 2);
ctx.stroke();

// Body
ctx.beginPath();
ctx.moveTo(140, 193);
ctx.lineTo(135, 240);
ctx.stroke();

// Arms (reaching up and to side)
ctx.beginPath();
ctx.moveTo(135, 205);
ctx.lineTo(100, 175);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(135, 210);
ctx.lineTo(175, 200);
ctx.stroke();

// Legs
ctx.beginPath();
ctx.moveTo(135, 240);
ctx.lineTo(110, 285);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(135, 240);
ctx.lineTo(165, 275);
ctx.stroke();

// Main title with good padding
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 85px Inter, Arial, sans-serif';
ctx.textBaseline = 'middle';
ctx.fillText('Bouldering Lingo', 210, 210);

// Subtitle
ctx.fillStyle = '#a8b2c1';
ctx.font = 'italic 38px Inter, Arial, sans-serif';
ctx.fillText('Lær klatretermer med flashcards', 220, 300);

// Badge/pill with term count
const badgeText = '110+ klatretermer';
ctx.font = 'bold 28px Inter, Arial, sans-serif';
const badgeWidth = ctx.measureText(badgeText).width + 50;
const badgeX = 220;
const badgeY = 365;
const badgeH = 55;

// Badge background
ctx.beginPath();
ctx.roundRect(badgeX, badgeY, badgeWidth, badgeH, 27);
ctx.fillStyle = '#e54b4b';
ctx.fill();

// Badge text
ctx.fillStyle = '#ffffff';
ctx.textBaseline = 'middle';
ctx.fillText(badgeText, badgeX + 25, badgeY + badgeH/2);

// URL at bottom
ctx.fillStyle = '#6b7a8f';
ctx.font = '24px Inter, Arial, sans-serif';
ctx.textBaseline = 'bottom';
ctx.fillText('boulder.holstjensen.nu', width/2 - 100, height - 40);

// Save image
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(__dirname, 'images', 'og-image.png'), buffer);
console.log('OG image generated: images/og-image.png');
console.log('Dimensions:', width, 'x', height);
