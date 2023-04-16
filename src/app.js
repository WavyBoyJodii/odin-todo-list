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
export const newProjectButton = document.createElement('button');

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

const buyGroceries = new ToDo(
  'Buy Groceries',
  'Need fruits and veggies',
  '2023-11-17',
  'high'
);

const helpTodo = new ToDo();

export const defaultProject = {
  id: '1',
  title: 'Default',
  list: [buyGroceries],
};

export const makeTodo = () => new ToDo();

const projectslist = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)
) || [defaultProject];

let chosenProjectId = localStorage.getItem(LOCAL_STORAGE_CHOSEN_PROJECT_ID_KEY);

// projectslist.forEach((project) => Object.assign(projectslist, ToDo));
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
  console.log(projectslist);
  displayProjects(projectslist);
  projectBody.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'p') {
      chosenProjectId = e.target.dataset.projectId;
      console.log(
        `chosen project id in event listener on projects = ${chosenProjectId}`
      );
      clearElement(frameBody);
      clearElement(projectBody);
      displayProjects(projectslist);
      displayTodo();
      // save();
    }
  });
}

export const initNewProjectButton = () => {
  newProjectButton.classList.add('projectButton');
  newProjectButton.textContent = 'New Project';
  newProjectButton.addEventListener('click', openProjectForm);
  projectFrame.append(newProjectButton);
};

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
  // save();
  return project;
};
export const addToProject = (todoItem, x) => {
  x.list.push(todoItem);
  // save();
};
const checkChosenProject = (x) => {
  const chosenProject = projectslist.find(
    (project) => project.id === chosenProjectId
  );
  if (chosenProjectId === null) {
    addToProject(x, defaultProject);
    // save();
  } else {
    addToProject(x, chosenProject);
    // save();
  }
};
// display stuff
export const displayProjects = (obj) => {
  for (const project of obj) {
    const disp = document.createElement('p');
    disp.textContent = `${project.title}`;
    disp.dataset.projectId = project.id;
    disp.classList.add('projectList');
    // disp.addEventListener('click', whichTodo);
    if (project.id === chosenProjectId) {
      disp.classList.add('chosen-project');
    }
    projectBody.append(disp);
  }
};

export const displayTodo = () => {
  console.log(
    `chosen project id at beginning of display todo function = ${chosenProjectId}`
  );
  let chosenProject = projectslist.find(
    (project) => project.id === chosenProjectId
  );
  if (chosenProjectId === null) {
    chosenProject = defaultProject;
  }
  console.log(
    `This is the chosen project of which the todo's will be displayed LAST STEP ${chosenProject}`
  );
  chosenProject.list.forEach((todo) => {
    const disp = document.createElement('div');
    disp.id = todo.id;
    const editButton = new Image();
    editButton.src = editIcon;
    editButton.id = todo.id;
    editButton.addEventListener('click', (e) => {
      const displayedTodo = chosenProject.list.find(
        (todoItem) => todoItem.id === editButton.id
      );
      chosenProject.list = chosenProject.list.filter(
        (todoItem) => todoItem.id !== editButton.id
      );
      frameBody.className = '';
      clearElement(frameBody);
      removeNewTodo();
      initEditForm(
        displayedTodo.title,
        displayedTodo.description,
        displayedTodo.date
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
      // save();
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
          description.id = todo.id;
          description.classList.add('desc-todo');
          description.addEventListener('click', (e) => {
            const displayedTodo = chosenProject.list.find(
              (todoItem) => todoItem.id === description.id
            );
            frameBody.className = '';
            removeNewTodo();
            clearElement(frameBody);
            // frameBody.classList.add('detailsDisplay');
            initDetailsDisplay(
              displayedTodo.title,
              displayedTodo.description,
              displayedTodo.date,
              displayedTodo.priority
            );
          });
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
          checkbox.id = todo.id;
          const displayedTodo = chosenProject.list.find(
            (todoItem) => todoItem.id === checkbox.id
          );
          if (displayedTodo.checked === true) {
            checkbox.className = 'checkbox-todo-checked';
            disp.className = 'todo-checked';
          } else {
            checkbox.className = 'checkbox-todo';
            disp.className = 'todo';
          }
          checkbox.addEventListener('click', (e) => {
            const displayedTodoEvent = chosenProject.list.find(
              (todoItem) => todoItem.id === checkbox.id
            );
            displayedTodoEvent.togglechecked();
            function checkTodoState(x) {
              if (x.checked === true) {
                checkbox.className = 'checkbox-todo-checked';
                disp.className = 'todo-checked';
              } else {
                checkbox.className = 'checkbox-todo';
                disp.className = 'todo';
              }
            }
            checkTodoState(displayedTodoEvent);
          });
          disp.append(checkbox);
        }
      }
    }
    frameBody.append(disp);
  });
};

