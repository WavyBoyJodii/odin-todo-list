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

export const whichProject = function displayRadioValue() {
  const ele = document.getElementsByName('project');
  for (let i = 0; i < ele.length; i += 1) {
    if (ele[i].checked) {
      const answer = ele[i].value;
      console.log(`this is the chosen project ${answer}`);
      return answer;
    }
  }
};
