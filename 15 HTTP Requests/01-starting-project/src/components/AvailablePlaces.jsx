import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from "../loc.js"
import {getAvailablePlaces} from "../http.js"

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces]= useState([])
  const [fetching, setFeching] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(()=>{
    async function getPlaces(){
      setFeching(true)
      try{
        const places = await getAvailablePlaces()
        
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(places,position.coords.latitude,position.coords.longitude)
          setAvailablePlaces(sortedPlaces)
          setFeching(false)
        })


      }catch(err){
        setIsError(err.message || "could not fetch places please try again")
      }

    }
    getPlaces()
  },[])

  if(isError){
    return(
      <Error title="Oops!" message={isError}/>
    )
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={fetching}
      loadingText="Loading please wait..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
