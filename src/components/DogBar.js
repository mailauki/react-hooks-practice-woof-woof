function DogBar({ pups, onPupClick }) {
  return (
    <>
      {pups.map(pupper => 
        <span key={pupper.id} onClick={() => onPupClick(pupper)}>
          {pupper.name}
        </span>
      )}
    </>
  )
}

export default DogBar
