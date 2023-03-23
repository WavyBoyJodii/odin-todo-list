export const projectslist = [];

export const defaultProject = {
  title: 'default',
  list: [],
};

const Project = (title) => {
  const list = [];
  return { title, list };
};

export const makeNewProject = (name) => {
  const project = Project(name);
  projectslist.push(project);
  return project;
};

export const addToProject = (todoItem, x) => {
  x.list.push(todoItem);
};
