import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SearchFilters from './Filters';
import Card from './Card';
import LoadingSpinner from './LoadingSpinner';
import { GiFunnel } from 'react-icons/gi';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function RecipesCarousel() {
  const [showFilters, setShowFilters] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [searchAPI, setSearchAPI] = useState([]); // download API memory
  const [isLoading, setIsLoading] = useState(true); // loader

  const [vegan, setVegan] = useState(false); // vegan filter on/off
  const [cooktime, setCooktime] = useState(60); // max cooking time filter option
  const [dairy, setDairy] = useState(false); // dairy free filter option
  const [gluten, setGluten] = useState(false); // gluten free filter option

  const { query } = useParams();

  //link filter state data

  const handleVegan = vegan => {
    setVegan(vegan);
  };

  const handleTime = time => {
    setCooktime(time);
  };

  const handleDairy = dairy => {
    setDairy(dairy);
  };

  const handleGluten = gluten => {
    setGluten(gluten);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // fetch recipes data

    const searchRecipes = async query => {
      setIsLoading(true);
      setRecipes([]);
      try {
        //fetch searched recipes ids

        const searchResponse = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=8&query=${query}&diet=vegetarian`
        );
        const data = searchResponse.data.results;
        const recipesId = data.map(recipe => recipe.id).toString();

        //fetch full recipes data

        const recipesResponse = await axios.get(
          `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_API_KEY}&ids=${recipesId}`
        );

        setRecipes(recipesResponse.data);
        setSearchAPI(recipesResponse.data);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    searchRecipes(query);
  }, [query]);

  useEffect(() => {
    const applyFilters = () => {
      let newRecipes = searchAPI;

      if (vegan) {
        newRecipes = newRecipes.filter(recipe => recipe.vegan === true);
      }
      if (cooktime <= 120) {
        newRecipes = newRecipes.filter(
          recipe => recipe.readyInMinutes <= cooktime
        );
      }
      if (dairy) {
        newRecipes = newRecipes.filter(recipe => recipe.dairyFree === true);
      }
      if (gluten) {
        newRecipes = newRecipes.filter(recipe => recipe.glutenFree === true);
      }

      setRecipes(newRecipes);
    };

    applyFilters();
  }, [vegan, cooktime, dairy, gluten, searchAPI]);

  return (
    <div className="recipes-container">
      <h1>
        Vegetarian search sesults for <b>{query}</b>
      </h1>
      <div className="search-filters-section">
        <div className="filter-button" onClick={() => setShowFilters(true)}>
          <span>Filters</span>
          <GiFunnel />
        </div>
        <div className="active-filters">
          {vegan && <div>vegan</div>}
          {dairy && <div>dairy free</div>}
          {gluten && <div>gluten free</div>}
        </div>
      </div>
      <div className={`${showFilters ? '' : 'hide-filters'}`}>
        <SearchFilters
          handleTime={handleTime}
          handleVegan={handleVegan}
          handleDairy={handleDairy}
          handleGluten={handleGluten}
          closePopup={() => setShowFilters(false)}
        />
      </div>
      {recipes.length === 0 && isLoading === false && (
        <div className="search-loader">
          <p>No recipes found.</p>
        </div>
      )}
      {recipes.length === 0 && isLoading === true && (
        <div className="search-loader">
          <LoadingSpinner />
        </div>
      )}
      {recipes.length > 0 && (
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
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {recipes.map(recipe => (
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
      )}
    </div>
  );
}
