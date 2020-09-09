import React, { Component } from "react";

class NoteTaking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //we have started to use local storage for state
      items: JSON.parse(localStorage.getItem("notes")),
    };
    this.addNote = this.addNote.bind(this);
  }

  addNote(e) {
    e.preventDefault();
    //short naming for get local storage data
    const data = localStorage.getItem("notes");
    const newItem = {
      note: this.theNote.value,
      id: Date.now(),
    };

    //if local storage is undefined first we need to creat array and then we can add new item inside of it
    if (data === null) {
      let items = [];
      items.push(newItem);
      localStorage.setItem("notes", JSON.stringify(items));
      //if local storeage is difined we can add new item inside of it
    } else {
      let items = JSON.parse(localStorage.getItem("notes"));
      items.push(newItem);
      localStorage.setItem("notes", JSON.stringify(items));
    }

    //now we can update state from local storage
    this.setState({
      items: JSON.parse(localStorage.getItem("notes")),
    });

    this.theNote.value = "";
  }

  deleteNote = (id) => {
    //filter deleted item from array
    let updatedItems = this.state.items.filter((item) => item.id !== id);
    //then update state
    this.setState({
      items: updatedItems,
    });
    //and update local storage
    localStorage.setItem("notes", JSON.stringify(updatedItems));
  };

  render() {
    //short naming for state items
    const items = this.state.items;
    return (
      <div>
        <header>
          <h1>My notes</h1>
        </header>
        <div className="main-content">
          <ul>
            {/* if items array has been null or empty, shows a message */}
            {items === null || items.length === 0 ? (
              <h2>there is no notes yet</h2>
            ) : (
              items.map((val) => (
                <li key={val.id}>
                  {val.note}
                  <button onClick={() => this.deleteNote(val.id)}>X</button>
                </li>
              ))
            )}
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
