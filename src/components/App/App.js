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
    this.fetchTodos();
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

  addTodo = (todoItem) => {
    const todo = {description: todoItem, id:Date.now(), done: false}
    const {todos} = this.state;
    const newTodos = [...todos, todo]
    this.setState({todos: newTodos})
    this.postTodo(todo)
  }

  postTodo = (todo) => {
    const url = 'http://localhost:8004/api/todos'
    const body = {...todo}
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body)
    }
    fetch(url, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => this.setError(error))
  };

  render() {
    const { todos, error } = this.state
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <Form addTodo={this.addTodo} />
        {error && <p>{error}</p>}
        { todos.length && <CardContainer todos={todos} /> }
      </div>
    )
  };
};

export default App;

