function f() {
  let value = 123;

  function g() { alert(value); }

  return g;
}

let g = f();