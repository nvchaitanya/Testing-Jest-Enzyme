import React from 'react';

import SignupForm from './component/SignUpForm/SignupForm';
import {shallow,mount} from 'enzyme';
import LoginComponent from './pages/LoginPage/LoginComponent';

describe("Test signup form component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SignupForm />);
    });

    test("renders signup form without crashing", () => {
        expect(wrapper.exists()).toBe(true);
    });

    test("render the title of the component", () => {
        expect(wrapper.find("#application-title").text()).toContain("Welcome to Github Connect Registration");
    });

    test("render the state value of the firstname field", () => {
        expect(wrapper.find("#firstname").text()).toContain("");
    });

    test("render the state value of theLastname field", () => {
        expect(wrapper.find("#lastname").text()).toContain("");
    });

    test("render the state value of the Gender field", () => {
        expect(wrapper.find("#gender").text()).toContain("");
    });

    test("render the state value of the Email field", () => {
        expect(wrapper.find("#email").text()).toContain("");
    });

    test("render the state value of the MobileNumber field", () => {
        expect(wrapper.find("#mobile-number").text()).toContain("");
    });

    it("First name field should be defined on input change", () => {
        const form = wrapper.find('#firstname');
        form.props().onChange({target: {
           name: 'myName',
           value: 'myValue'
        }});
        expect(wrapper.find('#firstname')).toBeDefined();
    });

    it("Last name field should be defined on input change", () => {
        const form = wrapper.find('#lastname');
        form.props().onChange({target: {
           name: 'myName',
           value: 'myValue'
        }});
        expect(wrapper.find('#lastname')).toBeDefined();
    });

    it("Email field should be defined on input change", () => {
        const form = wrapper.find('#email');
        form.props().onChange({target: {
           name: 'email',
           value: 'chathan@gmail.com'
        }});
        expect(wrapper.find('#email')).toBeDefined();
    });

    it("Gender field should be defined on input change", () => {
        const form = wrapper.find('#gender');
        form.props().onChange({target: {
           name: 'gender',
           value: 'male'
        }});
        expect(wrapper.find('#gender')).toBeDefined();
    });

    it("Mobile number field should be defined on input change", () => {
        const form = wrapper.find('#mobile-number');
        form.props().onChange({target: {
           name: 'mobile',
           value: 9889088766,
        }});
        expect(wrapper.find('#mobile-number')).toBeDefined();
    });

    test("render the button component",() => {
        expect(wrapper.find("#signup-btn").text()).toEqual("Signup");
    });

    test("render the Login hyperlink", () => {
        expect(wrapper.find("p span").text()).toEqual("Login");
    });
});