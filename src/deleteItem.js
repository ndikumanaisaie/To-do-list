/* eslint-disable import/no-cycle */
import { displayList, data } from './task.js';

export default (e) => {
  data = data.filter((x) => x.index !== Number(e.target.parentElement.id - 1));
  for (let i = 0; i < data.length; i += 1) {
    data[i].index = i + 1;
  }
  displayList(data);
  localStorage.setItem('data', JSON.stringify(data));
};