import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PJSwiper from './PJSwiper';

import './Projects.scss';

const Projects = () => {
  const projectsRef = useRef(null);
  const params = useParams();

  useEffect(()=>{
      if(params.userpath === 'projects') {
        projectsRef.current?.scrollIntoView({behavior : "instant"})
      }
    }, [params.userpath])

  return (
    <div className='Projects' id='Projects' ref={projectsRef}>
      <h1>- 제3-1장 : This is myProject -</h1>
      <div className='container'>
        <PJSwiper />
      </div>
    </div>
  )
}

export default Projects;
