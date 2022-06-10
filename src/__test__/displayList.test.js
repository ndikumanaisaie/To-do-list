import displayList from '../__mocks__/displayData.js';
import LocalStorage from '../__mocks__/storage.js';

const localStorage = new LocalStorage();
const dataArray = localStorage.getItems();

beforeAll(() => {
  document.body.innerHTML = '<main class="main">'
  + '<div class="tasks" id="tasks">'
  + '<p class="head list"><span>Today\'s To do</span><i class="fa-solid fa-arrows-rotate"></i></p>'
  + '<div class="grey-rule"></div>'
  + '<div class="items-to-add list">'
  + '<label for="add-item"></label>'
  + '<input type="text" class="add-item" id="add-item" placeholder="Add to your list" />'
  + '</div>'
  + '<div class="listItems">'
  + '</div>'
  + '</div>'
  + '<button class="clearCompleted" value="clear">Clear all completed</button>'
  + '</main>';
});

test('should load all list Items and dispalay them in DOM', () => {
  displayList(dataArray);
  expect(document.querySelectorAll('.listItems').length).toBe(1);
});