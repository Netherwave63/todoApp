import React from 'react';
import ReactDOM from 'react-dom';
import ToDoForm from "./index";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToDoForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});