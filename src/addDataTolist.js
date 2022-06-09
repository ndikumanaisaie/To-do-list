/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-cycle
// import { displayList } from './task.js';

export default (data, desc) => {
  data.push({
    description: desc,
    completed: false,
    index: data.length + 1,
  });
  // displayList(data);
  // localStorage.setItem('data', JSON.stringify(data));
};
