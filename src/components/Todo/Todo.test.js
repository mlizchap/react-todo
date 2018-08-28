import React from 'react';
import Todo from './Todo';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';

test('the todo list has a name prop (string )and a completed prop (boolean)', () => {
    const propError = checkPropTypes(
        Todo.propTypes,
        { name: 'do something', completed: false },
        'prop',
        Todo 
    );
    expect(propError).toBeUndefined;
});

describe('read or edit mode renders based on state', () => {
    let wrapper;
    beforeEach(() => {
        const props = { name: "do this", completed: false }
        wrapper = shallow(<Todo {...props} />);
    })
    test('when edit mode is false, the read mode todo list renders', () => {
        wrapper.setState({ edit: false });
        const todoReadMode = wrapper.find(`[data-test="read-mode"]`);
        expect(todoReadMode.length).toBe(1);
    })
    
    test('when edit mode is true, the read mode todo list renders', () => {
        wrapper.setState({ edit: true });
        const todoEditMode = wrapper.find(`[data-test="edit-mode"]`);
        expect(todoEditMode.length).toBe(1);
    })
})

describe('hovering over todo list', () => {
    test('buttons appear when toodo list is hovered over', () => {
        const props = { name: "do this", completed: false }
        const wrapper = shallow(<Todo {...props} />).setState({ showBtns: false })
        
        wrapper.find(`[data-test="read-mode"]`).simulate('mouseover');
        const editDeleteBtns = wrapper.find(`[data-test="edit-delete-btns"]`);

        expect(editDeleteBtns.length).toBe(1);
    })
    test('buttons appear when toodo list is hovered over', () => {
        const props = { name: "do this", completed: false }
        const wrapper = shallow(<Todo {...props} />).setState({ showBtns: true })
        
        wrapper.find(`[data-test="read-mode"]`).simulate('mouseleave');
        const editDeleteBtns = wrapper.find(`[data-test="edit-delete-btns"]`);

        expect(editDeleteBtns.length).toBe(0);
    })
})


