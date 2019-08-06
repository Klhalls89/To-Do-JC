import React, { Component } from 'react';

class Card extends Component {
  constructor({todo}) {
    super();
    this.state = {
      description: todo.description,
      done: todo.done,
      id: todo.id
    }
  }

  editTodo = () => {

  }

  toggleTodo = () => {
    const { putTodo } = this.props
    const { done } = this.state
    this.setState({done: !done}, () => putTodo(this.state))
  }
      
  render () {
    const { removeTodo } = this.props
    const { id, done, description } = this.state
  
    return (
      <div> 
        <p>{description}</p>
        {done === true && <button onClick={() => this.toggleTodo()}><i className="far fa-check-square"></i></button>}
        {done === false && <button onClick={() => this.toggleTodo()}><i className="far fa-square"></i></button>}
        <button onClick={() => removeTodo(id)}><i className="fas fa-times"></i></button>
        <button onClick={() => this.editTodo(id)}><i className="fas fa-pencil-alt"></i></button>
      </div>
  )};
};

export default Card;