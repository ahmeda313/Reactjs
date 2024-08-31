export async function getAvailablePlaces(){
    const response = await fetch("http://localhost:3000/places")
    const data = await response.json()

    if(!response.ok){
      throw new Error("could not fetch places")
    }

    return data.places
}


export async function getUserPlaces(){
    const response = await fetch("http://localhost:3000/user-places")
    const data = await response.json()

    if(!response.ok){
      throw new Error("could not fetch places")
    }

    return data.places
}

export async function updateAvailablePlaces(places){

    const response = await fetch("http://localhost:3000/user-places",{
        method:"PUT",
        body:JSON.stringify({places:places}),
        headers:{
            "Content-type":"application/json"
        }
    })
    const resData = await response.json()

    if(!response.ok){
        throw new Error("cannot update places")
    }

    return resData

}
