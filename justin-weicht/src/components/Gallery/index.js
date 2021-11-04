import React from 'react';
import PhotoList from '../PhotoList';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;
