import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            edit: false,
        }
    }

    renderBtns = () => {
        return (
            <div data-test="edit-delete-btns">
                <button data-test="edit-btn" onClick={() => this.setState({ edit: true })}>edit</button>
                <button>delete</button>
            </div>
        )
    }

    renderReadMode = () => {
        return (
            <div data-test="read-mode"
                onMouseOver={() => this.setState({ showBtns: true })}  
                onMouseLeave={() => this.setState({ showBtns: false })}  
                style={{ color: this.props.completed ? 'gray' : 'blue'}}
            >
                {this.props.name} 
                {(this.state.showBtns) ? this.renderBtns() : null }
            </div>
        )
    }

    renderEditMode = () => {
        return (
            <div data-test="edit-mode">
                <input value={this.props.name}/>
                <button data-test="save-btn">save</button>
                <button 
                    data-test="cancel-btn"
                    onClick={() => this.setState({ edit: false })}
                >
                    cancel
                </button>
            </div>
        )
    }

    render() {
        return (!this.state.edit) 
            ? this.renderReadMode() : this.renderEditMode()
    }
}

Todo.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Todo;