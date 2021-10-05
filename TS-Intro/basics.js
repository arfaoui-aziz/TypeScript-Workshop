"use strict";
function add(n1, n2) {
    return n1 + n2;
}
const num1 = 5;
const num2 = 2.8;
//Type Inference but we can declare this way
// const num1 : number = 5;
// const num2 : number;
// num2 = 2.8;
console.log(add(num1, num2));
