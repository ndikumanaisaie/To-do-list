export default class LocalStorage {
  constructor() {
    this.store = [
      { index: 1, description: 'task 1', completed: false },
      { index: 2, description: 'task 2', completed: false },
      { index: 3, description: 'task 3', completed: false },
    ];
  }

  getItems() {
    return this.store;
  }

  setItems(value) {
    this.store.push(value);
  }
}