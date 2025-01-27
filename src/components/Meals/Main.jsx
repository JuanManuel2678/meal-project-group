import { useEffect, useState } from "react"
import { Header } from "./Header"
import { List } from "./List"
import { Item } from "./Item"
import './style.css'
import { useParams } from "react-router"


export const Main = () => {
    const [data, setData] = useState([])
    const [meal, setMeal] = useState([])

    const { category } = useParams()
    

    async function getData (categ) {
        const rs = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categ}`)
        const rsJson = await rs.json()

        const filterMeals = rsJson.meals.map(meal => ({

            id: meal?.idMeal,
            meal: meal?.strMeal,
            img: meal?.strMealThumb

        }))
        setData(filterMeals)
        setMeal(filterMeals)
      }

    useEffect(() => {
      const categ = category || 'Seafood'
        getData(categ)
  }, [category])

  return (

    <main className="main_container">
        <Header meal={meal} setData={setData} />

        <List>
            {data && 
             data.slice(0, 15).map(item => (<Item key={item.id} item={item}/>))}
        </List>
      
    </main>
  )
}

//  const cat = category || 'Seafood'