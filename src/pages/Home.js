import React, { useEffect, useState } from 'react';
import Header from '../components/Header.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import Projects from '../components/projects/Projects.js';
import Design from '../components/Design/Design.js';
import Contact from '../components/Contact.js';

import './Home.scss';

function Home() {
    const [showButton, setShowButton] = useState(false);
    const scrollToTop = () => {
      window.scroll({
        top:0,
        behavior:'smooth'
      })
    }
    useEffect(()=>{
      const handleShowButton = () => {
        if (window.scrollY > 300) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      }
      window.addEventListener("scroll", handleShowButton)
      return () => {
        window.removeEventListener("scroll",handleShowButton)
      }
    }, []);
  return (
    <div className='Home'>
      <header>
        <Header />
      </header>
      <div className='container'>
        <About />
        <Skills />
        <Projects />
        <Design />
        <Contact />
      </div>
      {showButton && (
        <div className='scroll-Top'>
          <button onClick={scrollToTop}>TOP</button>
        </div>
      )}
    </div>
  )
}

export default Home;
