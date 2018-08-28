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

test('when edit mode is false, the read mode todo list renders', () => {
    const wrapper = shallow(<Todo name="do this" completed={false} />);
    wrapper.setState({ edit: false });
    const todoReadMode = wrapper.find(`[data-test="component-read-mode"]`);
    expect(todoReadMode.length).toBe(1);
})

test('when edit mode is true, the read mode todo list renders', () => {
    const wrapper = shallow(<Todo name="do this" completed={false} />);
    wrapper.setState({ edit: true });
    const todoEditMode = wrapper.find(`[data-test="component-edit-mode"]`);
    expect(todoEditMode.length).toBe(1);
})

