import Recipes from '../components/Recipes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TodaysPicks from '../components/TodaysPicks';

export default function ShowSearched() {
  return (
    <>
      <Header />
      <Recipes />
      <TodaysPicks />
      <Footer />
    </>
  );
}
