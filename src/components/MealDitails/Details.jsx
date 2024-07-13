import React, { useState, useEffect } from 'react'
import "./style.css";

const Details = () => {
  const [meals, setMeals] = useState([])


  const getData = async () => {
    const rs = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    const jsonRs = await rs.json();
    setMeals(jsonRs)
  }

  // const enlace = 'https://www.youtube.com/watch?v=1IszT_guI08';
  const extractId = (url) => {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let match;
    let id = null;
    while ((match = regex.exec(url))) {
      if (match[1] === 'v') {
        id = match[2]; // El segundo grupo capturado es el ID del video
        break;
      }
    }
    return id;
  };

  useEffect(() => {
    getData()
  }, [])


  return (

    <div className='meal_datails'>
      {
        meals.meals && meals.meals.map((meal) => (
          <div key={meal.idMeal}>

            <div className='card-1'>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h1>{meal.strMeal}</h1>
            </div>

            <div className='card-2'>

              <div className='Ingredientes'>
                <h2>Ingredientes:</h2>
                <ul>
                  {
                    Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
                      meal[`strIngredient${i}`] && meal[`strMeasure${i}`] && (
                        <li key={i}>{meal[`strIngredient${i}`]} - {meal[`strMeasure${i}`]}</li>
                      )
                    ))
                  }
                </ul>
              </div>

              <div className='Instrucciones'>
                <h2>Instrucciones:</h2>
                <p>{meal.strInstructions}</p>
              </div>

            </div>

            <div className='card-3'>
              {/* <iframe src={meal.strYoutube} name={meal.setMeals} frameborder="0"></iframe> */}
              <iframe src={`https://www.youtube.com/embed/${extractId(meal.strYoutube)}`} frameborder="0" allowfullscreen></iframe>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Details

