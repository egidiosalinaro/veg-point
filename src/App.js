import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FavoritesContextProvider from './context/FavoritesContextProvider';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Recipe from './pages/Recipe';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <Router>
      <FavoritesContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/recipe/:id" element={<Recipe />} />
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
