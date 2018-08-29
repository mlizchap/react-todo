import React, { Component } from 'react';

import Input from '../Input/Input';
import Todo from '../Todo/Todo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { todos: [] }
    }

    submitTodo = (todo) => {
        this.setState({ todos: [...this.state.todos, {name: todo, completed: false }]})
    }

    render() {
        return (
            <div data-test="component-app">
                <Input handleSubmit={(todo) => this.submitTodo(todo)} />
                {this.state.todos.map((todo) => {
                    return <Todo key={todo} name={todo.name} completed={todo.completed} data-test="todo" />
                })}
            </div>
        );
    }
}

export default App;