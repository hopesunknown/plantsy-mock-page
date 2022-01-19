import React, { useState } from "react";

function PlantCard({plant}) {
  const [isClicked, setIsClicked] = useState(true)

  function handleClick () {
    setIsClicked(!isClicked)
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} height="250" width="200"/>
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {isClicked ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
