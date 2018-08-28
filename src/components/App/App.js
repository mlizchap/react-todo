import React, { Component } from 'react';

import Input from '../Input/Input';

class App extends Component {
    render() {
        return (
            <div data-test="component-app">
                <Input />
            </div>
        );
    }
}

export default App;