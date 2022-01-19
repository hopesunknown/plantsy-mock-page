import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantData, setPlantData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((resp) => resp.json())
    .then((plantData) => setPlantData(plantData))
  }, [])

  function addPlant (newPlant) {
    setPlantData([...plantData, newPlant]);
  }

  const visiblePlants = plantData.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
