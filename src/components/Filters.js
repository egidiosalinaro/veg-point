import { useState } from 'react';

export default function SearchFilters({
  handleVegan,
  handleTime,
  handleDairy,
  handleGluten,
  closePopup,
}) {
  const [time, setTime] = useState(60);

  return (
    <div className="filters-box">
      <div className="popup">
        <div className="diets">
          <div className="vegan">
            <label>Vegan</label>
            <input
              type="checkbox"
              className="filter-checkbox"
              onClick={e => handleVegan(!!e.target.checked)}
            />
          </div>
          <div className="dairy">
            <label>Dairy Free</label>
            <input
              type="checkbox"
              className="filter-checkbox"
              onClick={e => handleDairy(!!e.target.checked)}
            />
          </div>
          <div className="gluten">
            <label>Gluten Free</label>
            <input
              type="checkbox"
              className="filter-checkbox"
              onClick={e => handleGluten(!!e.target.checked)}
            />
          </div>
        </div>
        <div className="cooking-time">
          <label htmlFor="time-range">Max Cooking Time: {time} </label>
          <input
            id="time-range"
            type="range"
            min="20"
            max="90"
            defaultValue="60"
            step="10"
            className="filter-time-slider"
            onChange={e => {
              handleTime(e.target.value);
              setTime(e.target.value);
            }}
          />
        </div>
        <button onClick={() => closePopup(true)}>See filtered results</button>
      </div>
    </div>
  );
}
