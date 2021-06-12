import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import React from "react";
import "../App.css";

function Item({ item, id, title, quantity, increament, decreament, remove }) {
  return (
    <div className="Item">
      <div>
        <h3>{title}</h3> <p>Quantity : {quantity}</p>
      </div>
      <div className="item-action-btn">
        <AddCircleIcon
          onClick={() => increament(item)}
          style={{ margin: "0 10" }}
        />
        <RemoveCircleIcon onClick={decreament} style={{ margin: "0 10" }} />
        <DeleteIcon onClick={() => remove(id)} style={{ margin: "0 10" }} />
      </div>
    </div>
  );
}
export default Item;
