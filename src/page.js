import './style.css';
import clipboard from './img/clipboard.png';

export const contentDiv = document.getElementById('content');

export const frame = document.createElement('div');
export const frameHeader = document.createElement('div');
export const frameBody = document.createElement('div');

export const projectFrame = document.createElement('div');

export const initPage = () => {
  frame.id = 'case';
  frameHeader.classList.add('frameHead');
  const clipboardArt = new Image();
  clipboardArt.src = clipboard;
  clipboardArt.classList.add('frameHeaderArt');

  const frameTitle = document.createElement('p');
  frameTitle.textContent = 'To Do';

  frameHeader.append(clipboardArt, frameTitle);

  frameBody.classList.add('frameBody');

  const frameButton = document.createElement('button');
  frameButton.classList.add('frameButton');

  projectFrame.classList.add('projectFrame');

  frame.append(frameHeader, frameBody, frameButton);

  contentDiv.append(frame, projectFrame);
};
