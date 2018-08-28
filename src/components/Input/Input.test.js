import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

test('renders to screen', () => {
    const wrapper = shallow(<Input />);
    const component = wrapper.find(`[data-test="component-input"]`);
    expect(component.length).toBe(1);
})

test('renders an input box', () => {
    const wrapper = shallow(<Input />);
    const input = wrapper.find(`[data-test="input"]`);
    expect(input.length).toBe(1);
})

test('renders a submit button', () => {
    const wrapper = shallow(<Input />);
    const submitBtn = wrapper.find(`[data-test="submitBtn"]`);
    expect(submitBtn.length).toBe(1);
})

test('can enter text into the input', () => {
    const wrapper = shallow(<Input />);
    wrapper.setState({ input: '' });

    const input = wrapper.find(`[data-test="input"]`);
    input.simulate('change', { target: { value: 'abc' } });

    const userState = wrapper.state('input')
    expect(userState).toEqual('abc');
})


