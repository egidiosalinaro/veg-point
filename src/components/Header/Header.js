import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';
import Title from '../../img/title.png';

export default function Header() {
  return (
    <div className="header">
      <Link to={'/'}>
        <img src={Title} alt="Veg Point" />
      </Link>
      <SearchBar placeholder={'Search for a veg recipe'} />
      <Link to={'/favorites/'}>
        <span className="favorites">My Recipes</span>
      </Link>
    </div>
  );
}
