import { initPage } from './page';
import { initToDoForm } from './forms';

function unnapendTodos() {
  initPage().frameBody.replaceChildren();
  initPage().frame.removeChild(initPage().newToDoButton);
}

export function openTodoForm() {
  initPage().frameBody.className = '';
  unnapendTodos();
  initToDoForm();
}
