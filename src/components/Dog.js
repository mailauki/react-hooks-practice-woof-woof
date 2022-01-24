import React from "react";

function Dog({ pupper, onUpdateDog }) {
  const {id, name, image, isGoodDog} = pupper

  function handleGoodDog() {
    fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "isGoodDog": !isGoodDog
      })
    })
    .then(r => r.json())
    .then(dog => onUpdateDog(dog))
  }

  return (
    <>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <button onClick={handleGoodDog}>{isGoodDog ? "Good" : "Bad"} Dog!</button>
    </>
  )
}

export default Dog