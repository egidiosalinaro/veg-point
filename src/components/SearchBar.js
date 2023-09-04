import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

const SearchBar = forwardRef((props, ref) => {
  const [input, setInput] = useState(''); // detecting inputs from user keyboard
  const [focus, setFocus] = useState('searchbar');

  let navigate = useNavigate();

  // capturing search bar inputs
  const searchInput = e => setInput(e.target.value);

  // handling form submitting
  const submitHandler = e => {
    e.preventDefault();
    if (input) {
      navigate('../search/' + input, {
        replace: true,
      });
      setInput('');
    }
  };

  return (
    <div id="searchbar" className={focus}>
      <form onSubmit={submitHandler}>
        <input
          ref={ref}
          type="text"
          placeholder={props.placeholder}
          value={input}
          onChange={searchInput}
          onFocus={e => setFocus('searchbar-focus')}
          onBlur={e => setFocus('searchbar')}
        />
        <span className="search-icon" onClick={submitHandler}>
          <BiSearch />
        </span>
      </form>
    </div>
  );
});

export default SearchBar;
