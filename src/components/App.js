import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import Dog from "./Dog";

function App() {
  const [pups, setPups] = useState([])
  const [pupper, setPupper] = useState("")
  const [filterIsOn, setFilterIsOn] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(dogs => {
      setPups(dogs)
      setPupper(dogs[0])
    })
  }, [])

  function handleUpdateDog(dog) {
    setPupper(dog)
  }

  const pupsToDisplay = pups.filter(pupper => pupper.isGoodDog)

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setFilterIsOn(!filterIsOn)}>Filter good dogs: {filterIsOn ? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
        <DogBar pups={filterIsOn ? pupsToDisplay : pups} onPupClick={pupper =>  setPupper(pupper)} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <Dog pupper={pupper} onUpdateDog={handleUpdateDog} />
        </div>
      </div>
    </div>
  );
}

export default App;
