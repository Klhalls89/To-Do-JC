import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  };

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <CardContainer />
      </div>
    )
  };
};

export default App;

