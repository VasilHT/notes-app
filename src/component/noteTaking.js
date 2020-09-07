import React, { Component } from "react";

class NoteTaking extends Component {
  //state = {};
  render() {
    return (
      <div>
        <header>
          <h1>Note Taking App</h1>
        </header>
        <div className="main-content">
          <p>Our data will go here</p>
        </div>
        <footer>
          <form>
            <input type="text" />
            <textarea />
            <button type="submit">Add Note</button>
          </form>
        </footer>
      </div>
    );
  }
}

export default NoteTaking;
