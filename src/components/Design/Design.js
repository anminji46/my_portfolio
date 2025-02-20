import React, { useEffect, useState } from 'react';
import './Design.scss';
import {design} from '../../data';
import DesignModal from './DesignModal';



const Design = () => {
  const [designData, setDesignData] = useState(design);
  const [selectedImage, setSelectedImage] = useState('');
  // const [description, setDescription] = useState('')
  const [isModal, setIsModal] = useState(false);

  const openHandler = ((imageUrl)=>{
    setIsModal(true)
    setSelectedImage(imageUrl)
    // setDescription(desc)
    // console.log(e.target)
  })
  const closeHandler = (()=>{
    setIsModal(false)
  })

  return (
    <div className='Design'>
      {
        designData.map((data) => {
          const span = data.text;
          return <div className='gallery' key={data.id}>
            <div className='imgBox' onClick={()=>openHandler(data.img)}>
              <img className='photo' src={data.img} alt='banner'/>
            </div>
            <div className='desc'>
              { 
                span.map(text => {
                  return <span>{text.txt}</span>
                })
              }
            </div>
          </div>  
        })
      }
      {
        isModal
          ?<DesignModal
            show={isModal}
            onClose={closeHandler}
          >
            <div className='contents'>
              <img src={`${selectedImage}`}  alt='banner'/>
            </div>
          </DesignModal>
          :null 
      } 
    </div>
  )
}

export default Design;
