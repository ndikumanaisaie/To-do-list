// import data from './data.js';

export default () => {
  const data = [];

  data.push({
    id: 0,
    completed: false,
    description: 'list1',
  },
  {
    id: 1,
    completed: false,
    description: 'list2',
  },
  {
    id: 2,
    completed: false,
    description: 'list3',
  });

  data.sort((a, b) => a.id - b.id);
  const div = document.createElement('div');
  const container = document.querySelector('.tasks');
  div.classList.add('task-items');

  let content = '';
  data.forEach((d) => {
    content += `<div class="task-item list"><div><input type="checkbox" id="task-item" name="task" value="task">
    <label for="task-item"> ${d.description}</label></div><i class="fa-solid fa-ellipsis-vertical"></i></div>
    <div class="grey-rule"></div>`;
  });
  div.innerHTML = content;
  container.appendChild(div);
};