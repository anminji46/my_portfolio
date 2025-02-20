import React, { useEffect, useState } from 'react';
import Header from '../components/Header.js';
import Area from '../components/Area';
import {area} from '../data.js';

import './Container.scss';


const Container = () => {
  let [contents, setContents] = useState(area);
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
  }, [])

  return (
    <div className='Container'>
      <header>
        <Header />
      </header>
  
      {
        contents.map((data)=>{
          return <Area {...data} key={data.key} />
        })
      }
      {showButton && (
        <div className='scroll-Top'>
          <button onClick={scrollToTop}>TOP</button>
        </div>
      )}
    </div>
  )
}

export default Container;