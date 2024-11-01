import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay'; 
import '../index.css';
import { EffectCards, Autoplay } from 'swiper/modules'; 

const SliderComponent = () => {
  return (
    <div className='my-[100px] bg-white rounded-tr-[100px] rounded-bl-[100px] py-10'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]} 
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false, 
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/uzumBank.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/itPark.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/uzumBank.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/uzumBank.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/uzumBank.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/uzumBank.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderComponent;
