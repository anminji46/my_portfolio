import React from 'react';
import './Area.scss';
// import About from '../pages/About';


const Area = ({data : key, id, title, content, bgColor, color}) => {

  return (
    <div 
      className='Area' id={id}
      key={key} 
      // style={{ backgroundColor: bgColor, color:color }}
    >
      <h2>- {title} -</h2>
      <div className='content'>
        {content}
      </div>
    </div>
  )
}

export default Area;
