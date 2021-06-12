import React from "react";
import "../App.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="Header">
      <h1>Shopping Cart</h1>
      <ShoppingCartIcon style={{ padding: "8", width: "33", height: "33" }} />
    </div>
  );
}
export default Header;
