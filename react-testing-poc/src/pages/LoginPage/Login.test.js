import React from "react";
import { shallow } from "enzyme";
import LoginComponent from "./LoginComponent";

describe("Test Login form component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginComponent />);
  });

  it("renders Login form without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Render the title of the component", () => {
    expect(wrapper.find("#login-title").text()).toBe(
      "Welcome to Github Connect"
    );
  });

  it("render the UserId input field with initial state value", () => {
    expect(wrapper.find("input[name='userId']").text()).toEqual("");
  });

  it("render the Password input field with the initial state value", () => {
    expect(wrapper.find("input[name='password']").text()).toEqual("");
  });

  it("UserId field should be defined on input change", () => {
    const form = wrapper.find("input[name='userId']");
    form.props().onChange({
      target: {
        name: "userId",
        value: "myValue@gmail.com",
      },
    });
    expect(wrapper.find("input[name='userId']")).toBeDefined();
  });

  it("First name field should be defined on input change", () => {
    const form = wrapper.find("input[name='password']");
    form.props().onChange({
      target: {
        name: "password",
        value: "test123",
      },
    });
    expect(wrapper.find("input[name='password']")).toBeDefined();
  });

  it("render the Login button component", () => {
    expect(wrapper.find("#login-btn").text()).toEqual("Login");
  });

  it("render the Login hyperlink", () => {
    expect(wrapper.find("p span").text()).toEqual("SignUp");
  });

  it("should render input for userId", () => {
    const wrapper = shallow(<LoginComponent userId="" onChange={() => {}} />);
    expect(wrapper.find("input[name='userId']").exists()).toBe(true);
  });

  it("should render input for password", () => {
    const wrapper = shallow(<LoginComponent password="" onChange={() => {}} />);
    expect(wrapper.find("input[name='password']").exists()).toBe(true);
  });

});
