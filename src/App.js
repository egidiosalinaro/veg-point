import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowRecipe from './pages/ShowRecipe';
import Favorites from './pages/Favorites';
import ShowSearched from './pages/ShowSearched';
import FavoritesContextProvider from './context/FavoritesContextProvider';

const App = () => {
  return (
    <Router>
      <FavoritesContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search/:query" element={<ShowSearched />} />
          <Route path="/recipe/:id" element={<ShowRecipe />} />
          <Route path="/favorites/" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavoritesContextProvider>
    </Router>
  );
};

export default App;

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}
