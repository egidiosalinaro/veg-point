import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

const FavoritesContextProvider = props => {
  const [favRecipes, setFavRecipes] = useState([]);

  const addFavRecipe = (id, title, image, readyInMinutes, servings) => {
    setFavRecipes([
      ...favRecipes,
      { id, title, image, readyInMinutes, servings },
    ]);
  };

  const removeFavRecipe = id => {
    setFavRecipes(favRecipes.filter(recipe => recipe.id !== id));
  };

  //fetch localstorage at the first loading
  useEffect(() => {
    const localData = localStorage.getItem('Favorite Recipes');
    if (localData) {
      setFavRecipes(JSON.parse(localData));
    }
  }, []);

  //update localstorage when favRecipes changes
  useEffect(() => {
    localStorage.setItem('Favorite Recipes', JSON.stringify(favRecipes));
  }, [favRecipes]);

  return (
    <FavoritesContext.Provider
      value={{ favRecipes, addFavRecipe, removeFavRecipe }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
