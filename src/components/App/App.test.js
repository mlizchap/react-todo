import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('renders list items when there is items as state', () => {
    const todos = [{name: 'todo 1', completed: false}, {name: 'todo 2', completed: false}]
    const wrapper = shallow(<App />);
    wrapper.setState({todos});
    expect(wrapper.find(`[data-test="todo"]`).length).toBe(2);
});

test('renders no list items when there is no items as state', () => {
    const todos = []
    const wrapper = shallow(<App />);
    wrapper.setState({todos});
    expect(wrapper.find(`[data-test="todo"]`).length).toBe(0);
});


