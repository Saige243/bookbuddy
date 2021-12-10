import { useEffect, useState } from "react";
import { Button, Form, Alert, Card, Container, Col, Row, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
  const [field, setField] = useState("");




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
    return field;
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
        <Form.Label>Thoughts & Things:</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button className="mt-2" variant="primary" type="submit">
          Submit
        </Button>
        </Form.Group>
      </Form>
      
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <Button variant="link" size="sm" onClick={() => handleDeleteClick(todo.id)}><FontAwesomeIcon icon={faTrash} /></Button>
          </li>
        ))}
      </ul>
    </div>
  );
}






{/* <ul className="todo-list">
        {todos.map((todo) => (
          <div style={{ display: "grid" }}>
            <li key={todo.id}>
              {todo.text} 
            </li> <Button style={{ display: "grid", justifyItems: "end" }} variant="link" size="sm" onClick={() => handleDeleteClick(todo.id)}><FontAwesomeIcon icon={faTrash} /></Button>
          </div>
        ))}
      </ul>
    </div> */}