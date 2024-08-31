import { useNavigate,useNavigation,useActionData, Form, json, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigation  = useNavigation()
  const navigate = useNavigate();
  const actionData = useActionData()

  const isSubmitting = navigation.state === "submitting"

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {actionData && actionData.errors && Object.values(actionData.errors).map(err=>(
        <li key={err}>
          {err}
        </li>
      ))}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ?event.title:""}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ?event.image:""}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ?event.date:""}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ?event.description:""}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting?"Submitting":"Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;


export async function action({request, params}){
  const data = await request.formData()
  
  const eventData = {
    title:data.get('title'),
    date:data.get('date'),
    description:data.get('description'),
    image:data.get('image'),
  }

  let url = "http://localhost:8080/events"
  if(request.method==="PATCH"){
    url = "http://localhost:8080/events/" + params.eventId
  }

  const response = await fetch(url,{
    method:request.method,
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(eventData)
  })

  if(response.status===422){
    return response
  }

  if(!response.ok){
    throw json({message:"could not add event"},{status:500})
  }

  return redirect("/events")
}
