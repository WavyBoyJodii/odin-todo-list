import { makeTodo } from './todo';
import {
  contentDiv,
  frame,
  projectFrame,
  projectBody,
  frameHeader,
  frameBody,
  newToDoButton,
} from '.';
import { clearElement } from './unappend';

export const LOCAL_STORAGE_PROJECT_KEY = 'projects.projectslist';
export const LOCAL_STORAGE_CHOSEN_PROJECT_ID_KEY = 'projects.chosenProjectId';

const buyGroceries = makeTodo(
  'Buy Groceries',
  'Need fruits and veggies',
  '2023-11-17',
  'high'
);

export const defaultProject = {
  id: 1,
  title: 'default',
  list: [buyGroceries],
};

const projectslist = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)
) || [defaultProject];

let chosenProjectId = localStorage.getItem(LOCAL_STORAGE_CHOSEN_PROJECT_ID_KEY);

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectslist));
  localStorage.setItem(LOCAL_STORAGE_CHOSEN_PROJECT_ID_KEY, chosenProjectId);
}
function render() {
  clearElement(projectBody);
}

const Project = (title) => {
  const id = Date.now().toString();
  const list = [];
  return { id, title, list };
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
  if (chosenProjectId === '') {
    addToProject(x, defaultProject);
  } else {
    addToProject(x, chosenProjectId);
  }
};

export const whichProject = () => {
  if (chosenProjectId === '') {
    chosenProjectId = defaultProject.id;
  } else {
    return chosenProjectId;
  }
};

export const updateChosenProject = (x) => {
  const index = projectslist.findIndex((project) => project.title === x.title);
  console.log(x);
  console.log(index);
  chosenProjectId = projectslist[index.id];
};

export const displayProjects = (obj) => {
  for (const project of obj) {
    const disp = document.createElement('p');
    disp.textContent = `${project.title}`;
    disp.dataset.projectId = project.id;
    disp.classList.add('projectList');
    if (project.id === chosenProjectId) {
      disp.classList.add('chosen-project');
    }
    projectBody.append(disp);
  }
};

export const initProjectFrame = () => {
  projectFrame.classList.add('projectFrame');
  contentDiv.append(projectFrame);
};

export function initProjectBody() {
  projectBody.classList.add('projectBody');
  projectFrame.append(projectBody);
  makeNewProject('tester');
  displayProjects(projectslist);
  projectBody.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'p') {
      chosenProjectId = e.target.dataset.projectId;
    }
  });
}
