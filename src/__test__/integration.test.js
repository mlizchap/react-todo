import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App/App';
import Input from '../components/Input/Input';

let wrapper;
beforeEach(() => {
    wrapper = mount(<App />);
});

describe('form renders to the screen', () => {
    it('app component renders a submit button to the screen', () => {
        const submitBtn = wrapper.find('.form_submitBtn');
        expect(submitBtn.length).toBe(1);
    });
    
    it('app component renders an input to the screen', () => {
        const input = wrapper.find('.form__input');
        expect(input.length).toBe(1);
    });
});

describe('state rendering todos', () => {
    it('when todo state is empty, renders no todos', () => {
        wrapper.setState({ todos: [] });
        const todos = wrapper.find('.list__item');
        expect(todos.length).toBe(0);
    });
    
    it('when there are todos in state, renders those todos', () => {
        wrapper.setState({ todos: [{name: 'thing 1', completed: false}, {name: 'thing 2', completed: false}]});
        const todos = wrapper.find('.list__item');
        expect(todos.length).toBe(2);
    });
})

it('updates state when a new todo is submitted and renders input to screen', () => {
    const userInput = 'abc';
    
    const input = wrapper.find('.form__input');
    input.simulate('change', { target: { value: userInput }});
    
    wrapper.find('.form').simulate('submit');
    const listItem = wrapper.find('.list__item')
    
    expect(wrapper.state().todos[0].name).toBe(userInput);
    expect(listItem.text()).toBe(userInput)
})





