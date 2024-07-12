

export const Item = ({item: {category, img}}) => {

  return (

    <li className='item_categori'>
      <h4>{category}</h4>

      <figure>
        <img src={img} alt="" />
      </figure>
      
    </li>
  )
}

