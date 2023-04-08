import './style.css';
import { initFrame, initNewToDo, initProjectFrame } from './page';

export const contentDiv = document.getElementById('content');
export const frame = document.createElement('div');
export const frameHeader = document.createElement('div');
export const frameBody = document.createElement('div');
export const projectFrame = document.createElement('div');
export const projectBody = document.createElement('div');
export const newToDoButton = document.createElement('button');

initFrame();
initNewToDo();
initProjectFrame();
