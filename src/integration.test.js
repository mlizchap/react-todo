import React from 'react';
import { mount, render } from 'enzyme';
import { stub } from 'sinon';


import App from './components/App/App';
import Input from './components/Input/Input';




it('when the user clicks submit, a new todo is rendered to the screen', () => {
    const appComponent = mount(<App />);
    const inputComponent = appComponent.find(`[data-test="component-input"]`);
    
    const input = appComponent.find(`[data-test="input"]`);
    input.simulate('change', { target: { value: 'abc' } });

    inputComponent.simulate("submit")
    const todos = appComponent.find(`[data-test="todo"]`);
    expect(todos.length).toBe(1)
})

