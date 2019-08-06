import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
  };

  handleChange = (e) => {
    this.setState({description: e.target.value})
  }

  handleSubmit = (e) => {
    const { description } = this.state
    e.preventDefault()
    this.props.addTodo(description)
    this.setState({description: ''})
  }


  render () {
    const { description } = this.state
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h2>add to do</h2>
        <input maxlength="30" onChange={(e) => this.handleChange(e)} type="text" value={description} />
        <button onClick={(e) => this.handleSubmit(e)}>Submit ToDo</button>
      </form>
    )
  };
};

export default Form;