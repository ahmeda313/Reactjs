import { useEffect, useState } from "react";

export function useFetch(fetchFn,initial){

    const [userPlaces, setUserPlaces] = useState(initial);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const places = await fetchFn();
            setUserPlaces(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {
        userPlaces,
        isFetching,
        error,
        setUserPlaces
      }
}