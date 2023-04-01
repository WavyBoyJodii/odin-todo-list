import './style.css';
import clipboard from './img/clipboard.png';

// export const pageHead = document.createElement('div');
// export const contentDiv = document.getElementById('content');

// export const frame = document.createElement('div');
// export const frameHeader = document.createElement('div');
// export const frameBody = document.createElement('div');

// export const projectFrame = document.createElement('div');

export const initPage = () => {
  const contentDiv = document.getElementById('content');

  const frame = document.createElement('div');
  const frameHeader = document.createElement('div');
  const frameBody = document.createElement('div');

  const projectFrame = document.createElement('div');
  // pageHead.classList.add('pageHead');

  frame.id = 'case';
  frameHeader.classList.add('frameHead');
  const clipboardArt = new Image();
  clipboardArt.src = clipboard;
  clipboardArt.classList.add('frameHeadArt');

  const frameTitle = document.createElement('p');
  frameTitle.textContent = 'To Do';

  frameHeader.append(clipboardArt, frameTitle);

  frameBody.classList.add('frameBody');

  const newToDoButton = document.createElement('button');
  newToDoButton.classList.add('newToDoButton');
  newToDoButton.textContent = 'New To Do';

  frame.append(frameHeader, frameBody, newToDoButton);

  projectFrame.classList.add('projectFrame');

  contentDiv.append(frame, projectFrame);
  return { contentDiv, frame, frameBody, newToDoButton, projectFrame };
};
