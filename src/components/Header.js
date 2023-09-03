import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Title from '../img/title.png';

export default function Header() {
  return (
    <div className="header">
      <Link to={'/'}>
        <img src={Title} alt="Veggie Point" />
      </Link>
      <SearchBar placeholder={'Search for a vegan recipe'} />
      <Link to={'/favorites/'}>
        <span className="favorites">My Recipes</span>
      </Link>
    </div>
  );
}
