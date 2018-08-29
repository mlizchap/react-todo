import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.todoItem = React.createRef();
    }
    markComplete = () => {
        this.props.handleClick(this.props.name);
        // console.log("CHECK")
        // console.log(this.todoItem.current.style.textDecoration)
        // (this.props.complete) ? this.todoItem.current.style.textDecoration = 'line-through' :this.todoItem.current.style.textDecoration = 'line-through'
    }
    render() {
        return (
            <div key={this.props.name}  ref={this.todoItem} onClick={this.markComplete} style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>
                <div >{this.props.name}</div>
            </div>
        );
    }
}

export default Todo;

