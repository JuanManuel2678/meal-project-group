import { useState } from "react";
import search from "/public/search.svg"

export const Header = ({ meal, setData }) => {
  const [search, setSearch] = useState({ meal: "" });

  function searchMeal() {
    const rs = meal.filter((item) =>
      item.meal.toLowerCase().includes(search.meal.toLowerCase())
    );
    setData(rs);
  }

  return (
    <header className="meal_header">
      <h1>Meals</h1>
      <div className="div_meal_header">
        <input
          type="text"
          placeholder="Search Meals"
          value={search.meal}
          onChange={(e) => setSearch({ ...search, meal: e.target.value })}
        />
        <button onClick={searchMeal}>
          <img src="/lupa.svg" alt="icon search" />
        </button>
      </div>
    </header>
  );
};
