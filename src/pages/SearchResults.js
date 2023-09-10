import Header from '../components/Header/Header';
import RecipesCarousel from '../components/RecipesCarousel/RecipesCarousel';
import TodaysPicks from '../components/TodaysPicks';
import Footer from '../components/Footer/Footer';

export default function SearchResults() {
  return (
    <>
      <Header />
      <RecipesCarousel />
      <TodaysPicks />
      <Footer />
    </>
  );
}
