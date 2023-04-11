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
import { projectslist, whichProject } from './projects';

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

export const displayProjects = (obj) => {
  for (const project of obj) {
    const disp = document.createElement('p');
    disp.textContent = `${project.title}`;
    disp.classList.add('projectList');
    projectBody.append(disp);
  }
};

export const displayTodo = (obj) => {
  // for (const todo of obj.list) {
  obj.forEach((todo) => {
    if (todo === 'list') {
      const disp = document.createElement('div');
      disp.classList.add('todo');
      todo.forEach((item) => {
        if (item === 'title') {
          const title = document.createElement('p');
          title.textContent = `${todo[item]}`;
          title.classList.add('title-todo');
          disp.append(title);
        }
        if (item === 'description') {
          const description = document.createElement('button');
          description.textContent = `Details`;
          description.classList.add('desc-todo');
          disp.append(description);
        }
        if (item === 'date') {
          const date = document.createElement('p');
          const inputDate = new Date(todo[item]);
          date.textContent = `${inputDate}`;
          date.classList.add('date-todo');
          disp.append(date);
        }
        if (item === 'priority') {
          const priority = document.createElement('div');
          if (todo[item] === 'low') {
            priority.classList.add('low-priority-div');
          } else if (todo[item] === 'mid') {
            priority.classList.add('mid-priority-div');
          } else priority.classList.add('high-priority-div');
          disp.append(priority);
        }
        if (item === 'checked') {
          const checkbox = document.createElement('div');
          checkbox.classList.add('checkbox-todo');
          disp.append(checkbox);
        }
      });
      frameBody.append(disp);
    }
  });
};

export const initPage = () => {
  initFrame();
  initNewToDo();
  initProjectFrame();
  displayTodo(whichProject());
};