// function whichTodo(e) {
//   chosenProjectId = e.target.dataset.projectId;
//   console.log(
//     `This is the chosen Project Id within the which todo function ${chosenProjectId}`
//   );
//   clearElement(frameBody);
//   displayTodo();
// }
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
export function removeNewProject() {
  newProjectButton.remove();
}
export function openProjectForm() {
  frameBody.className = '';
  clearElement(frameBody);
  removeNewTodo();
  removeNewProject();
  initNewProjectForm();
}
export function openProjectDisplay() {
  projectBody.className = '';
  clearElement(projectBody);
  initProjectBody();
  initNewProjectButton();
  // save();
}
export function openTodoDisplay() {
  frameBody.className = '';
  clearElement(frameBody);
  frameBody.classList.add('frameBody');
  displayTodo();
  initNewToDo();
  // save();
}

function initDetailsDisplay(usedTitle, usedDesc, usedDate, usedPriority) {
  const detailsDisplay = document.createElement('div');
  detailsDisplay.classList.add('details-container');

  const detailTitle = document.createElement('div');
  detailTitle.innerText = `${usedTitle}`;
  detailTitle.classList.add('details-title');

  const detailDescription = document.createElement('div');
  detailDescription.innerText = `${usedDesc}`;
  detailDescription.classList.add('details-desc');

  const detailDate = document.createElement('div');
  detailDate.innerText = `Due ${format(new Date(usedDate), 'MM/dd')}`;
  detailDate.classList.add('details-date');

  const detailPriority = document.createElement('div');
  detailPriority.innerText = `${usedPriority} priority`;
  detailPriority.classList.add('details-priority');

  const detailCloseButton = document.createElement('button');
  detailCloseButton.textContent = 'Close';
  detailCloseButton.classList.add('details-closeButton');
  detailCloseButton.addEventListener('click', openTodoDisplay);

  detailsDisplay.append(
    detailTitle,
    detailDescription,
    detailDate,
    detailPriority,
    detailCloseButton
  );
  frameBody.classList.add('detailsDisplay');
  frameBody.append(detailsDisplay);
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
  title.setAttribute('maxlength', '30');
  title.classList.add('form-title');

  const description = document.createElement('textarea');
  description.setAttribute('rows', '20');
  description.setAttribute('cols', '400');
  description.setAttribute('placeholder', `${usedDesc}`);
  description.value = `${usedDesc}`;

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
    // save();
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
  title.setAttribute('maxlength', '30');
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
    // save();
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

export function initNewProjectForm() {
  const projectForm = document.createElement('form');
  projectForm.setAttribute('method', 'post');
  projectForm.setAttribute('action', 'example.com/path');
  projectForm.classList.add('todoForm');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'title');
  title.setAttribute('name', 'title');
  title.setAttribute('required', '');
  title.setAttribute('placeholder', 'Chores, Things To do, Goals..etc');
  title.setAttribute('maxlength', '30');
  title.classList.add('form-title');

  const createProject = (event) => {
    event.preventDefault();
    makeNewProject(title.value);
    // checkChosenProject(todo);
    openProjectDisplay();

    openTodoDisplay();
    // save();
  };
  const projectSubmit = document.createElement('button');
  projectSubmit.textContent = 'Make New Project';
  projectSubmit.addEventListener('click', createProject);

  projectForm.append(title, projectSubmit);

  frameBody.classList.add('frameBodyTodo');
  frameBody.append(projectForm);
}

export function initPage() {
  initFrame();
  initNewToDo();
  initProjectFrame();
  initProjectBody();
  initNewProjectButton();
  displayTodo();
  // save();
  console.log(projectslist);
}
