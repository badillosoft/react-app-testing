import React from "react";

import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import sinon from 'sinon';

import Counter from "./Counter";

Enzyme.configure({ adapter: new Adapter() });

describe("Comprobar que funcione correctamente el contador", () => {
    it("Probar el contador <Counter />", () => {
        const component = shallow(<Counter start={10} />);

        // const setState = jest.fn();
        // const useStateSpy = jest.spyOn(React, "useState");
        // useStateSpy.mockImplementation(init => [init, setState]);

        console.log(component.props());
        console.log(component.debug());

        //const onButtonClick = sinon.spy();
        
        for(let i = 0; i < 10; i++) {
            const buttonInc = component.find(".btn-primary");
            buttonInc.simulate("click");
            // console.log(buttonInc.html());
        }

        console.log(component.debug());

        {
            const span = component.find("span");

            console.log("span", span.text());

            expect(span.text()).toEqual("10");
        }

        for(let i = 0; i < 5; i++) {
            const buttonDec = component.find(".btn-danger");
            buttonDec.simulate("click");
        }

        {
            const span = component.find("span");

            console.log("span", span.text());

            expect(span.text()).toEqual("5");
        }

        for(let i = 0; i < 15; i++) {
            const buttonDec = component.find(".btn-danger");
            buttonDec.simulate("click");
        }

        {
            const span = component.find("span");

            console.log("span", span.text());

            expect(span.text()).toEqual("0");
        }

        // expect(setState).toHaveBeenCalledWith(10);
    });
});