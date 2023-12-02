import { render, screen,fireEvent,waitFor } from '@testing-library/react';
import App from './App';
import TodoList from "./TodoComponent/TodoList";
import BmiCalc from './BMICalculator/BmiCalc';
 

test('renders the TodoList component', () => {
  render(<App />);
  const todoListElement = screen.getByTestId('todo-list'); // assuming you have a test ID on your TodoList component
  expect(todoListElement).toBeInTheDocument();
});




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
    fireEvent.change(getByPlaceholderText('Add the todo...'),{target:{value:'Task to Edit'}});
    //editing
    fireEvent.click(getByText('Edit'));
    //edited text populated in the input field
    expect(getByPlaceholderText('Add the todo...').value).toBe('Task to Edit');});

test('delete the task',()=>{
    const {queryByText} = render(<TodoList/>);
    //delete function
    fireEvent.click(queryByText('Delete'));
    expect(queryByText('task deleted')).toBeNull();
})

test('renders BmiCalc Component',()=>{
  //header text
  const {getByText,getByLabelText} = render(<BmiCalc/>)
  expect(getByText("Let's Check the BMI")).toBeInTheDocument();

  //onchange and label
  const inputHeight = getByLabelText('Height (in cm):');

  fireEvent.change(inputHeight,{target:{value:'100'}});
  expect(inputHeight.value).toBe('100')

  const inputWeight = getByLabelText('Weight (in cm):');

  fireEvent.change(inputWeight,{target:{value:'100'}});
  expect(inputWeight.value).toBe('100')
 });


test('render the BMI calculate function',()=>{
  const {queryByText}= render(<BmiCalc/>);
  fireEvent.click(queryByText('Lets Go'));
  expect(queryByText('getting Result')).toBeNull();
  expect(queryByText(100)).toBeNull()
})