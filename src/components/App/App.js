import React, { Component } from 'react';
import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            todos: []
         };
    }
    submitTodo = (todo) => {
        this.setState({ todos: [...this.state.todos, todo]})
    }
    handleClick = (name) => {
        const todos = this.state.todos.map(todo => {
            return (todo.name === name) ? {...todo, completed: !todo.completed} : todo 
        })
        this.setState({ todos });
    }
    render() {
        return (
            <div>
                <Input handleSubmit={this.submitTodo}/>
                <TodoList todos={this.state.todos} handleClick={this.handleClick} />
            </div>
        );
    }
}

export default App;

