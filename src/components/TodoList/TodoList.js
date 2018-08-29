import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        //return <div />
        return this.props.todos.map((i) => {
            return (
                <div key={i.name} onClick={() => this.props.handleClick(i.name)} style={{ textDecoration: i.completed ? 'line-through' : 'none' }}>
                    <div >{i.name}</div>
                </div>
            )
        })
    }
}

export default TodoList;