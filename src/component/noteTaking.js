import React, { Component } from "react";

class NoteTaking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.addNote = this.addNote.bind(this);
  }

  addNote(event) {
    if (this.theTitle.value !== "") {
      var newItem = {
        title: this.theTitle.value,
        note: this.theNote.value,
      };
    }

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem),
      };
    });

    this.theNote.value = "";
    this.theTitle.value = "";

    console.log(this.state.items);

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Note Taking App</h1>
        </header>
        <div className="main-content">
          <ul>
            {this.state.items.map((val) => (
              <li>
                {val.title} - {val.note}
              </li>
            ))}
          </ul>
        </div>
        <footer>
          <form onSubmit={this.addNote}>
            <input
              type="text"
              placeholder="Enter the note title here"
              ref={(title) => (this.theTitle = title)}
            />
            <textarea
              placeholder="Enter your note here"
              ref={(note) => (this.theNote = note)}
            />
            <button type="submit">Add Note</button>
          </form>
        </footer>
      </div>
    );
  }
}

export default NoteTaking;
