import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Airplane',
      category: 'work',
      description: 'Bardic'
    },
    {
      name: 'Books',
      category: 'work',
      description: 'Booklyst'
    },
    {
      name: 'Food',
      category: 'work',
      description: 'Nutriquotient'
    },
    {
      name: 'Money',
      category: 'work',
      description: 'Budget Tracker'
    },
    {
      name: 'Blog',
      category: 'work',
      description: 'Tech Blog'
    },
    {
      name: 'Pizza',
      category: 'work',
      description: 'Pizza Hunt'
    },
    {
      name: 'Checklist',
      category: 'work',
      description: 'Taskmaster Pro'
    },
    {
      name: 'Runners',
      category: 'work',
      description: 'Run Buddy'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
