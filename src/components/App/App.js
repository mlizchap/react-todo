import React, { Component } from 'react';

import Input from '../Input/Input';
import Todo from '../Todo/Todo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { todos: [] }
    }
    render() {
        return (
            <div data-test="component-app">
                <Input />
                {this.state.todos.map((todo) => {
                    return <Todo key={todo} name={todo} data-test="todo" />
                })}
            </div>
        );
    }
}

export default App;