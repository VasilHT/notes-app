import React, { useState } from "react";

const Form = ({ addNotes }) => {
  //state of new content data
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    //stop refresh the page when click submit button
    e.preventDefault();

    //call addNote fuction
    addNotes(content);

    //clean inside of textarea
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add New</label>
      <textarea
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">ADD NEW</button>
    </form>
  );
};

export default Form;
