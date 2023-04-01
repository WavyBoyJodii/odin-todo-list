import { makeTodo } from './todo';
import { addToProject, projectslist } from './projects';
import { createToDo } from './events';
import { initPage } from './page';

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
  title.setAttribute('form-title');

  const description = document.createElement('textarea');
  description.setAttribute('rows', '20');
  description.setAttribute('cols', '400');

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
  lowPriorityLabel.classList.add('lowP');
  lowPriorityLabel.classList.add('priorities');
  const lowPriorityRadio = document.createElement('input');
  lowPriorityRadio.setAttribute('type', 'radio');
  lowPriorityRadio.setAttribute('id', 'low');
  lowPriorityRadio.setAttribute('name', 'priority');
  lowPriorityRadio.setAttribute('value', 'low');
  lowPriorityRadio.classList.add('radios');

  const midPriorityLabel = document.createElement('label');
  midPriorityLabel.setAttribute('for', 'mid');
  midPriorityLabel.textContent = 'Mid';
  midPriorityLabel.classList.add('midP');
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
  highPriorityLabel.classList.add('highP');
  highPriorityLabel.classList.add('priorities');
  const highPriorityRadio = document.createElement('input');
  highPriorityRadio.setAttribute('type', 'radio');
  highPriorityRadio.setAttribute('id', 'high');
  highPriorityRadio.setAttribute('name', 'priority');
  highPriorityRadio.setAttribute('value', 'high');
  highPriorityRadio.classList.add('radios');

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
  initPage().frameBody.classList.add('frameBodyTodo');
  toDoForm.append(title, description, date, priorityRow, toDoSubmit);
  initPage().frameBody.append(toDoForm);
};
