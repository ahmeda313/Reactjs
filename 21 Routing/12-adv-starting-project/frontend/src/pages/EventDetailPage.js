import {useParams, useLoaderData,json, useRouteLoaderData, redirect, defer, Await} from "react-router-dom"
import EventItem from "../components/EventItem"
import EventsList from "../components/EventsList"
import { Suspense } from "react"

const EventDetailPage = () => {
  // const params = useParams()
  // const data = useLoaderData()
  const {event, events} = useRouteLoaderData("event-detail")
  
  return (
    <>
    <Suspense fallback={<p style={{textAlign:"center"}}>Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvent)=><EventItem event={loadedEvent}/>}
      </Await>
    </Suspense>

    <Suspense fallback={<p style={{textAlign:"center"}}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents)=><EventsList events={loadedEvents}/>}
      </Await>
    </Suspense>
    </>
  )
}

export default EventDetailPage

async function loadEvents(){
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({message:"could not fetch events"}),{status:500})
    throw json({message:"could not fetch events"},{status:500})
  } else {
    const resData = await response.json()
    return resData.events
  }
}

async function loadEvent(id){
  const response = await fetch("http://localhost:8080/events/"+id)

  if(!response.ok){
    throw json({message:"could not find event"}, {status:500})
  }else{
    const resData = await response.json()
    return resData.event
  }
}


export async function loader({request, params}){
  const id = params.eventId

  return defer({
    event: await loadEvent(id), // move to event details page only after this is loaded 
    events:loadEvents()        // this is not awaited bcoz this can be loaded after details page is on the screen
  })

}

export async function action({params, request}){
  const response = await fetch("http://localhost:8080/events/"+params.eventId,{
    method:request.method
})

  if(!response.ok){
    throw json({message:"could not delete event"}, {status:500})
  }

  return redirect("/events")
}