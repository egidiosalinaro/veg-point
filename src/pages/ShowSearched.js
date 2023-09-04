import RecipesCarousel from '../components/RecipesCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TodaysPicks from '../components/TodaysPicks';

export default function ShowSearched() {
  return (
    <>
      <Header />
      <RecipesCarousel />
      <TodaysPicks />
      <Footer />
    </>
  );
}
