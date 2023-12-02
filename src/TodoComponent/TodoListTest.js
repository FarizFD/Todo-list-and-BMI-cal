import React from "react";
import { fireEvent,render } from "@testing-library/react";
import TodoList from "./TodoList";


test('renders TodoList Component',()=>{
    const {getByText,getByPlaceholderText} = render (<TodoList/>);

    expect(getByText('Get Things Done!!')).toBeInTheDocument();
    expect(getByPlaceholderText('Add the todo...')).toBeInTheDocument();
    expect(getByText('Add Task')).toBeInTheDocument();

   
})


test('onchange and onclick function rendering',()=>{
    const {getByPlaceholderText,getByText} = render(<TodoList/>);
    //add the task
     //checking inputfields
     fireEvent.change(getByPlaceholderText('Add the todo...'),{target:{value: 'New Task'}});

     //checking for button click
     fireEvent.click(getByText('Add Task'));
 
     //checking if add task string rendered or not
     expect(getByText('New Task')).toBeInTheDocument();
});

test('Editing the task',()=>{
    //add the task
    const {getByPlaceholderText,getByText} = render(<TodoList/>);
    fireEvent.change(getByPlaceholderText('Add the todo ...'),{target:{value:'Task to  Edit'}});
    //editing
    fireEvent.click(getByText('Edit'));
    //edited text populated in the input field
    expect(getByPlaceholderText('Add the todo...').value).toBe('task to Edit')
});

test('delete the task',()=>{
    const {queryByText} = render(<TodoList/>);
    //delete function
    fireEvent.click(queryByText('delete'));
    expect(queryByText('task deleted')).toBeNul();
})