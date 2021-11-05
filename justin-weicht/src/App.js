import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

document.title = 'Justin Weicht';

function App() {
  const [categories] = useState([
    {
      name: 'works',
      description: 'Photos and links of recent works and projects',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
    <body>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
        <About></About>
        <Gallery currentCategory={currentCategory}></Gallery>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default App;
