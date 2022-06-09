import LocalStorage from '../__mocks__/storage.js';

const store = new LocalStorage();
const dataArray = store.getItems();

function updateCompleted(i) {
  const listObject = dataArray.find((x) => x.index === Number(i));
  const index = dataArray.indexOf(listObject);
  if (!dataArray[index].completed) {
    dataArray[index].completed = true;
    store.setItems(dataArray);
  } else {
    dataArray[index].completed = false;
    store.setItems(dataArray);
  }
}

describe('Edit data from storage', () => {
  updateCompleted(1);
  test('Check if the element is edited', () => {
    expect(dataArray[0].completed).toBe(true);
  });
});