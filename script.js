let delay = 3000;

let timerId = setTimeout(function request() {
  
  let answer = confirm('Запрашиваем данные с сервера?');

  if (answer) {
    timerId = setTimeout(request, delay);
  } else {
    alert('Всего хорошего');
  }

}, delay);