import React from "react";

import renderer from "react-test-renderer";

import Hello from "./Hello";

function HelloTest() {
    return <Hello name="Paco" />
}

test("Prueba de <Hello>", () => {
    const componentHello = renderer.create(
        <HelloTest />
    );

    const treeHello = componentHello.toJSON();

    console.log(treeHello);

    //expect(treeHello).toMatchSnapshot();
});