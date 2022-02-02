import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory]=useState('All')

  function updateCategory(e){
    setSelectedCategory(e.target.value)
  }

  const itemsToDisplay=items.filter((item)=>{
    if (selectedCategory==='All'){
      return items
    } else {
      return item.category===selectedCategory
    }
    }
  )

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={updateCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
