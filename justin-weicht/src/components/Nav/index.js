import React, { useEffect } from 'react';
import LogoImage from '../../assets/cover/jw-name.png';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row">
      <a data-testid="link" href="/">
        <img className="logo" src={LogoImage} alt='Justin Weicht' style={{ height: '80px' }} />
      </a>
      <nav>
        <ul className="flex-row-nav">
          <li className="mx-1">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About
            </a>
          </li>

          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-1 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
