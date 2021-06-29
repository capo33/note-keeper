import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
// import existingNotes from "../existingNotes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((previousNote) => {
      return [...previousNote, newNote];
    });
  }

  // this function needs the id of the note that needs to be deleted
  function deleteNote(id) {
    setNotes((previousNote) => {
      return previousNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {existingNotes.map((note) => {
        return (
          <Note
            key={note.key}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })} */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* <Footer /> */}
    </div>
  );
}
export default App;
