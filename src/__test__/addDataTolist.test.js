import addData from '../addDataTolist.js';
// import { data } from '../task.js';
import LocalStorage from '../__mocks__/storage.js';

const localStorage = new LocalStorage();
const newItem = 'ndikumana';
const data = localStorage.getItems() || [];

describe('Add new object to data array', () => {
  addData(data, newItem);

  test('Check if the data was added', () => {
    expect(data[data.length - 1].description).toBe('ndikumana');
  });

  test('Check if completed is false', () => {
    expect(data[data.length - 1].completed).toBe(false);
  });

  test('Check if Id is ordered from1', () => {
    expect(data[data.length - 1].index).toBe(4);
  });
});