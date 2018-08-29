import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.todoItem = React.createRef();
    }
    markComplete = () => {
        this.props.handleClick(this.props.name);
    }
    render() {
        return (
            <div className="list__item" key={this.props.name} ref={this.todoItem} onClick={this.markComplete} style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>
                <div >{this.props.name}</div>
            </div>
        );
    }
}

export default Todo;

