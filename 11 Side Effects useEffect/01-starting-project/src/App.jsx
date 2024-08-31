import { useRef, useState, useEffect, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
 import { sortPlacesByDistance } from "./loc.js"

 const existingPlaceIds = JSON.parse(localStorage.getItem("storePlaces")) || []
 const existingPlaces = existingPlaceIds.map(i=>{
   const place = AVAILABLE_PLACES.find(j=>j.id===i)
   return place
 })
function App() {

  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(existingPlaces);
  const [sortedPlaces, setSortedPlaces] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

// useEffect executes after the component is rendered, secondly it executes if its dependencies change, if no dependencies then it executes only once ie on first render eg:---> App.jsx line 41

// useEffect can be used if function needs to execute after component rendering eg:---> Modal.jsx line 25

// useEffect callback function can return a function(clean up function) which executes before (everytime the useEffect callback function is executed or everytime component is removed from the dom) eg:---> DeleteConfirmation.jsx line 5

// side effect code but neccessaryly does not needs useEffect since it is syncronus

// useCallback is used so that function value remains same even after component re execution therefore can be usefull in dependencied in useEffect eg:---> App.jsx line 76
// ----------------------------------------------------------------------------

// useEffect(()=>{
//   const existingPlaceIds = JSON.parse(localStorage.getItem("storePlaces")) || []
//   const existingPlaces = existingPlaceIds.map(i=>{
//     const place = AVAILABLE_PLACES.find(j=>j.id===i)
//     return place
//   })
//   console.log(existingPlaces)
//   setPickedPlaces(existingPlaces)
// },[])

useEffect(()=>{
  navigator.geolocation.getCurrentPosition(({coords})=>{
    // console.log(coords.latitude,coords.longitude)
    const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES,coords.latitude,coords.longitude)
    setSortedPlaces(sortedPlaces)
  })
},[])


  function handleStartRemovePlace(id) {
    setIsModalOpen(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsModalOpen(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const existingPlaceIds = JSON.parse(localStorage.getItem("storePlaces")) || []

    if(existingPlaceIds.indexOf(id)==-1){
      localStorage.setItem("storePlaces",JSON.stringify([id,...existingPlaceIds]))
    }
  }

const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setIsModalOpen(false)

    const existingPlaceIds = JSON.parse(localStorage.getItem("storePlaces")) || []
    localStorage.setItem("storePlaces",JSON.stringify(existingPlaceIds.filter(i=>i!==selectedPlace.current)))
  },[])

  return (
    <>
      <Modal open={isModalOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText={'getting your nearest wonders'}
          places={sortedPlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
