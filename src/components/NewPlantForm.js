import React, { useState } from "react";

function NewPlantForm({addPlant}) {
  const [newPlantData, setNewPlantData] = useState(
    {
      name : "",
      image : "",
      price : 0,
    }
  )

  function onSubmit (event) {
    event.preventDefault();
    fetch("http://localhost:6001/plants", { 
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPlantData)
    })
    .then((resp) => resp.json())
    .then((np) => {
      addPlant(np)
      setNewPlantData({
        name : "",
        image : "",
        price : 0,
      })
    })
  }

  function handleChange (event) {
    setNewPlantData({...newPlantData, [event.target.name] : event.target.value})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
