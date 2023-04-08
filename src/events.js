import { makeTodo } from './todo';
import { addToProject, projectslist, defaultProject } from './projects';
import { priorityValue } from './forms';

let chosenProject = '';

// export const createToDo = (event) => {
//   event.PreventDefault();
//   const todo = makeTodo(title.value, desc.value, date.value, priorityValue());
//   checkChosenProject(todo);
// };

export const checkChosenProject = (x) => {
  if (chosenProject === '') {
    addToProject(x, defaultProject);
  } else {
    addToProject(x, chosenProject);
  }
};
export const updateChosenProject = (x) => {
  const index = projectslist.findIndex((project) => project.title === x.title);
  console.log(x);
  console.log(index);
  chosenProject = projectslist[index];
};
