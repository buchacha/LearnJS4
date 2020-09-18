Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

let s = prompt('Через сколько сек. с Вами поздороваться?', 0)
f.defer(s*1000); // выведет "Hello!" через 1 секунду