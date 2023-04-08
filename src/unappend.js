import { initToDoForm } from './forms';
import {
  contentDiv,
  frame,
  projectFrame,
  frameHeader,
  frameBody,
  newToDoButton,
} from '.';

function clearFrameBody() {
  frameBody.replaceChildren();
}

function unappendAll() {
  frame.replaceChildren();
}

function removeNewTodo() {
  newToDoButton.remove();
}

export function openTodoForm() {
  frameBody.className = '';
  clearFrameBody();
  removeNewTodo();
  initToDoForm();
}

export function openTodoDisplay() {
  frameBody.className = '';
  clearFrameBody();
}
