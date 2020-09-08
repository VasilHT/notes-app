import React, { Component } from "react";

class NoteTaking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: JSON.parse(localStorage.getItem("notes")),
    };
    this.addNote = this.addNote.bind(this);
  }

  addNote(e) {
    e.preventDefault();
    const data = localStorage.getItem("notes");
    const newItem = {
      note: this.theNote.value,
      //we need something unique data to manege (delete and edit) your notes, so this is basic way to use unique id
      id: Date.now(),
    };
    if (data === null) {
      let items = [];
      items.push(newItem);
      localStorage.setItem("notes", JSON.stringify(items));
    } else {
      let items = JSON.parse(localStorage.getItem("notes"));
      items.push(newItem);
      localStorage.setItem("notes", JSON.stringify(items));
    }

    this.setState({
      items: JSON.parse(localStorage.getItem("notes"))
    });

    this.theNote.value = "";
  }

  //delete function added
  deleteNote = (id) => {
    let updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: updatedItems,
    });
    localStorage.setItem("notes", JSON.stringify(updatedItems));
  };

  render() {
    const myitems = this.state.items;
    return (
      <div>
        <header>
          <h1>My notes</h1>
        </header>
        <div className="main-content">
          <ul>
            {myitems.length === 0
              ? (<h2>there no notes yet</h2>)
              : myitems.map((val) => (
                  // you have to use key for every single item, this point is very important
                  <li key={val.id}>
                    {val.note}
                    <button onClick={() => this.deleteNote(val.id)}>X</button>
                  </li>
                ))}
          </ul>
        </div>
        <footer>
          <form onSubmit={this.addNote}>
            <textarea
              placeholder="Enter your note here"
              ref={(note) => (this.theNote = note)}
              required
            />
            <button type="submit">ADD NEW</button>
          </form>
        </footer>
      </div>
    );
  }
}

export default NoteTaking;
