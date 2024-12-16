import React, { useState } from 'react';
import './Gallery.css';

import img from '../images/photo-1502602898657-3e91760cbb34.jpg'
import img2 from '../images/photo-1523906834658-6e24ef2386f9.jpg'
import img3 from '../images/photo-1513581166391-887a96ddeafd.jpg'
import img4 from '../images/photo-1549144511-f099e773c147.jpg'
import img5 from '../images/photo-1512453979798-5ea266f8880c.jpg'
import img6 from '../images/photo-1533929736458-ca588d08c8be.jpg'
import img7 from '../images/photo-1525874684015-58379d421a52.jpg'
import img8 from '../images/photo-1518548419970-58e3b4079ab2.jpg'

const galleryImages = [
  {
    id: 1,
    url: img,
    title: 'Paris, France',
    description: 'The iconic Eiffel Tower at sunset'
  },
  {
    id: 2,
    url: img2,
    title: 'Venice, Italy',
    description: 'Romantic canals and historic architecture'
  },
  {
    id: 3,
    url: img3,
    title: 'The Saint,Italy',
    description: 'Vibrant city lights and culture'
  },
  {
    id: 4,
    url: img4,
    title: 'Paris, France',
    description: 'Stunning harbor and opera house'
  },
  {
    id: 5,
    url: img5,
    title: 'Dubai, UAE',
    description: 'Modern architecture and luxury'
  },
  {
    id: 6,
    url: img6,
    title: 'London,UK',
    description: 'Crystal clear waters and overwater villas'
  },
  {
    id: 7,
    url: img7,
    title: 'Rome, Italy',
    description: 'The city that never sleeps'
  },
  {
    id: 8,
    url: img8,
    title: 'Tanah Lost, Indonesia',
    description: 'Historic canals and charming streets'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery">
      <div className="section-title">
        <h2>Travel Gallery</h2>
        <p>Explore our collection of stunning destinations</p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openModal(image)}
          >
            <img src={image.url} alt={image.title} loading="lazy" />
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;