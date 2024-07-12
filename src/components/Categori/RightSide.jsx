import { useEffect, useState } from "react"
import { Header } from "./Header"
import { List } from "./List"
import { Item } from "./Item"
import './styles.css'

export const RightSide = () => {
  const [data, setData] = useState([])
  const [categories, setcategories] = useState([])
  

    async function getData () {
      const rs = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      const rsJson = await rs.json()

      const filterCategory = rsJson.categories.map(categories => ({

        id: categories?.idCategory,
        category: categories?.strCategory,
        img: categories?.strCategoryThumb,
        descripcion: categories?.strCategoryDescription
      }))
      setData(filterCategory)
      setcategories(filterCategory)
    }

    useEffect(() => {
      getData()
    }, [])

  return (

    <aside>
      <Header  categories={categories} setData={setData} />

        <List>
          {data && 
            data.map(item => (<Item key={item.id} item={item}/>))}
        </List>
      
    </aside>
  )
}

