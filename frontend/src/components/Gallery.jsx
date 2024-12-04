import React, { useState } from 'react';
import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    title: 'Paris, France',
    description: 'The iconic Eiffel Tower at sunset'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
    title: 'Venice, Italy',
    description: 'Romantic canals and historic architecture'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd',
    title: 'Tokyo, Japan',
    description: 'Vibrant city lights and culture'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1549144511-f099e773c147',
    title: 'Sydney, Australia',
    description: 'Stunning harbor and opera house'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    title: 'Dubai, UAE',
    description: 'Modern architecture and luxury'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be',
    title: 'London,UK',
    description: 'Crystal clear waters and overwater villas'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1525874684015-58379d421a52',
    title: 'New York, USA',
    description: 'The city that never sleeps'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
    title: 'Amsterdam, Netherlands',
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