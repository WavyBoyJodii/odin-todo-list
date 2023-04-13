import './style.css';
import format from 'date-fns/format';
import clipboard from './img/clipboard.png';
import editIcon from './img/edit-icon.svg';
import deleteIcon from './img/delete-icon.svg';

export const contentDiv = document.getElementById('content');
export const frame = document.createElement('div');
export const frameHeader = document.createElement('div');
export const frameBody = document.createElement('div');
export const projectFrame = document.createElement('div');
export const projectBody = document.createElement('div');
export const newToDoButton = document.createElement('button');

export const LOCAL_STORAGE_PROJECT_KEY = 'projects.projectslist';
export const LOCAL_STORAGE_CHOSEN_PROJECT_ID_KEY = 'projects.chosenProjectId';
// base objects

class ToDo {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.checked = false;
    this.id = Date.now().toString();
  }

  togglechecked() {
    if (this.checked === false) {
      return (this.checked = true);
    }
    return (this.checked = false);
  }
}

export const makeTodo = () => new ToDo();

const buyGroceries = new ToDo(
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

// page init
export const initFrame = () => {
  frame.id = 'case';
  frameHeader.classList.add('frameHead');
  const clipboardArt = new Image();
  clipboardArt.src = clipboard;
  clipboardArt.classList.add('frameHeadArt');

  const frameTitle = document.createElement('p');
  frameTitle.textContent = 'To Do';

  frameHeader.append(clipboardArt, frameTitle);

  frameBody.classList.add('frameBody');
  frame.append(frameHeader, frameBody);
  contentDiv.append(frame);
};

export const initNewToDo = () => {
  newToDoButton.classList.add('newToDoButton');
  newToDoButton.textContent = 'New To Do';
  newToDoButton.addEventListener('click', openTodoForm);

  frame.append(newToDoButton);
};

export const initProjectFrame = () => {
  projectFrame.classList.add('projectFrame');
  contentDiv.append(projectFrame);
};

export function initProjectBody() {
  projectBody.classList.add('projectBody');
  projectFrame.append(projectBody);
  makeNewProject('tester');
  console.log(projectslist);
  displayProjects(projectslist);
  projectBody.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'p') {
      chosenProjectId = e.target.dataset.projectId;
      console.log(chosenProjectId);
      displayTodo();
    }
  });
}

export function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// projectBody.addEventListener('click', (e) => {
//   if (e.target.tagName.toLowerCase() === 'p') {
//     chosenProjectId = e.target.dataset.projectId;
//   }
// });

// base objects

// function addToDoToProject() {
//   let chosenProject = projectslist.find(
//     (project) => project.id === chosenProjectId
//   );
//   if (chosenProjectId === null) {
//     chosenProject = defaultProject;
//   } else {
//   }
// }

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
const checkChosenProject = (x) => {
  const chosenProject = projectslist.find(
    (project) => project.id === chosenProjectId
  );
  if (chosenProjectId === null) {
    addToProject(x, defaultProject);
  } else {
    addToProject(x, chosenProject);
  }
};
// display stuff
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

export const displayTodo = () => {
  let chosenProject = projectslist.find(
    (project) => project.id === chosenProjectId
  );
  if (chosenProjectId === null) {
    chosenProject = defaultProject;
    console.log(chosenProject);
  }
  console.log(chosenProject.list);
  chosenProject.list.forEach((todo) => {
    const disp = document.createElement('div');
    const editButton = new Image();
    editButton.src = editIcon;
    editButton.id = todo.id;
    editButton.addEventListener('click', (e) => {
      const completedTodo = chosenProject.list.find(
        (todoItem) => todoItem.id === editButton.id
      );
      chosenProject.list = chosenProject.list.filter(
        (todoItem) => todoItem.id !== editButton.id
      );
      frameBody.className = '';
      clearElement(frameBody);
      removeNewTodo();
      initEditForm(
        completedTodo.title,
        completedTodo.description,
        completedTodo.date
      );
    });
    editButton.classList.add('edit-todo');
    const deleteTodoButton = new Image();
    deleteTodoButton.src = deleteIcon;
    deleteTodoButton.id = todo.id;
    deleteTodoButton.addEventListener('click', (e) => {
      chosenProject.list = chosenProject.list.filter(
        (todoItem) => todoItem.id !== deleteTodoButton.id
      );
      clearElement(frameBody);
      console.log(chosenProject.list);
      displayTodo();
    });
    deleteTodoButton.classList.add('delete-todo');
    disp.classList.add('todo');
    disp.append(editButton, deleteTodoButton);
    console.log(todo);
    for (const key in todo) {
      if (todo.hasOwnProperty(key)) {
        if (key === 'title') {
          const title = document.createElement('p');
          title.textContent = `${todo[key]}`;
          title.classList.add('title-todo');
          disp.append(title);
        }
        if (key === 'description') {
          const description = document.createElement('button');
          description.textContent = `Details`;
          description.classList.add('desc-todo');
          disp.append(description);
        }
        if (key === 'date') {
          const date = document.createElement('p');
          const inputDate = format(new Date(todo[key]), 'MM/dd');
          date.textContent = `${inputDate}`;
          date.classList.add('date-todo');
          disp.append(date);
        }
        if (key === 'priority') {
          const priority = document.createElement('div');
          priority.textContent = `${todo[key]}`;
          if (todo[key] === 'low') {
            priority.classList.add('low-priority-todo');
          } else if (todo[key] === 'mid') {
            priority.classList.add('mid-priority-todo');
          } else priority.classList.add('high-priority-todo');
          disp.append(priority);
        }
        if (key === 'checked') {
          const checkbox = document.createElement('div');
          checkbox.classList.add('checkbox-todo');
          checkbox.id = todo.id;
          disp.append(checkbox);
        }
      }
    }
    frameBody.append(disp);
  });
};

