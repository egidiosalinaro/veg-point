import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContextProvider';

import { BsPeople } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { TfiTimer } from 'react-icons/tfi';
import noImage from '../img/no-image.png';

export default function FavCard(props) {
  const { removeFavRecipe } = useContext(FavoritesContext);

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
        <FaTrashAlt
          onClick={() => {
            removeFavRecipe(props.id);
          }}
        />
      </div>
    </div>
  );
}
