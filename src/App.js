import React  from 'react';
import Main from './pages/Main.js';

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Container from './pages/Container.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/projects/Projects.js';
import Design from './components/Design/Design.js';
import Contact from './components/Contact.js';
import ScrollToMove from './components/ScrollToMove.js';




const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/container' element={<Container />} />
        <Route path='/container' element={<About />} />
        <Route path='/container' element={<Skills />} />
        <Route path='/container' element={<Projects />} />
        <Route path='/container' element={<Design />} />
        <Route path='/container' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
