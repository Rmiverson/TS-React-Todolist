import Item from "./Item";

export default function List(props: any) {
  const { todos, onTodoItemRemoved, onTodoItemToggled } = props;

  return (
    <div className="TodoList">
      {todos.length > 0
        ? todos.map((todo: any) => (
            <Item
              key={todo.id}
              onTodoItemRemoved={onTodoItemRemoved}
              onTodoItemToggled={onTodoItemToggled}
              {...todo}
            />
          ))
        : "The To-Do List is empty"}
    </div>
  );
}
