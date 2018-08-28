import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import ReadMode from '../ReadMode/ReadMode';
import EditMode from '../EditMode/EditMode';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = { edit: false }
    }

    renderReadMode = () => <ReadMode data-test="component-read-mode" /> 

    renderEditMode = () => <EditMode data-test="component-edit-mode" />

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