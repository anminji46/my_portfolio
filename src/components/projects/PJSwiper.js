import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation, Autoplay } from 'swiper/modules';
import {swiper} from '../../data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PJSwiper = () => {
  return (
    <Swiper
      modules={[ Pagination, Navigation, Autoplay ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay = {{
        delay : 3000,
        disableOnInteraction : false
      }}
      speed={500}
      loop = {true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
        swiper.map( data =>{
          const info = data.info;
            return <SwiperSlide key={data.id}>
            <div className='productsImg' >
              <div className='img' style={{backgroundImage:`url(${data.image})`}}></div>
              <div className='bottomLine'></div>
            </div>
            <div className='productsTexts'>
              <div className='productsText'>
                <div className='topLine'></div>
                <pre>{data.text}</pre>
              </div>
              <div className='textBox'>
                {
                  info.map(infom=>{
                    return (
                      <>
                        <span>{infom.type}</span>
                        <p>{infom.markUp}</p>
                      </>
                    )
                  })
                }
                <a href={`${data.link}`}>사이트 이동</a>
                <a href={`${data.git}`}>github repository</a>
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default PJSwiper;