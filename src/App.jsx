import React from "react";
import { RightSide } from "./components/Categori/RightSide";
import Details from "./components/MealDitails/Details";
import { Main } from "./components/Meals/Main";

const App = () => {
  return (
    <>
      <div className="app_container">
        <RightSide />
        <Main/>
      </div>
      <Details />
    </>
  );
};

export default App;
