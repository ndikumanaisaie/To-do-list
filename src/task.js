/* eslint-disable no-undef */
/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/no-cycle
import addDataTolist from './addDataTolist.js';
import completedTask from './completedTask.js';

export const data = JSON.parse(localStorage.getItem('data')) || [];
const addItem = document.getElementById('add-item');
const listItems = document.querySelector('.listItems');
const clearBtn = document.querySelector('.clearCompleted');

export function displayList(data) {
  if (data !== null) {
    data.forEach((d) => {
      const div = document.createElement('div');
      div.classList.add('task-items');
      div.setAttribute('id', `cont-${d.index}`);

      let content = '';
      content += `<div class="task-item list" id="div-${d.index}"><div class="box" id="${d.index}">
      <input type="checkbox" id="task-item" name="task" value="task"  ${d.completed ? 'checked' : ''} class="checkBox">
      <div class="description ${d.completed ? 'checked' : ''}" contenteditable="${!d.completed}"> ${d.description}</div>
      </div>
      <i class="fas fa-trash delete d-none" id="del-${d.index}"></i>
      <i class="fas fa-ellipsis-v ellipsis" id="el-${d.index}"></i>
      </div>
      <div class="grey-rule"></div>`;
      div.innerHTML = content;
      listItems.appendChild(div);
    });
  }

  data.forEach((d) => {
    const taskItem = document.getElementById(`div-${d.index}`);
    const trashIcon = document.getElementById(`del-${d.index}`);
    const ellipsis = document.getElementById(`el-${d.index}`);

    taskItem.addEventListener('focusin', () => {
      ellipsis.classList.add('d-none');
      trashIcon.classList.remove('d-none');
      trashIcon.classList.add('d-block');
    });

    taskItem.addEventListener('focusout', () => {
      setTimeout(() => {
        ellipsis.classList.add('d-block');
        ellipsis.classList.remove('d-none');
        trashIcon.classList.add('d-none');
      }, 100);
    });
  });
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

  const editList = (e) => {
    const data = localStorage.getItem('data');
    const listArray = JSON.parse(data);
    const listObject = listArray.find((x) => x.index === Number(e.target.parentElement.id));
    const index = listArray.indexOf(listObject);
    listArray[index].description = e.target.textContent;
    localStorage.setItem('data', JSON.stringify(listArray));
  };

  const editButtons = document.querySelectorAll('.description');
  editButtons.forEach((btn) => {
    btn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        editList(e);
      }
    });
  });
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

const clearCompletedTask = () => {
  let data = JSON.parse(localStorage.getItem('data'));
  data = data.filter((elem) => elem.completed !== 1);
  for (let i = 0; i < data.length; i += 1) {
    data[i].index = i + 1;
  }
  displayList(data);
  localStorage.setItem('data', JSON.stringify(data));
};

export function clear() {
  clearBtn.addEventListener('click', () => {
    listItems.innerHTML = '';
    clearCompletedTask();
  });
}

export const windowLoad = () => {
  window.addEventListener('load', () => {
    const data = localStorage.getItem('data');
    const todoArray = JSON.parse(data);
    displayList(todoArray);
  });
};