// saving
function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectslist));
  localStorage.setItem(LOCAL_STORAGE_CHOSEN_PROJECT_ID_KEY, chosenProjectId);
}

// opens

function removeNewTodo() {
  newToDoButton.remove();
}
export function openTodoForm() {
  frameBody.className = '';
  clearElement(frameBody);
  removeNewTodo();
  initToDoForm();
}

export function openTodoDisplay() {
  frameBody.className = '';
  clearElement(frameBody);
  frameBody.classList.add('frameBody');
  displayTodo();
  initNewToDo();
}

// function editTodo() {
//   const completedTodo = chosenProject.list.find(
//     (todoItem) => todoItem.id !== editButton.id
//   );
//   frameBody.className = '';
//   clearElement(frameBody);
//   removeNewTodo();
//   initEditForm(
//     completedTodo.title,
//     completedTodo.description,
//     completedTodo.date
//   );
// }

const initEditForm = (usedTitle, usedDesc, usedDate) => {
  const toDoForm = document.createElement('form');
  toDoForm.setAttribute('method', 'post');
  toDoForm.setAttribute('action', 'example.com/path');
  toDoForm.classList.add('todoForm');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'title');
  title.setAttribute('name', 'title');
  title.setAttribute('required', '');
  title.setAttribute('placeholder', `${usedTitle}`);
  title.setAttribute('value', `${usedTitle}`);
  title.classList.add('form-title');

  const description = document.createElement('textarea');
  description.setAttribute('rows', '20');
  description.setAttribute('cols', '400');
  description.setAttribute('placeholder', `${usedDesc}`);
  description.setAttribute('value', `${usedDesc}`);

  const date = document.createElement('input');
  date.setAttribute('type', 'date');
  date.setAttribute('id', 'date');
  date.setAttribute('name', 'date');
  date.setAttribute('required', '');
  date.setAttribute('placeholder', `${usedDate}`);
  date.setAttribute('value', `${usedDate}`);

  const priorityRow = document.createElement('div');
  priorityRow.classList.add('priority-row');

  const lowPriorityLabel = document.createElement('label');
  lowPriorityLabel.setAttribute('for', 'low');
  lowPriorityLabel.textContent = 'Low';
  lowPriorityLabel.dataset.rank = 'lowP';
  lowPriorityLabel.classList.add('priorities');
  const lowPriorityRadio = document.createElement('input');
  lowPriorityRadio.setAttribute('type', 'radio');
  lowPriorityRadio.setAttribute('id', 'low');
  lowPriorityRadio.setAttribute('name', 'priority');
  lowPriorityRadio.setAttribute('value', 'low');
  // lowPriorityRadio.checked = true;
  lowPriorityRadio.classList.add('radios');

  const midPriorityLabel = document.createElement('label');
  midPriorityLabel.setAttribute('for', 'mid');
  midPriorityLabel.textContent = 'Mid';
  midPriorityLabel.dataset.rank = 'midP';
  midPriorityLabel.classList.add('priorities');
  const midPriorityRadio = document.createElement('input');
  midPriorityRadio.setAttribute('type', 'radio');
  midPriorityRadio.setAttribute('id', 'mid');
  midPriorityRadio.setAttribute('name', 'priority');
  midPriorityRadio.setAttribute('value', 'mid');
  midPriorityRadio.classList.add('radios');

  const highPriorityLabel = document.createElement('label');
  highPriorityLabel.setAttribute('for', 'high');
  highPriorityLabel.textContent = 'High';
  highPriorityLabel.dataset.rank = 'highP';
  highPriorityLabel.classList.add('priorities');
  const highPriorityRadio = document.createElement('input');
  highPriorityRadio.setAttribute('type', 'radio');
  highPriorityRadio.setAttribute('id', 'high');
  highPriorityRadio.setAttribute('name', 'priority');
  highPriorityRadio.setAttribute('value', 'high');
  highPriorityRadio.classList.add('radios');

  const createToDo = (event) => {
    event.preventDefault();
    const todo = new ToDo(
      title.value,
      description.value,
      date.value,
      priorityValue()
    );
    checkChosenProject(todo);
    openTodoDisplay();
  };

  const toDoSubmit = document.createElement('button');
  toDoSubmit.textContent = 'Make To Do';
  toDoSubmit.addEventListener('click', createToDo);

  priorityRow.append(
    lowPriorityLabel,
    lowPriorityRadio,
    midPriorityLabel,
    midPriorityRadio,
    highPriorityLabel,
    highPriorityRadio
  );
  toDoForm.append(title, description, date, priorityRow, toDoSubmit);
  frameBody.classList.add('frameBodyTodo');
  frameBody.append(toDoForm);
};

