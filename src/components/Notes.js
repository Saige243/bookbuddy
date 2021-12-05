import { useEffect, useState } from "react";
import { Button, Form, Alert, Card, Container, Col, Row, InputGroup, FormControl } from 'react-bootstrap'

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  return (
    <div>
      <Form onSubmit={handleFormSubmit} value={todo}
        onChange={handleInputChange}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example text area</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button className="mt-2" variant="primary" type="submit">
          Submit
        </Button>
        </Form.Group>
      </Form>
      
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <Button onClick={() => handleDeleteClick(todo.id)}>X</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

