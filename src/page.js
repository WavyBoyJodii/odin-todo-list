import './style.css';

export const contentDiv = document.getElementById('content');
export const frame = document.createElement('div');
export const frameHeader = document.createElement('div');
export const frameBody = document.createElement('div');
export const projectFrame = document.createElement('div');

frame.id = 'case';
frameHeader.classList.add('frameHead');
frameBody.classList.add('frameBody');

projectFrame.classList.add('projectFrame');
