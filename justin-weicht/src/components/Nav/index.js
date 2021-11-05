import React from 'react';
import LogoImage from '../../assets/cover/jw-name.png';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Resume from '../../assets/cover/Justin-Weicht.pdf';

function Nav(props) {
  const {
    categories = [],
    currentCategory,
    setCurrentCategory,
  } = props;

  return (
    <header className="flex-row">
      <a data-testid="link" href="/">
        <img className="logo" src={LogoImage} alt='Justin Weicht' style={{ height: '80px' }} />
      </a>
      <nav>
        <ul className="flex-row-nav">
          {categories.map((category) => (
            <li
              className={`mx-1 text ${
                currentCategory.name === category.name
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className="mx-1 text">
            <a href="mailto: justinweicht11@gmail.com">Email</a>
          </li>
          <li className="mx-1 text">
            <span>
              <a href={Resume} rel="noreferrer" target="_blank">Resume</a>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
