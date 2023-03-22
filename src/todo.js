const ToDo = (title, description, date, priority) => {
  let checked = false;
  const toggleChecked = () => {
    checked === false ? (checked = true) : (checked = false);
  };
  return { title, description, date, priority, checked, toggleChecked };
};

export const makeTodo = (titleValue, descValue, dateValue, priorityValue) => {
  const task = ToDo(titleValue, descValue, dateValue, priorityValue);
  return task;
};
