import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();                  // because we are extending component here
    this.state = {
      todos: [],               // actually we can store our todo here  
      newTodo: ''
    }
  }
    handleChange(e) {            // handling data for text input and store the data 
      const {value} = e.target; 
      this.setState({newTodo: value});
    }
    handleClick(e) {
      e.preventDefault();
      const todos = [...this.state.todos, this.input.value]
      this.input.value = '';
      this.setState({todos});
    }
  render() {
    return(
      <div>
        <form>
        <input
        // onChange={this.handleChange.bind(this)} value={this.state.newTodo}
        ref={node => this.input = node}     // Instead of handling the state for the new todo, references the input field direct
        type='text' placeholder='new todo'/>
        <button onClick={this.handleClick.bind(this)}>create</button>
        {/* <button onClick={this.handleClick.bind(this)}>click</button>
        {this.state.nums.map(num => (<h3 key={num}>{num}</h3>))} */}
        </form>
        <ul> 
        {/* todo for each item                      */}
          {this.state.todos.map(todo => <li key={todo.toString()}>{todo}</li>)}           
        </ul>
      </div>
    );
  }
}