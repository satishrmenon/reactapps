//How do we virtually render our component..
//i.e. instead of accessing it on browser, we 
//are accessing it via code.
//Hence, we use react-test-renderer 

import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme'
import { wrap } from 'module';
import toJSON from 'enzyme-to-json';
test('should render Header correctly',()=>{
    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').length).toBe(1);
    expect(toJSON(wrapper)).toMatchSnapshot();
})