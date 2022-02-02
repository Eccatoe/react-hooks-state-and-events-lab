import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleItemClick(){
    setInCart(!inCart)
  }

  const liClassName= inCart? "in-cart" : ""

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItemClick} className="add">{inCart? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;


//when button is clicked, change li className to in-cart vs ""
//if not in cart, button text is "add to cart"
//if in cart, button text is "remove from cart"