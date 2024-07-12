

export const Item = ({item: {meal, img}}) => {
    
  return (
    <li className="item_meal">
      <figure>
        <img src={img} alt="" />
      </figure>
      <span>{meal}</span>
    </li>
  )
}

