import React, { useEffect, useRef, useState } from 'react';
import './Design.scss';
import {design} from '../../data';
import DesignModal from './DesignModal';
import { useParams } from 'react-router-dom';



const Design = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [isModal, setIsModal] = useState(false);
  const designsRef = useRef(null);
  const params = useParams();

  const openHandler = ((imageUrl)=>{
    setIsModal(true)
    setSelectedImage(imageUrl)
  })
  const closeHandler = (()=>{
    setIsModal(false)
  })

  useEffect(()=>{
      if(params.userpath === 'designs') {
        designsRef.current?.scrollIntoView({behavior : "instant"})
      }
    }, [params.userpath])

  return (
    <div className='Design' id='Designs' ref={designsRef}>
      <h1>- 제3-2장 : This is myDesign -</h1>
      <div className='container'>
        {
          design.map((data) => {
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
    </div>
  )
}

export default Design;
