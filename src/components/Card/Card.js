import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { FavoritesContext } from '../../context/FavoritesContextProvider';

import { BsPeople, BsHeart, BsHeartFill } from 'react-icons/bs';
import { TfiTimer } from 'react-icons/tfi';
import noImage from '../../img/no-image.png';

export default function Card(props) {
  const [favorite, setFavorite] = useState(false);
  const { addFavRecipe, removeFavRecipe } = useContext(FavoritesContext);

  const handleFavorite = e => {
    favorite
      ? removeFavRecipe(props.id)
      : addFavRecipe(
          props.id,
          props.title,
          props.image,
          props.time,
          props.servings
        );
    setFavorite(!favorite);
  };

  return (
    <div className="card-frame" key={props.id}>
      <Link to={`/recipe/${props.id}`}>
        {props.image ? (
          <img src={props.image} alt={props.title} />
        ) : (
          <img src={noImage} alt={props.title} />
        )}
        <div className="card-text-container">
          <h3> {props.title} </h3>
          <h4>
            <TfiTimer className="icon" /> {props.time}m
            <BsPeople className="icon people" /> {props.servings}
          </h4>
        </div>
      </Link>

      <div className="favorite-button">
        {favorite ? (
          <BsHeartFill
            title="Remove from My Recipes"
            onClick={handleFavorite}
          />
        ) : (
          <BsHeart title="Save to My Recipes" onClick={handleFavorite} />
        )}
      </div>
    </div>
  );
}
