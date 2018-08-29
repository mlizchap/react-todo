import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = { input: '' }
        this.inputBox = React.createRef();
    }

    render() {
        return (
            <form
                data-test="component-input"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.props.handleSubmit(this.state.input);
                }} 
                >
                <input 
                    ref={this.inputBox}
                    data-test="input" 
                    value={this.state.input}
                    onChange={(e) => this.setState({ input: e.target.value})}
                />
                <button 
                    data-test="submitBtn"
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default Input;

