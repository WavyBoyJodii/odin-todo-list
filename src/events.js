import { makeTodo } from './todo';
import { whichProject, addToProject } from './projects';
import { priorityValue } from './forms';

const createToDo = (event) => {
  event.PreventDefault();
  const todo = makeTodo(title.value, desc.value, date.value, priorityValue());
  const chosenProject = whichProject();
  addToProject(todo, chosenProject);
};
