import React from 'react';
import Todo from './Todo';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
    const props = { name: "do this", completed: false }
    wrapper = shallow(<Todo {...props} />);
})

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
    it('when edit mode is false, the read mode todo list renders', () => {
        wrapper.setState({ edit: false });
        const todoReadMode = wrapper.find(`[data-test="read-mode"]`);
        expect(todoReadMode.length).toBe(1);
    })
    
    it('when edit mode is true, the read mode todo list renders', () => {
        wrapper.setState({ edit: true });
        const todoEditMode = wrapper.find(`[data-test="edit-mode"]`);
        expect(todoEditMode.length).toBe(1);
    })
})

describe('hovering over todo list', () => {
    it('buttons appear when toodo list is hovered over', () => {        
        wrapper.find(`[data-test="read-mode"]`).simulate('mouseover');
        const editDeleteBtns = wrapper.find(`[data-test="edit-delete-btns"]`);
        expect(editDeleteBtns.length).toBe(1);
    })
    it('buttons appear when toodo list is hovered over', () => {
        wrapper.find(`[data-test="read-mode"]`).simulate('mouseleave');
        const editDeleteBtns = wrapper.find(`[data-test="edit-delete-btns"]`);
        expect(editDeleteBtns.length).toBe(0);
    })
})

describe('switching between modes', () => {
    it('when the "edit" button is clicked, the read mode switches to edit mode', () => {
        wrapper.setState({ showBtns: true });
        wrapper.find(`[data-test="edit-btn"]`).simulate('click');
        const todoEditMode = wrapper.find(`[data-test="edit-mode"]`);
        expect(todoEditMode.length).toBe(1);
    })
    it('when the "cancel" btn is clicked, the edit mode changes to read mode', () => {
        wrapper.setState({ showBtns: true, edit: true });
        wrapper.find(`[data-test="cancel-btn"]`).simulate('click');
        const todoReadMode = wrapper.find(`[data-test="read-mode"]`);
        expect(todoReadMode.length).toBe(1);
    })
})



