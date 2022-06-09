const newItem = 'ndikumana';
const data = JSON.parse(localStorage.getItem('data')) || [];

function addData(dataArray, newData) {
  dataArray.push({
    description: newData,
    completed: false,
    index: data.length + 1,
  });
  localStorage.setItem('data', JSON.stringify(dataArray));
}

describe('Add new object to data array', () => {
  addData(data, newItem);
  test('Check if the data was added', () => {
    expect(data[data.length - 1].description).toBe('ndikumana');
    expect(JSON.parse(localStorage.getItem('data'))).toStrictEqual(data);
  });

  test('Check if completed is false', () => {
    expect(data[data.length - 1].completed).toBe(false);
  });

  test('Check if Id is ordered from1', () => {
    expect(data[data.length - 1].index).toBe(1);
  });
});