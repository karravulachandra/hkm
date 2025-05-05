# Deity Images for Hare Krishna Cultural Centre - Guntur Website

This document provides instructions for downloading and implementing deity images for the website.

## Required Deity Images

Please download the following deity images from ISKCON Bangalore's website or other reputable ISKCON sources:

1. **Lord Krishna** - The Supreme Personality of Godhead
2. **Srimati Radharani** - The embodiment of divine love and devotion
3. **Lord Venkateshwara** - The Lord of Seven Hills
4. **Prahalada Maharaja** - The great devotee of Lord Narasimha
5. **Srila Prabhupada** - Founder-Acharya of ISKCON
6. **Lord Chaitanya Mahaprabhu** - The golden avatar of Lord Krishna

## Image Placement Instructions

After downloading the images, place them in the following directory:
```
src/assets/images/deities/
```

Use the following naming convention:
- krishna.jpg
- radha.jpg
- venkateshwara.jpg
- prahalada.jpg
- srila_prabhupada.jpg
- chaitanya_mahaprabhu.jpg

## Implementation in Components

The following components have been prepared to use these images:

### 1. Hero Component
The Hero component has a background carousel that will display deity images. Update the `backgroundImages` array in `src/components/Hero.jsx`:

```jsx
const backgroundImages = [
  { id: 1, url: 'src/assets/images/deities/krishna.jpg', alt: 'Lord Krishna' },
  { id: 2, url: 'src/assets/images/deities/radha.jpg', alt: 'Srimati Radharani' },
  { id: 3, url: 'src/assets/images/deities/venkateshwara.jpg', alt: 'Lord Venkateshwara' },
  { id: 4, url: 'src/assets/images/deities/srila_prabhupada.jpg', alt: 'Srila Prabhupada' }
];
```

Then update the carousel slide in the JSX:
```jsx
<div className="carousel-image" style={{ backgroundImage: `url(${image.url})` }}>
</div>
```

### 2. About Component
The About component has a placeholder for Srila Prabhupada's image. Replace the placeholder with:

```jsx
<div className="image-frame">
  <img src="src/assets/images/deities/srila_prabhupada.jpg" alt="Srila Prabhupada" />
  <div className="image-caption">
    His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
    <span>Founder-Acharya of the International Society for Krishna Consciousness</span>
  </div>
</div>
```

### 3. Gallery Component
The Gallery component has placeholders for all deity images. Update the `deityImages` array in `src/components/Gallery.jsx`:

```jsx
const deityImages = [
  {
    id: 1,
    url: 'src/assets/images/deities/krishna.jpg',
    alt: 'Lord Krishna',
    title: 'Lord Krishna',
    description: 'The Supreme Personality of Godhead'
  },
  {
    id: 2,
    url: 'src/assets/images/deities/radha.jpg',
    alt: 'Srimati Radharani',
    title: 'Srimati Radharani',
    description: 'The embodiment of divine love and devotion'
  },
  {
    id: 3,
    url: 'src/assets/images/deities/venkateshwara.jpg',
    alt: 'Lord Venkateshwara',
    title: 'Lord Venkateshwara',
    description: 'The Lord of Seven Hills'
  },
  {
    id: 4,
    url: 'src/assets/images/deities/prahalada.jpg',
    alt: 'Prahalada Maharaja',
    title: 'Prahalada Maharaja',
    description: 'The great devotee of Lord Narasimha'
  },
  {
    id: 5,
    url: 'src/assets/images/deities/srila_prabhupada.jpg',
    alt: 'Srila Prabhupada',
    title: 'Srila Prabhupada',
    description: 'Founder-Acharya of ISKCON'
  },
  {
    id: 6,
    url: 'src/assets/images/deities/chaitanya_mahaprabhu.jpg',
    alt: 'Lord Chaitanya Mahaprabhu',
    title: 'Lord Chaitanya Mahaprabhu',
    description: 'The golden avatar of Lord Krishna'
  }
];
```

Then update the gallery item in the JSX:
```jsx
<div className="gallery-image-container">
  <img src={image.url} alt={image.alt} className="gallery-image" />
</div>
```

## Image Optimization

For optimal website performance, please ensure that:
1. Images are compressed to reduce file size (use tools like TinyPNG)
2. Images are in JPG or WebP format for photos
3. Image dimensions are appropriate (recommended: 1200px max width)
4. File sizes are kept under 300KB per image

## Recommended Sources for Images

1. ISKCON Bangalore Official Website: https://www.iskconbangalore.org/
2. ISKCON Desire Tree: https://www.iskcondesiretree.com/
3. ISKCON Photos: https://www.iskconphotos.com/
4. Bhaktivedanta Book Trust: https://bbt.org/
