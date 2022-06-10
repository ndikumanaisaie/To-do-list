import LocalStorage from '../__mocks__/storage.js';

const storage = new LocalStorage();
let dataArray = storage.getItems();

function deleteObject(n) {
  dataArray = dataArray.filter((x) => x.index !== Number(n));
  for (let i = 0; i < dataArray.length; i += 1) {
    dataArray[i].index = i + 1;
  }
}

describe('Deleta data from storage', () => {
  deleteObject(dataArray[0].index);
  test('Check if the element was deleted', () => {
    expect(dataArray.length).toBe(2);
  });

  test('Check if Id is reordered', () => {
    expect(dataArray[0].index).toBe(1);
  });
});