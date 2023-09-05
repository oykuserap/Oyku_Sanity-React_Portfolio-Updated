import React from 'react'

import {About, Footer, Header, Skills, Work, Testimonial } from './container'; // they are exported in the index.js file in container folder
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
    </div>
  );
}

export default App;