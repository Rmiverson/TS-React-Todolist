import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: new Date().getTime(),
      title: "My Todo",
      complete: false
    }
  ]);

  const handleTodoItemAdded = (title: string) => {
    let newTodo = [
      {
        id: new Date().getTime(),
        title,
        complete: false
      }
    ];
    return setTodos((todos) => [...todos, ...newTodo]);
  };

  const handleTodoItemRemoved = (id: number) => {
    setTodos((todos) =>
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handleTodoItemToggled = (id: number) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };

  return (
    <div className="App">
      <Input onTodoItemAdded={handleTodoItemAdded} />
      <List
        todos={todos}
        onTodoItemToggled={handleTodoItemToggled}
        onTodoItemRemoved={handleTodoItemRemoved}
      />
    </div>
  );
}
