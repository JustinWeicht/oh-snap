import React from 'react';
import LogoImage from '../../assets/cover/jw-name.png';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Resume from '../../assets/cover/Justin-Weicht.pdf';
import { VscEmptyWindow } from 'react-icons/vsc';

function Nav(props) {
  const {
    categories = [],
    currentCategory,
    setCurrentCategory,
    contactSelected,
    setContactSelected,
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
          <li className="mx-1">
            <span>
              <a href={Resume} rel="noreferrer" target="_blank">Resume</a>
            </span>
          </li>
          <li>
            <span>
              <a href={Resume} rel="noreferrer" target="_blank"><VscEmptyWindow /></a>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
