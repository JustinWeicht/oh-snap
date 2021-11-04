import React, { useEffect } from 'react';
import LogoImage from '../../assets/cover/jw-name.png';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
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
    <header className="flex-row space-between">
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
      <ul className="flex-row">
        <li className="mx-1">
          <a className="icon" href="https://instagram.com/jweicht92" rel="noreferrer" target="_blank"><FaInstagram /></a>
        </li>
        <li className="mx-1">
          <a className="icon" href="https://linkedin.com/in/justin-weicht-4a476684/" rel="noreferrer" target="_blank"><FaLinkedinIn /></a>
        </li>
        <li className="mx-1">
          <a className="icon" href="https://github.com.JustinWeicht" rel="noreferrer" target="_blank"><FaGithub /></a>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
