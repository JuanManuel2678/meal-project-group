import { useState } from 'react'

export const Header = ({categories, setData}) => {
    const [search, setSearch] = useState({category: ''})

    function searchCategory () {
        const filtered = categories.filter(item => item.category.toLowerCase().includes(search.category.toLowerCase()))
        setData(filtered)
        
    }

  return (

    <header className='categorie_header'>
        <h1>Categories</h1>
        <div>
            <input 
            type="text"
            placeholder='Search Category'
            value={search.category}
            onClick={searchCategory}
            onChange={(e) => setSearch({...search, category: e.target.value})}
             />
        </div>
      
    </header>
  )
}