// form
export const priorityValue = function displayRadioValue() {
  const ele = document.getElementsByName('priority');
  for (let i = 0; i < ele.length; i += 1) {
    if (ele[i].checked) {
      const answer = ele[i].value;
      console.log(`this is the priority level ${answer}`);
      return answer;
    }
  }
};

export const initToDoForm = () => {
  const toDoForm = document.createElement('form');
  toDoForm.setAttribute('method', 'post');
  toDoForm.setAttribute('action', 'example.com/path');
  toDoForm.classList.add('todoForm');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'title');
  title.setAttribute('name', 'title');
  title.setAttribute('required', '');
  title.setAttribute('placeholder', 'Title: Wash Dishes');
  title.classList.add('form-title');

  const description = document.createElement('textarea');
  description.setAttribute('rows', '20');
  description.setAttribute('cols', '400');
  description.setAttribute(
    'placeholder',
    'Details: ex. there are 3 plates and 1 pot in the sink that are mine to wash...'
  );

  const date = document.createElement('input');
  date.setAttribute('type', 'date');
  date.setAttribute('id', 'date');
  date.setAttribute('name', 'date');
  date.setAttribute('required', '');

  const priorityRow = document.createElement('div');
  priorityRow.classList.add('priority-row');

  const lowPriorityLabel = document.createElement('label');
  lowPriorityLabel.setAttribute('for', 'low');
  lowPriorityLabel.textContent = 'Low';
  lowPriorityLabel.dataset.rank = 'lowP';
  lowPriorityLabel.classList.add('priorities');
  const lowPriorityRadio = document.createElement('input');
  lowPriorityRadio.setAttribute('type', 'radio');
  lowPriorityRadio.setAttribute('id', 'low');
  lowPriorityRadio.setAttribute('name', 'priority');
  lowPriorityRadio.setAttribute('value', 'low');
  // lowPriorityRadio.checked = true;
  lowPriorityRadio.classList.add('radios');

  const midPriorityLabel = document.createElement('label');
  midPriorityLabel.setAttribute('for', 'mid');
  midPriorityLabel.textContent = 'Mid';
  midPriorityLabel.dataset.rank = 'midP';
  midPriorityLabel.classList.add('priorities');
  const midPriorityRadio = document.createElement('input');
  midPriorityRadio.setAttribute('type', 'radio');
  midPriorityRadio.setAttribute('id', 'mid');
  midPriorityRadio.setAttribute('name', 'priority');
  midPriorityRadio.setAttribute('value', 'mid');
  midPriorityRadio.classList.add('radios');

  const highPriorityLabel = document.createElement('label');
  highPriorityLabel.setAttribute('for', 'high');
  highPriorityLabel.textContent = 'High';
  highPriorityLabel.dataset.rank = 'highP';
  highPriorityLabel.classList.add('priorities');
  const highPriorityRadio = document.createElement('input');
  highPriorityRadio.setAttribute('type', 'radio');
  highPriorityRadio.setAttribute('id', 'high');
  highPriorityRadio.setAttribute('name', 'priority');
  highPriorityRadio.setAttribute('value', 'high');
  highPriorityRadio.classList.add('radios');

  const createToDo = (event) => {
    event.preventDefault();
    const todo = new ToDo(
      title.value,
      description.value,
      date.value,
      priorityValue()
    );
    checkChosenProject(todo);

    openTodoDisplay();
  };

  const toDoSubmit = document.createElement('button');
  toDoSubmit.textContent = 'Make To Do';
  toDoSubmit.addEventListener('click', createToDo);

  priorityRow.append(
    lowPriorityLabel,
    lowPriorityRadio,
    midPriorityLabel,
    midPriorityRadio,
    highPriorityLabel,
    highPriorityRadio
  );
  toDoForm.append(title, description, date, priorityRow, toDoSubmit);
  frameBody.classList.add('frameBodyTodo');
  frameBody.append(toDoForm);
};

export function initPage() {
  initFrame();
  initNewToDo();
  initProjectFrame();
  initProjectBody();
  displayTodo();
}
