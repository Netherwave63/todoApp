import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import ToDoList from "./index";

const props = {
  todos: [
    { id: 1, todo: "todo1" },
    { id: 2, todo: "todo2" }
  ]
};

describe("ToDoList component", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ToDoList {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("renders two items in list", () => {
    const wrapper = shallow(<ToDoList {...props} />);
    expect(wrapper.find("li").length).toBe(2);
  });

});