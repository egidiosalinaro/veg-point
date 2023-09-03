import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { FavoritesContext } from '../context/FavoritesContextProvider';

import FavCard from './FavCard';
import LoadingSpinner from './LoadingSpinner';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function FavoritesPanel() {
  const { favRecipes } = useContext(FavoritesContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="recipes-container">
      <h1>My Favorite Recipes</h1>
      <div className="favorites-card-container">
        {isLoading && favRecipes.length === 0 && (
          <div className="search-loader">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && favRecipes.length === 0 && (
          <div className="no-favorites">
            <h3 className="no-recipes">No favorite recipes here.</h3>
            <Link to={'/'}>
              <span className="favorites-back-home">
                <FaChevronCircleLeft className="mr-4" />
                Back to the homepage
              </span>
            </Link>
          </div>
        )}
        {favRecipes.length > 0 && (
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
            modules={[EffectCoverflow, Pagination, Navigation]}
          >
            {favRecipes.map(recipe => (
              <SwiperSlide key={recipe.id}>
                <FavCard
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
        )}
      </div>
    </div>
  );
}
