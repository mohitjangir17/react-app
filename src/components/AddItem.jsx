import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "../App.css";

function AddItem({ onClick }) {
  const [itemName, setItemName] = useState("");
  const updateItemName = (e) => {
    setItemName(e.target.value);
  };
  const onSubmit = (e) => {
    if (itemName == 0) {
      alert("Must include item name");
    } else {
      onClick(itemName);
      setItemName("");
    }
  };
  return (
    <div className="AddItem">
      <input
        placeholder="Add New Item"
        type="text"
        value={itemName}
        onChange={updateItemName}
        name="item"
      />{" "}
      <br />
      <AddIcon className="AddIcon" onClick={onSubmit} />
    </div>
  );
}
export default AddItem;
