import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  useEffect(()=>{
    const timer = setTimeout(onConfirm,3000)

    return ()=>{
      console.log("clean up function")
      clearTimeout(timer)
    }
  },[onConfirm])


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar/>
    </div>
  );
}
