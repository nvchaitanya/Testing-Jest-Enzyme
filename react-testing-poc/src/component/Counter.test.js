import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

describe("Thesearethe counter example test cases", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Counter />)
    });

    it("render the counter component correctly", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("render the title of the counter",() => {
        expect(wrapper.find("h2").text()).toContain("This is Counter Example");
    });

    it("render the initial value of the counter", () => {
        expect(wrapper.find("#count-value").text()).toEqual("0")
    });

    it("render the increment value of the counteron increment button click",() => {
        wrapper.find("#increment-btn").simulate('click');
        expect(wrapper.find("#count-value").text()).toBe("1");
    });

    it("render the increment value of the counteron decrement button click",() => {
        wrapper.find("#decrement-btn").simulate('click');
        expect(wrapper.find("#count-value").text()).toBe("0");
    });

    it("The count value should be defined on increment button click",() => {
        wrapper.find("#increment-btn").simulate('click');
        expect(wrapper.find("#count-value").text()).toBeDefined();
    });

});