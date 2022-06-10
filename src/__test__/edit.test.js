import LocalStorage from '../__mocks__/storage.js';

const newElement = 'kamba';
const store = new LocalStorage();
const dataArray = store.getItems();

function edit(i) {
  const listObject = dataArray.find((x) => x.index === Number(i));
  const index = dataArray.indexOf(listObject);
  dataArray[index].description = newElement;
  store.setItems(dataArray);
}

describe('Edit data from storage', () => {
  edit(1);
  test('Check if the element is edited', () => {
    expect(dataArray[0].description).toBe('kamba');
  });
});