import classNames from "classnames";

export default function Item(props: any) {
  const { title, complete } = props;
  const titleClassName = classNames("TodoItem__title", {
    "TodoItem__title--complete": complete
  });

  const handleRemoveButtonClick = () => {
    const { onTodoItemRemoved, id } = props;
    onTodoItemRemoved(id);
  };

  const handleTodoTitleClick = () => {
    const { onTodoItemToggled, id } = props;
    onTodoItemToggled(id);
  };

  return (
    <div className="TodoItem">
      <div onClick={handleTodoTitleClick} className={titleClassName}>
        {title}
      </div>
      <div onClick={handleRemoveButtonClick} className="TodoItem__remove">
        X
      </div>
    </div>
  );
}
