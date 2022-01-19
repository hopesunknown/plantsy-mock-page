import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// When the app starts,
//  X I can see all plants.
// X I can add a new plant to the page by submitting the form.
// X I can mark a plant as "sold out".
// x I can search for plants by their name and see a filtered list of plants.

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
