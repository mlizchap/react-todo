import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            val: ''
        };
    }
    render() {
        return (
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                this.setState({ val: '' });
                this.props.handleSubmit({name: this.state.val, completed: false});
            }}>
                <input  
                    className="form__input"
                    value={this.state.val}
                    onChange={(e) => this.setState({ val: e.target.value })}
                />
                <button className="form_submitBtn" type="submit">+</button>
            </form>
        );
    }
}

export default Input;