import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    {
      name: "16gb turbo ram",
      quantity: 1,
    },
    {
      name: "4 Gb Graphics Card",
      quantity: 1,
    },
    {
      name: "1Tb samsung Evo SSD",
      quantity: 1,
    },
    {
      name: "Ryzen  7 9080XT processor",
      quantity: 1,
    },
  ]);

  const handleQuantityIncreament = async (item) => {
    const clonearray = [...items];
    const index = clonearray.indexOf(item);
    clonearray[index] = { ...item };
    clonearray[index].quantity++;
    setItems([...clonearray, clonearray[index].quantity]);
    console.log(clonearray[index].quantity);
    console.log(items[index].quantity);
  };
  const handleQuantityDecreament = () => {
    console.log("-");
  };
  const handleItemDelete = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      {items.length > 0 ? (
        <Items
          onIncreament={handleQuantityIncreament}
          onDecreament={handleQuantityDecreament}
          onDelete={handleItemDelete}
          items={items}
        />
      ) : (
        <h1 style={{ textAlign: "centre" }}>
          There are no items in the shoping cart
        </h1>
      )}
    </div>
  );
}

export default App;
