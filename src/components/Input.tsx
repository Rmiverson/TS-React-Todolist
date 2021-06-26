export default function Input(props: any) {
  const handleKeyPress = (e: any) => {
    const key = e.key;
    const value = e.target.value;
    if (key === "Enter") {
      e.target.value = "";
      props.onTodoItemAdded(value);
    }
  };

  return <input type="text" onKeyPress={handleKeyPress} />;
}
