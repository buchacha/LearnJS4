'use strict'

let obj = {};

Object.defineProperties(obj, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});

// key in obj ничего не выведет
for (let key in Object.getOwnPropertyDescriptors(obj)) {
    alert(key);
    let descriptor = Object.getOwnPropertyDescriptor(obj, key);
    alert(descriptor.writable); // false
}