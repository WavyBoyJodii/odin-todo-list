export const defaultProject = {
  title: 'default',
  list: [],
};

export const projectslist = [defaultProject];

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
