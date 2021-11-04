import React, { useState } from 'react';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Airplane',
      category: 'work',
      description: 'Bardic',
      link: "http://bardic.herokuapp.com/"
    },
    {
      name: 'Books',
      category: 'work',
      description: 'Booklyst',
      link: "https://booklyst-project.herokuapp.com/"
    },
    {
      name: 'Food',
      category: 'work',
      description: 'Nutriquotient',
      link: "https://foodisfuel.github.io/gp5_project1/index.html"
    },
    {
      name: 'Money',
      category: 'work',
      description: 'Budget Tracker',
      link: "https://module-19-budget-tracker.herokuapp.com/"
    },
    {
      name: 'Blog',
      category: 'work',
      description: 'Tech Blog',
      link: "https://module-14-tech-blog.herokuapp.com/"
    },
    {
      name: 'Pizza',
      category: 'work',
      description: 'Pizza Hunt',
      link: "https://creepy-nightmare-85054.herokuapp.com/"
    },
    {
      name: 'Checklist',
      category: 'work',
      description: 'Taskmaster Pro',
      link: "https://justinweicht.github.io/taskmaster-pro/"
    },
    {
      name: 'Runners',
      category: 'work',
      description: 'Run Buddy',
      link: "https://JustinWeicht.github.io/run-buddy/"
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <a className="img-thumbnail" href={image.link} rel="noreferrer" target="_blank">
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`).default}
              alt={image.name}
              className=""
              key={image.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
