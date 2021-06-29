import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Fab } from "@material-ui/core";
function Note(props) {
  // create a function that is going to trigger a function
  // that gets passed over from the props that will delete
  // this note from the array
  function handleClick() {
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}><DeleteIcon /></Fab>
    </div>
  );
}

export default Note;
