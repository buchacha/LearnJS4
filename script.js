let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListWhile(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}

function printListRecursive(list) {

//   alert(list.value); // выводим текущий элемент

  if (list.next) {
    printListRecursive(list.next); // делаем то же самое для остальной части списка
  }

}


let start = new Date();
printListWhile(list);
alert((new Date() - start)/1000 + " секунд")
printListRecursive(list);

