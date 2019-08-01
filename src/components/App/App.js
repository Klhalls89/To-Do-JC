import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      error: ''
    };
  };

  componentDidMount() {
    this.fetchTodos()
  }

  fetchTodos = () => {
    const url = 'http://localhost:8004/api/todos'
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

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

