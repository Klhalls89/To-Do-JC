import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
      </div>
    )
  }
}

export default App;

