import React, { Component } from "react";

class NoteTaking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(event) {
    if (this.theNote.value !== "") {
      var newItem = {
        note: this.theNote.value,
      };
    }

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem),
      };
    });

    this.theNote.value = "";

    console.log(this.state.items);

    event.preventDefault();
  }

  removeNote(index) {
    var temp = this.state.theNote;
    temp.splice(index, 1);
    this.setState({ theNote: temp });
  }

  // button.onClick = function(){
  //   button.parentElement.remove()
  //   return;
  // };

  render() {
    return (
      <div>
        <header>
          <h1>My notes</h1>
        </header>
        <div className="main-content">
          <ul>
            {this.state.items.map((val) => (
              <li>
                {val.note}
                <button>X</button>
              </li>
            ))}
          </ul>
        </div>
        <footer>
          <form onSubmit={this.addNote}>
            <textarea
              placeholder="Enter your note here"
              ref={(note) => (this.theNote = note)}
            />
            <button type="submit">ADD NEW</button>
          </form>
        </footer>
      </div>
    );
  }
}

export default NoteTaking;
