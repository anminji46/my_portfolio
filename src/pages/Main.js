import React from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../images/Thumbnail.png';
import about from '../images/about_thumbnail_02.jpg'
import skills from '../images/skills_thumbnail.jpg'
import project from '../images/project_thumbnail.jpg'
import design from '../images/design_thumbnail.jpg'
import contact from '../images/contact_thumbnail.jpg'

import './Main.scss';
import Menu from '../components/Menu';

function Main() {


  return (
    <div className='Main'>
      <div className='inner'>
        <div className='title'>
          <div className='thumbnail'>
            <Link to="/home"><img src={Thumbnail} alt='Thumbnail' /></Link>
          </div>
          <div className='text'>
            <h1>ANIMNJI's Portfolio</h1>
            <div className='info'>
              <p><span>제작 /</span> 안민지</p>
              <p>전체이용가</p>
            </div>
            <p className='greetings'>
              안녕하세요. 안민지입니다.<br />
              처음 도전해보는 분야이며 최선을 다해 만든 포트폴리오입니다.<br />
              <span>전부 <span>react</span>로 작업했습니다.</span><br/>
              많이 부족하겠지만 예쁘게 봐주세요. 감사합니다!<br/>
            </p>
            <div className='hash'>
              <span>#REACT</span>
              <span>#VScode</span>
              <span>#Photoshop</span>
            </div>
            <div className='ref'>
            목차를 눌렀을때 이동은 구현중입니다.<br/>
            👈썸네일과 바로가기 버튼👇을 이용하여 들어가시면 됩니다!
            </div>
          </div>
        </div>
        <div className='link'>
          <Menu />
        </div>
        <div className='list'>
          <ul>
            <li>
              <div className='list-thumbnail' style={{backgroundImage:`url(${about})`}}></div>
              <p>제1장 : Hi, I'm Anminji!</p>
            </li>
            <li>
            <div className='list-thumbnail' style={{backgroundImage:`url(${skills})`}}></div>
              <p>제2장 : My Skills is...</p>
            </li>
            <li>
              <div className='list-thumbnail' style={{backgroundImage:`url(${project})`}}></div>
              <p>제3장 : This is myProject</p>
            </li>
            <li>
              <div className='list-thumbnail' style={{backgroundImage:`url(${design})`}}></div>
              <p>제4장 : This is myDesign</p>
            </li>
            <li>
              <div className='list-thumbnail' style={{backgroundImage:`url(${contact})`}}></div>
              <p>제5장 : Please Contact me :)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main;
