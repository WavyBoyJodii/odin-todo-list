// const ToDo = (title, description, date, priority) => {
//   let checked = false;
//   const toggleChecked = () => {
//     checked === false ? (checked = true) : (checked = false);
//   };
//   return { title, description, date, priority, checked, toggleChecked };
// };
class ToDo {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.checked = false;
  }

  togglechecked() {
    if (this.checked === false) {
      return (this.checked = true);
    }
    return (this.checked = false);
  }
}

// export const makeTodo = (titleValue, descValue, dateValue, priorityValue) => {
//   const task = ToDo(titleValue, descValue, dateValue, priorityValue);
//   return task;
// };

export const makeTodo = new ToDo();
