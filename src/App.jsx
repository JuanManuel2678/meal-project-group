import React from "react";
import { RightSide } from "./components/Categori/RightSide";
import Details from "./components/MealDitails/Details";
import { Main } from "./components/Meals/Main";

const App = () => {
  return (
    <>
      <div className="app_container">

          <div className="app_categori">
          <RightSide />
          <Main/>
          </div>

         <div className="app_details">
         <Details />
          
         </div>

      </div>
     
    </>
  );
};

export default App;
