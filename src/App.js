import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/ItemsList";
// import Home from "./components/Home";
import AddItem from "./components/AddItem";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

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

  const handleAddItem = (itemName) => {
    // console.log(itemName);

    setItems((prevItems) => {
      return [{ name: itemName, quantity: 1 }, ...prevItems];
    });
  };

  const handleQuantityIncreament = (item) => {
    const clonearray = [...items];
    const index = clonearray.indexOf(item);
    clonearray[index] = { ...item };
    clonearray[index].quantity++;
    setItems([...clonearray]);
    // console.log(clonearray[index].quantity);
    // console.log(items[index].quantity);
  };
  const handleQuantityDecreament = (item) => {
    // console.log(item.quantity);
    if (item.quantity === 1) {
      alert("Quantity can't be zero");
    } else {
      const clonearray = [...items];
      const index = clonearray.indexOf(item);
      clonearray[index] = { ...item };
      clonearray[index].quantity--;
      setItems([...clonearray]);
      // console.log(clonearray[index].quantity);
      // console.log(items[index].quantity);
    }
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


      <AddItem onClick={handleAddItem} />
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
