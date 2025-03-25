import React from 'react';
import { FaAsterisk } from "react-icons/fa";
import './DesignModal.scss';
import img from '../../images/1200x250_2_e.png'
import PDSwiper from '../../components/projects/PJSwiper';

const DesignModal = ({show, onClose, children}) => {
  if (!show) {
    return null;
  }
  return (
    <div className='DesignModal' onClick={onClose}>
      <button onClick={onClose}>X</button>
      <div>
        {children}
      </div>
    </div>
  )
}

export default DesignModal;
