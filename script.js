let arr1 = [1, {john:12}, 3, 4];


let arr2 = [...arr1];

arr3 = arr1;

alert(arr1 === arr2); // false

alert(arr1 === arr3); // true


arr2[1].john = 34; 

alert(arr1[1].john); // 34