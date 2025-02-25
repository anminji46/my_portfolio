import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import myEmoji from '../images/my_emoji_left.png'
import html from '../images/html3.png'
import css from '../images/css3.png'
import js from '../images/js3.png'
import jq from '../images/jQuery2.png'
import scss from '../images/scss3.png'
import vue from '../images/vue4.png'
import react from '../images/react3.png'
import node from '../images/nodejs3.png'
import Al from '../images/illustrator3.png'
import ps from '../images/photoshop4.png'
import figma from '../images/figma3.png'
import vscode from '../images/vscode2.png';
import github from '../images/github2.png';
import speechBubble from '../images/speech_bubble.png'

import './Skills.scss';

const Skills = () => {
  const skillsRef = useRef(null);
  const params = useParams();

  useEffect(()=>{
      if(params.userpath === 'skills') {
        skillsRef.current?.scrollIntoView({behavior : "instant"})
      }
    }, [params.userpath])



  return (
    <div className='Skills' id='Skills' ref={skillsRef}>
      <h1>- 제2장 : My skills is... -</h1>
      <div className='container'>
        <div className='overflow_hidden'>
          <img className='emoji' src={myEmoji} alt='right' />
          <div className='innerBox'>
            <div className='skillBox'>
              <img src={html} alt='html'/>
              <img src={css} alt='css'/>
              <img src={scss} alt='scss'/>
              <img src={js} alt='js'/>
              <img src={jq} alt='jq'/>
              <img src={vue} alt='vue'/>
              <img src={react} alt='react'/> 
              <img src={vscode} alt='vscode'/> 
              <img src={node} alt='node'/> 
              <img src={github} alt='github'/> 
              <img src={Al} alt='Al'/>
              <img src={ps} alt='ps'/>
              <img src={figma} alt='figma'/>
            </div>
          </div>
          <p>- my skills is...</p>
        </div>
        <div className='speechBox'>
          <img className='speechBubble' src={speechBubble} alt='' />
          <p>이 외에도<br/>항상 새로운것을<br/>받아드릴 준비가<br/>되어있습니다!</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;
