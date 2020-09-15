function sum(outterVal) {
    return (innerVal) => outterVal+innerVal;
}


alert(sum(1)(2));

alert(sum(5)(-1));