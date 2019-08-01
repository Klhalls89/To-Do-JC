import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer'
import Form from '../Form/Form'

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
  };

  fetchTodos = () => {
    const url = 'http://localhost:8004/api/todos'
    fetch(url)
      .then(response => response.json())
      .then(data => this.setTodos(data))
      .catch(error => this.setError(error))
  };

  setTodos = (todos) => {
    this.setState({todos})
  };

  setError = (error) => {
    this.setState({error})
  };

  render() {
    const { todos, error } = this.state
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <Form />
        { todos.length && <CardContainer todos={todos} /> }
      </div>
    )
  };
};

export default App;

