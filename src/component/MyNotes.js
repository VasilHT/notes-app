import React, { useState, useEffect } from "react";
import Form from "./Form";

const MyNotes = () => {
  //state of notes
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));

  // when notes array changed, this function runs
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // add new note
  const addNotes = (content) => {
    setNotes([...notes, { content, id: Date.now() }]);
  };

  //delete selected note
  const deleteNotes = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  return (
    <>
      <header>
        <h1>My notes</h1>
      </header>
      <div className="main-content">
        <ul>
          {notes === null || notes.length === 0 ? (
            <h2>there is no notes yet</h2>
          ) : (
            notes.map((item) => {
              return (
                <li key={item.id}>
                  {item.content}
                  <button onClick={() => deleteNotes(item.id)}>x</button>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <footer>
        <Form addNotes={addNotes} />
      </footer>
    </>
  );
};

export default MyNotes;
