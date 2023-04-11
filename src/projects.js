import { makeTodo } from './todo';

const buyGroceries = makeTodo(
  'Buy Groceries',
  'Need fruits and veggies',
  '2023-11-17',
  'high'
);

export const defaultProject = {
  title: 'default',
  list: [buyGroceries],
};

export const projectslist = [defaultProject];

let chosenProject = '';

const Project = (title) => {
  const list = [];
  return { title, list };
};

export const makeNewProject = (name) => {
  const project = Project(name);
  projectslist.push(project);
  return project;
};

export const addToProject = (todoItem, x) => {
  x.list.push(todoItem);
};

export const checkChosenProject = (x) => {
  if (chosenProject === '') {
    addToProject(x, defaultProject);
  } else {
    addToProject(x, chosenProject);
  }
};

export const whichProject = () => {
  if (chosenProject === '') {
    chosenProject = defaultProject;
  } else {
    return chosenProject;
  }
};

export const updateChosenProject = (x) => {
  const index = projectslist.findIndex((project) => project.title === x.title);
  console.log(x);
  console.log(index);
  chosenProject = projectslist[index];
};
