/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/no-cycle
import addDataTolist from './addDataTolist.js';

export const data = JSON.parse(localStorage.getItem('data')) || [];
const addItem = document.getElementById('add-item');
const listItems = document.querySelector('.listItems');

export function displayList(data) {
  if (data !== null) {
    data.forEach((d) => {
      const div = document.createElement('div');
      div.classList.add('task-items');

      let content = '';
      content += `<div class="task-item list" id="${d.index + 1}"><div class="box" id="${d.index}">
      <input type="checkbox" id="task-item" name="task" value="task"  ${d.completed ? 'checked' : ''} class="checkBox">
      <div class="description ${d.completed ? 'checked' : ''}" contenteditable="${!d.completed}"> ${d.description}</div>
      </div><i class="fas fa-trash delete"></i></div>
      <div class="grey-rule"></div>`;
      div.innerHTML = content;
      listItems.appendChild(div);
    });
  }

  const completedTask = (e) => {
    const data = localStorage.getItem('data');
    const dataArray = JSON.parse(data);
    const todoObject = dataArray.find((x) => x.index === Number(e.target.parentElement.id));
    const index = dataArray.indexOf(todoObject);
    if (!dataArray[index].completed) {
      dataArray[index].completed = 1;
      e.target.parentElement.children[1].classList.add('checked');
      localStorage.setItem('data', JSON.stringify(dataArray));
    } else {
      dataArray[index].completed = 0;
      e.target.parentElement.children[1].classList.remove('checked');
      localStorage.setItem('data', JSON.stringify(dataArray));
    }
  };
  const checkBox = document.querySelectorAll('.checkBox');
  checkBox.forEach((btn) => {
    btn.addEventListener('change', (e) => {
      completedTask(e);
    });
  });

  const deleteItem = (e) => {
    data = data.filter((x) => x.index !== Number(e.target.parentElement.id - 1));
    for (let i = 0; i < data.length; i += 1) {
      data[i].index = i + 1;
    }
    displayList(data);
    localStorage.setItem('data', JSON.stringify(data));
  };

  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      listItems.innerHTML = '';
      deleteItem(e);
    });
  });

  // const taskItem = document.querySelectorAll('.task-item');
  // taskItem.forEach((task) => {
  //   task.addEventListener('click', () => {
  //     task.style.background = '#fdf000';
  //   });
  // });
}

export function add() {
  addItem.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && addItem.value) {
      listItems.innerHTML = '';
      addDataTolist(data, addItem.value);
      addItem.value = '';
    }
  });
}
