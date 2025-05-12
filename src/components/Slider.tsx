import { historicDates } from '@/constants/historicDates';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/components/slider.scss';

import React from 'react';
import { ReturnUseSlider } from '@/hooks/useSlider';

interface Props {
  curEvent: number;
  sliderData: ReturnUseSlider;
}

const breakpoints = {
  320: {
    slidesPerView: 1.5,
    spaceBetween: 25,
  },
  780: {
    slidesPerView: 2,
    spaceBetween: 80,
  },
  1040: {
    slidesPerView: 3,
    spaceBetween: 80,
  },
};

export const Slider = ({ curEvent, sliderData }: Props) => {
  const { sliderRef } = sliderData;

  const events = historicDates[curEvent].events;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      sliderRef.current?.classList.add('slider_show');
      clearTimeout(timer);
    }, 200);
  }, [curEvent]);

  return (
    <div ref={sliderRef} className="slider">
      <p className="slider__title">{historicDates[curEvent].title}</p>
      <button className="slider__btn slider__btn_prev"></button>

      <Swiper
        direction="horizontal"
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={4}
        breakpoints={breakpoints}
        navigation={{
          prevEl: '.slider__btn_prev',
          nextEl: '.slider__btn_next',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {events.map((item, index) => {
          const { date, description } = item;

          return (
            <SwiperSlide key={index} className="slider__slide">
              <p className="slider__year">{date}</p>
              <p className="slider__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className="slider__btn slider__btn_next"></button>
    </div>
  );
};
