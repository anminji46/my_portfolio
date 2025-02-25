import React, { useEffect, useRef } from 'react';
import heart from '../images/my_emoji_heart.png';
import { TbPhone } from "react-icons/tb";
import { TbMessageChatbot } from "react-icons/tb";
import { TbAt } from "react-icons/tb";

import './Contact.scss';
import { useParams } from 'react-router-dom';

const Contact = () => {
  const contactRef = useRef(null);
  const params = useParams();
  console.log(params)

  useEffect(()=>{
      if(params.userpath === 'contact') {
        contactRef.current?.scrollIntoView({behavior : "instant", block : "center"})
      }
    }, [params.userpath])

  return (
    <div className='Contact' id='Contact' ref={contactRef}>
      <h1>- 제4장 : Please Contact me :) -</h1>
      <div className='container'>
        <img className='myEmoji' src={heart} alt="my emoji heart" />
        <p className='contactME'><span className='const'>const</span> contactME =</p>
        <span className='square-brackets left'>[</span>
        <div className='contents'>
          <a href="tel:01040040636">
            <p>call</p>
            <TbPhone className='icons call'/>
          </a>
          <p>,</p>
          <a href='sms:01040040636'>
            <p>sms</p>
            <TbMessageChatbot className='icons sms'/>
          </a>
          <p>,</p>
          <a href='mailto:dksdksalswl@naver.com'>
            <p>e-mail</p>
            <TbAt className='icons email'/>
          </a>
        </div>
        <span className='square-brackets right'>]</span>
      </div>
    </div>
  )
}

export default Contact;
