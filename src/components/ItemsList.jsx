import React from "react";

import "../App.css";
import Item from "./Item";

function Items({ items, onIncreament, onDecreament, onDelete }) {
  const handleIncreament = (item) => {
    onIncreament(item);
  };
  const handleDecreament = (item) => {
    onDecreament(item);
  };
  const handleDelete = (id) => {
    // console.log(id);
    onDelete(id);
  };
  return (
    <div className="Items">
      {items.map((item, index) => (
        <Item
          item={item}
          increament={handleIncreament}
          decreament={handleDecreament}
          remove={handleDelete}
          key={index}
          id={index}
        />
      ))}
    </div>
  );
}
export default Items;
