const listItems = document.createElement('div');
export default (data) => {
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
};