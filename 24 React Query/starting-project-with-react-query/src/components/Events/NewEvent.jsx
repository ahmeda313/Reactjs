import { Link, useNavigate } from 'react-router-dom';
import {useMutation} from "@tanstack/react-query"

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent } from '../../utils/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import {queryClient} from "../../utils/http.js"

export default function NewEvent() {
  const navigate = useNavigate();
  
  const {mutate, isPending, isError, error} = useMutation({
    mutationFn:createNewEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['events']})
      navigate('../')
    }
  })

  function handleSubmit(formData) {
    mutate({event:formData})

  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>)}
      </EventForm>
      {isError && <ErrorBlock title={"could not create event"} message={error.info?.message||"please check your inputs"}/>}
    </Modal>
  );
}
