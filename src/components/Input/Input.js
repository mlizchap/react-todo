import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = { input: '' }
    }

    render() {
        return (
            <form data-test="component-input">
                <input 
                    data-test="input" 
                    value={this.state.input}
                    onChange={(e) => this.setState({ input: e.target.value})}
                />
                <button 
                    data-test="submitBtn"
                    onClick={this.handleSubmit}
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default Input;

