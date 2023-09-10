import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { FavoritesContext } from '../../context/FavoritesContextProvider';
import Ingredient from '../Ingredient/Ingredient';
import Instruction from '../Instruction/Instruction';
import Card from '../Card/Card';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import NavButtons from '../NavButtons/NavButtons';
import noImage from '../../img/no-image.png';

import { BiRestaurant, BiHeart, BiFoodMenu } from 'react-icons/bi';
import { TfiTimer } from 'react-icons/tfi';
import { GiMilkCarton } from 'react-icons/gi';
import { BsXDiamondFill, BsHeart, BsHeartFill } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Scrollbar,
  Autoplay,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Scrollbar, Autoplay, EffectCoverflow, Pagination, Navigation]);

export default function RecipeDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [favorite, setFavorite] = useState(false);
  const { favRecipes, addFavRecipe, removeFavRecipe } =
    useContext(FavoritesContext);
  const [similarRecipes, setSimilarRecipes] = useState({});
  const { id } = useParams();

  const fetchRecipe = async id => {
    setIsLoading(true);
    try {
      // fetching recipe main data
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
      );
      setRecipe(response.data);

      // fetching similar recipes via id
      const similar = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );
      setSimilarRecipes(similar.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleFavorite = () => {
    favorite
      ? removeFavRecipe(recipe.id)
      : addFavRecipe(
          recipe.id,
          recipe.title,
          recipe.image,
          recipe.readyInMinutes,
          recipe.servings
        );
    setFavorite(!favorite);
  };

  // fetching the recipe on loading
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRecipe(id);
  }, [id]);

  // checking if current recipe is already favorite
  useEffect(() => {
    favRecipes.find(fav => fav.id === Number(id))
      ? setFavorite(true)
      : setFavorite(false);
  }, [favRecipes, id]);

  return (
    <div className="recipe-details">
      {isLoading === true && (
        <div className="search-loader">
          <LoadingSpinner />
        </div>
      )}

      {isLoading === false && recipe && Object.keys(recipe).length === 0 && (
        <div className="search-loader">
          <p>No data found. Try to reload the page.</p>
        </div>
      )}

      {isLoading === false && recipe && Object.keys(recipe).length > 0 && (
        <>
          <h1 className="recipe-title">{recipe.title}</h1>
          <div className="top-section">
            {recipe.image ? (
              <img
                className="recipe-photo"
                src={recipe.image}
                alt={recipe.title}
              />
            ) : (
              <img className="recipe-photo" src={noImage} alt={recipe.title} />
            )}
            <div className="recipe-info">
              <span className="recipe-info-line">
                <TfiTimer size={20} />
                <strong>Cooking Time: </strong>
                {recipe.readyInMinutes} minutes
              </span>
              <span className="recipe-info-line">
                <BiRestaurant size={20} />
                <strong>Servings: </strong>
                {recipe.servings} diners
              </span>
              <span className="recipe-info-line">
                <BiFoodMenu size={20} />
                <strong>Diet: </strong>
                {recipe.vegan ? 'Vegan' : 'Vegetarian'}
              </span>
              {recipe.glutenFree && (
                <span className="recipe-info-line">
                  <BsXDiamondFill size={20} />
                  <strong>Gluten Free</strong>
                </span>
              )}
              {recipe.dairyFree && (
                <span className="recipe-info-line">
                  <GiMilkCarton size={20} />
                  <strong>Dairy Free</strong>
                </span>
              )}
              <span className="recipe-info-line">
                <BiHeart size={20} />
                <strong>Health Score: </strong>
                {recipe.healthScore}
              </span>
            </div>
            {favorite ? (
              <div
                className="save-favorite-button unsave"
                onClick={handleFavorite}
              >
                <BsHeartFill />
                <div>Unsave</div>
              </div>
            ) : (
              <div className="save-favorite-button" onClick={handleFavorite}>
                <BsHeart />
                <div>Save</div>
              </div>
            )}
          </div>

          <div className="ingredients-container">
            <h2>Ingredients</h2>
            <Swiper
              breakpoints={{
                // when window width is >= 18px
                180: {
                  slidesPerView: 1,
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
              slidesOffsetBefore={120}
              simulateTouch={true}
              modules={[Autoplay, Scrollbar]}
              scrollbar={{
                draggable: true,
                hide: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {recipe?.extendedIngredients?.map((ingredient, index) => (
                <SwiperSlide key={'S' + index}>
                  <Ingredient
                    key={index}
                    id={ingredient.id}
                    image={ingredient.image}
                    original={ingredient.original}
                    name={ingredient.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="instructions">
            <h2>Instructions</h2>
            {recipe.analyzedInstructions &&
              recipe.analyzedInstructions.length &&
              recipe.analyzedInstructions[0].steps.map((instr, index) => {
                return (
                  <Instruction
                    key={index}
                    number={instr.number}
                    text={instr.step}
                  />
                );
              })}
          </div>

          <div className="recipes-container">
            <h1>Similar Recipes</h1>
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
              slidesPerView={'3'}
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
              {similarRecipes &&
                similarRecipes.length &&
                similarRecipes.map(recipe => (
                  <SwiperSlide key={recipe.id}>
                    <Card
                      id={recipe.id}
                      image={
                        'https://spoonacular.com/recipeImages/' +
                        recipe.id +
                        '-556x370.' +
                        recipe.imageType
                      }
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
          </div>

          <NavButtons />
        </>
      )}
    </div>
  );
}
