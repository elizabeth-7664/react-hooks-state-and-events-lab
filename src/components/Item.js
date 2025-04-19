import React, { useState } from "react";

function Item({ name, category }) {
const [isInCart, setIsInCart] = useState(false)

function handleAddtoCartClick () {
  setIsInCart((prevMode) => !prevMode)
}

const itemclass = isInCart ? "in-cart" : "";
const buttonText = isInCart ? "Remove from Cart" : "Add to Cart";
const buttonClass = isInCart ? "remove" : "add";
  return (
    <li className={itemclass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddtoCartClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
