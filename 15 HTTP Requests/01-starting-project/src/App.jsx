import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import Error from './components/Error.jsx';
import { updateAvailablePlaces,getUserPlaces } from "./http.js"

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [fetching, setFeching] = useState(false)
  const [isError, setIsError] = useState(false)

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [errorUpdating, setErrorUpdating] = useState(false)

  useEffect(()=>{
    async function getUsers(){
      setFeching(true)

      try{
        const places = await getUserPlaces()
        setUserPlaces(places)
      }catch(err){
        console.log(err)
        setIsError({message:err.message||"could not fetch your places"})
        setUserPlaces([])
      }
      
      setFeching(false)
    }
    getUsers()
  },[])

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try{
      const response = await updateAvailablePlaces([selectedPlace,...userPlaces])
    }catch(err){
      console.log(err)
      setErrorUpdating({message:err.message||"could not update places, please try again"})
      setUserPlaces(userPlaces)
    }
  }

  function handleUpdatingPlaces(){
    setErrorUpdating(null)
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try{
      const response = await updateAvailablePlaces([...userPlaces].filter((place) => place.id !== selectedPlace.current.id))
    }catch(err){
      console.log(err)
      setErrorUpdating({message:err.message||"could not update places, please try again"})
      setUserPlaces(userPlaces)
    }

    setModalIsOpen(false);
  }, [userPlaces]);

  return (
    <>
      <Modal open={errorUpdating} onClose={handleUpdatingPlaces}>
        {errorUpdating && <Error title="Oops!" message={errorUpdating.message} onConfirm={handleUpdatingPlaces} />}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
      {isError&& <Error title="Oops!" message={isError.message}/>}
        {!isError && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          loadingText="Finding your places..."
          isLoading={fetching}
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
