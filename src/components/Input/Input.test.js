import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

test('input component renders to page', () => {
    const wrapper = shallow(<Input />);
    const component = wrapper.find(`[data-test="component-input"]`)
    expect(component.length).toBe(1);
})
