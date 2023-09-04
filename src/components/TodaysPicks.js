import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Card';
import LoadingSpinner from './LoadingSpinner';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, EffectCoverflow, Pagination, Navigation]);

export default function TodaysPicks() {
  const [picks, setPicks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch random recipes for the homepage

  const downloadPicks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&diet=vegetarian`
      );
      const data = response.data;
      setPicks(data.recipes);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    downloadPicks();
  }, []);

  return (
    <div className="recipes-container">
      <h1>Today's Picks</h1>
      {isLoading === true && <LoadingSpinner />}
      {isLoading === false && picks && picks.length === 0 && (
        <div className="search-loader">
          <p className="text-center">
            Connection to the server failed. <br />
            Try to reload the page.
          </p>
        </div>
      )}
      {isLoading === false && picks && picks.length > 0 && (
        <>
          <p>Are you out of ideas? Check out our vegetarian daily selection.</p>
          <Swiper
            className="swiper-container"
            breakpoints={{
              // when window width is >= 18px
              180: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              // when window width is >= 830px
              600: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              // when window width is >= 1120px
              950: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1600: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          >
            {picks.map(recipe => (
              <SwiperSlide key={recipe.id}>
                <Card
                  id={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  servings={recipe.servings}
                  time={recipe.readyInMinutes}
                />
              </SwiperSlide>
            ))}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </Swiper>
        </>
      )}
    </div>
  );
}
