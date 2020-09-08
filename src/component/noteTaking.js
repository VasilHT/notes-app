import React, { Component } from "react";

class NoteTaking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(event) {
    event.preventDefault();
    const newItem = {
      note: this.theNote.value,
      //we need something unique data to manege (delete and edit) your notes, so this is basic way to use unique id
      id: Date.now(),
    };

    this.setState({
      items: [...this.state.items, newItem],
    });

    localStorage.setItem("notes", JSON.stringify(this.state.items));
    this.theNote.value = "";
  }

  //delete function added
  deleteSong = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>My notes</h1>
        </header>
        <div className="main-content">
          <ul>
            {this.state.items.map((val) => (
              // you have to use key for every single item, this point is very important
              <li key={val.id}>
                {val.note}
                <button onClick={() => this.deleteSong(val.id)}>X</button>
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
