import { Link } from "react-router-dom";

export const Item = ({ item: { category, img } }) => {
  return (
    <li className="item_categori">

        <Link to={`/meals/${category}`}>

          <h4>{category}</h4>
            <figure>
               <img src={img} alt={category} />
           </figure>
    
        </Link>
    </li>
  );
};
