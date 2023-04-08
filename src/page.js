import './style.css';
import clipboard from './img/clipboard.png';
import {
  contentDiv,
  frame,
  projectFrame,
  projectBody,
  frameHeader,
  frameBody,
  newToDoButton,
} from '.';
import { initToDoForm } from './forms';
import { openTodoForm } from './unappend';
import { projectslist } from './projects';

// export const initPage = () => {
//   frame.id = 'case';
//   frameHeader.classList.add('frameHead');
//   const clipboardArt = new Image();
//   clipboardArt.src = clipboard;
//   clipboardArt.classList.add('frameHeadArt');

//   const frameTitle = document.createElement('p');
//   frameTitle.textContent = 'To Do';

//   frameHeader.append(clipboardArt, frameTitle);

//   frameBody.classList.add('frameBody');

//   newToDoButton.classList.add('newToDoButton');
//   newToDoButton.textContent = 'New To Do';
//   newToDoButton.addEventListener('click', initToDoForm);

//   frame.append(frameHeader, frameBody, newToDoButton);

//   projectFrame.classList.add('projectFrame');

//   contentDiv.append(frame, projectFrame);
// };

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
  projectBody.classList.add('projectBody');
  projectFrame.append(projectBody);
  contentDiv.append(projectFrame);
  displayProjects(projectslist);
};

const displayProjects = (obj) => {
  for (const project of obj) {
    const disp = document.createElement('p');
    disp.textContent = `${project.title}`;
    disp.classList.add('projectList');
    projectBody.append(disp);
  }
};

const displayTodo = (obj) => {
  for (const todo of obj.list) {
    const disp = document.createElement('div');
    disp.classList.add('todo');
    for (key in todo) {
     if (Object.hasOwn(todo, key)) 
    }
  }
};
