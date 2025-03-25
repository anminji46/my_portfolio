import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import me from '../images/me.png';
import focusEffect from '../images/focusEffect4.png';

import './About.scss';


const About = () => {
  const aboutRef = useRef(null);
  const params = useParams();
  console.log(params)

  useEffect(()=>{
      if(params.userpath === 'about') {
        aboutRef.current?.scrollIntoView({behavior : "instant"})
      }
    }, [params.userpath])

const txt = "항상 성장하고 책임감있는\n프론트엔드 개발자가 되고싶은 안민지입니다.";
const [text, setText] = useState('');
const [count, setCount] = useState(0);

useEffect(() => {
  const interval = setInterval(()=>{
    setText(text + txt[count]);
    setCount(count+1);
  }, 100);
  if(count === txt.length) {
    clearInterval(interval);
  }
  return () => clearInterval(interval)
})

  return (
    <div className={'About'} id='About' ref={aboutRef}>
      <h1>- 제1장 : Hi, I'm Anminji!! -</h1>
      <div className='container'>
        <img className='focusEffect' src={focusEffect} alt="focus_effect" />
        <img className='me' src={me} alt="anminji"/>
        <div>
          <p className='text'>
            <span>안녕하세요!!</span><br/>
            <pre>
              {text}
            </pre>
            <span className='cursor'></span>
          </p>
          <div className='info'>
            <p><span>brith</span>98.04.06.</p>
            <p><span>location</span>대전광역시 중구</p>
            <p><span>education</span>대전세잔직업전문학교:한 번에 끝내는 프론트엔드 개발자</p>
            <p><span>phone</span><a href="sms:01040040636">010-4004-0636</a></p>
            <p><span>email</span><a href="mailto:dksdksalswl@naver.com">dksdksalswl@naver.com</a></p>
            <p><span>GitHub</span><a href="https://github.com/anminji46">github.com/anminji46</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
