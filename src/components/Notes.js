'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = require('react');
const react_bootstrap_1 = require('react-bootstrap');
const react_fontawesome_1 = require('@fortawesome/react-fontawesome');
const free_solid_svg_icons_1 = require('@fortawesome/free-solid-svg-icons');
function App() {
  const [todos, setTodos] = (0, react_1.useState)(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = (0, react_1.useState)('');
  const [inputvalue, setInputValue] = (0, react_1.useState)('');
  function handleUserInput(e) {
    setInputValue(e.target.value);
  }
  function resetInputField() {
    setInputValue('');
  }
  (0, react_1.useEffect)(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  function handleInputChange(e) {
    setTodo(e.target.value);
  }
  function handleFormSubmit(e) {
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
  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }
  return (
    <div>
      <react_bootstrap_1.Form
        onSubmit={handleFormSubmit}
        value={todo}
        onChange={handleInputChange}
      >
        <react_bootstrap_1.Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        ></react_bootstrap_1.Form.Group>
        <react_bootstrap_1.Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <react_bootstrap_1.Form.Label>
            Thoughts & Things:
          </react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control
            as="textarea"
            value={inputvalue}
            onChange={handleUserInput}
            rows={3}
          ></react_bootstrap_1.Form.Control>
          <react_bootstrap_1.Button
            style={{ backgroundColor: '#97D9E1', border: 'none' }}
            onClick={resetInputField}
            className="mt-2"
            variant="primary"
            type="submit"
          >
            <strong>Submit</strong>
          </react_bootstrap_1.Button>
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <react_bootstrap_1.Button
              variant="link"
              size="sm"
              onClick={() => handleDeleteClick(todo.id)}
            >
              <react_fontawesome_1.FontAwesomeIcon
                icon={free_solid_svg_icons_1.faTrash}
              />
            </react_bootstrap_1.Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App();
