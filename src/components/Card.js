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

  editTodo = (e) => {
    const { putTodo } = this.props
    this.setState({description: e.target.value}, () => putTodo(this.state))
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
      <div className="Card"> 
        <input className="style-description" type="text" value={description} onChange={(e) => this.editTodo(e)}></input>
        {done === true && <button onClick={() => this.toggleTodo()}><i className="far fa-check-square"></i></button>}
        {done === false && <button onClick={() => this.toggleTodo()}><i className="far fa-square"></i></button>}
        <button onClick={() => removeTodo(id)}><i className="fas fa-times"></i></button>
      </div>
  )};
};

export default Card;