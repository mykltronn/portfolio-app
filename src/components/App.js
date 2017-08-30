import React from 'react';
import Layout from './Layout/Layout.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Contact from './Contact/Contact.js';

const App = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default App;
