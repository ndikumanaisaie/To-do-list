export default (e) => {
  const data = localStorage.getItem('data');
  const dataArray = JSON.parse(data);
  const listObject = dataArray.find((x) => x.index === Number(e.target.parentElement.id));
  const index = dataArray.indexOf(listObject);
  if (!dataArray[index].completed) {
    dataArray[index].completed = true;
    e.target.parentElement.children[1].classList.add('checked');
    localStorage.setItem('data', JSON.stringify(dataArray));
  } else {
    dataArray[index].completed = false;
    e.target.parentElement.children[1].classList.remove('checked');
    localStorage.setItem('data', JSON.stringify(dataArray));
  }
};