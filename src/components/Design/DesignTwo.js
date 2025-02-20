import React from 'react';
import './Design.scss';
import Gallery from '../../Gallery/Gallery.tsx';

import img from '../../assets/1200x250_2_e.png';
import { FaAsterisk } from "react-icons/fa6";



const Design = () => {

  return (
    <div className='Design'>
      <p><FaAsterisk /> <span>phtoshop</span>을 이용한 "배너만들기"로 주제는 대기업, 은행, 정부부처, 자유입니다.</p>
      <div className='galleryBox'>
        <Gallery />
      </div>
    </div>
  )
}

export default Design;
