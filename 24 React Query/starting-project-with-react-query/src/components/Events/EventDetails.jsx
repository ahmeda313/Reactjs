import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import {useState} from "react"

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import {fetchEvent, deleteEvent, queryClient} from "../../utils/http.js"
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false)

  const {id} = useParams()
  const navigate = useNavigate()

  const {data, isLoading, isError, error} = useQuery({
    queryKey:["events", id],
    queryFn:({signal})=>fetchEvent({id,signal})
  })

  const {mutate, isPending, isError:isDeletionError, error:deleteError} = useMutation({
    mutationFn:deleteEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["events"], refetchType:"none"})
      navigate("../")
    }
  })

  function callDeleteEvent(){
    mutate({id})
  }

  if(isLoading){
    return <LoadingIndicator/>
  }

  if(isError){
    return <ErrorBlock title={"event not found"} message={error.info?.message || "Something went wrong"}/>
  }

  function handleDelete(){
    setIsDeleting(true)
  }

  function cancelDelete(){
    setIsDeleting(false)
  }

 

  return (
    <>
    {isDeleting && (
        <Modal onClose={cancelDelete}>
        <h2>Are you sure?</h2>
        <p>this action can't be undone</p>
        <div className='form-actions'>
          {isPending && "deleting..."}
          {!isPending && (
            <>
              <button onClick={cancelDelete} className='button-text'>cancel</button>
              <button onClick={callDeleteEvent} className='button'>delete</button>
            </>
          )}

        </div>
        {isDeletionError && "Something went wrong"}
      </Modal>
    )}

      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={"http://localhost:3000/"+data.image} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{new Date(data.date).toLocaleDateString('en-US',{month:"short", day:"numeric", year:"numeric"})} @ {data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </article>
    </>
  );
}
