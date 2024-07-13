

export const Item = ({item: {meal, img}}) => {
    
  return (
    <li className="item_meal">
      <figure>
        <img src={img} alt="imagen de plato de comida" />
     
      </figure>

      <div className="container_span">
        <span>{meal}</span>
      </div>
     
    </li>
  )
}

