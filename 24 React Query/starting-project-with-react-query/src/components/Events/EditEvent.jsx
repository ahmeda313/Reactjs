import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import LoadingIndicator from "../UI/LoadingIndicator.jsx"
import { fetchEvent, updateEvent } from "../../utils/http.js"
import ErrorBlock from '../UI/ErrorBlock.jsx';
import {queryClient} from "../../utils/http.js"


export default function EditEvent() {
  const {state} = useNavigation()
  const navigate = useNavigate();
  const submit = useSubmit()
  const {id} = useParams()

  const {data, isPending, isError, error} = useQuery({
    queryKey:["events", id],
    queryFn:({signal})=>fetchEvent({signal, id}),
    staleTime:10000
  })

  // const {mutate} = useMutation({
  //   mutationFn:updateEvent,
  //   onMutate: async(data)=>{ // this data is passed from mutate() fn

  //     await queryClient.cancelQueries({ queryKey:["events",id] }) // this cancels any outgoing query like in line 16 (but that has already occurred) 
  //     const previousData = queryClient.getQueryData(["events", id]) // to save previous data
  //     queryClient.setQueryData(["events", id],data.event) // mutate passes data to the 2nd arg here. this step is setting data in ui instantly

  //     return {previousData}
  //   },
  //   onError:(error, data, context)=>{
  //     queryClient.setQueryData(["events", id],context.previousData)  // context is returned from Onmutate() fn 
  //   },
  //   onSettled:()=>{
  //     queryClient.invalidateQueries(["events", id]) // onSettled is used so that data in ui and backend are in sync
  //   }
  // })

  function handleSubmit(formData) {
    // mutate({id, event:formData})
    submit(formData, {method:"PUT"})
  }

  function handleClose() {
    navigate('../');
  }

  let content 

  // if(isPending){
  //   content = <div className='center'>
  //     <LoadingIndicator/>
  //   </div>
  // }

  if(isError){
    content = <ErrorBlock title="can't get event" message={error.info?.message}/>
  }

  if(data){
    content = (      
        <EventForm inputData={data} onSubmit={handleSubmit}>
          {state==="submitting" ?"submitting...":(
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </>
          )}

        </EventForm>
      )
  }

  return (
    <Modal onClose={handleClose}>{content}</Modal>
  );
}

export async function loader({params}){
  return queryClient.fetchQuery({
    queryKey:["events", params.id],
    queryFn:({signal})=>fetchEvent({signal, id:params.id})
  })
}

export async function action({request, params}){
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  await updateEvent({id:params.id, event:formData})
  await queryClient.invalidateQueries(["events"])
  return redirect("../")
}
