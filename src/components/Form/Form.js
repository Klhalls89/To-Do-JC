import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      description: ''
    };
  };

  render () {
    return(
      <div>
        <form>
          <h2>Add ToDo</h2>
          <input type="text" />
          <button>Submit ToDo</button>
        </form>
      </div>
    )
  };
};

export default Form;