import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function App(): JSX.Element {

  const [todo, setTodo] = useState('');
  const [inputvalue, setInputValue] = useState('');

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => { setInputValue(e.target.value); }

  const resetInputField = () => { setInputValue('') }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e: React.ChangeEvent<HTMLFormElement>) => { setTodo(e.target.value) }

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }
  }

  const handleDeleteClick = (id: number) => {
    const removeItem = todos.filter((todo: Todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  interface Todo {
    value: string
    id: number
    text: string
  }

  const submit_note = (
    <Button
      style={{ boxShadow: "none", backgroundColor: '#97D9E1', border: 'none' }}
      onClick={resetInputField}
      className="mt-2"
      variant="primary"
      type="submit"
    >
      <strong>Submit</strong>
    </Button>
  )

  const note_form = (
    <Form
      onSubmit={handleFormSubmit}
      value={todo}
      onChange={handleInputChange}
    >
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlInput1"
      >
      </Form.Group>
      <Form.Group style={{ textAlign: "center" }}
        controlId="exampleForm.ControlTextarea1">
        <Form.Label>Thoughts & Notes:</Form.Label>
        <Form.Control
          as="textarea"
          value={inputvalue}
          onChange={handleUserInput}
          rows={3}
        >
        </Form.Control>
        {submit_note}
      </Form.Group>
    </Form>
  )


  const display_note = (
    <ul className="todo-list">
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          {todo.text}{' '}
          <Button
            variant="link"
            size="sm"
            onClick={() => handleDeleteClick(todo.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </li>
      ))}
    </ul>
  )

  const layout = (
    <div>
      {note_form}
      {display_note}
    </div>
  )

  return layout
}
