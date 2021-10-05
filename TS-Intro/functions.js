"use strict";
//function must return a string
function add(n1, n2) {
    return (n1 + n2).toString();
}
function print() {
    return;
}
function print() {
    return;
}
function print() {
    console.log("text");
}
//********************* Functions as type ****************************************/
//! combineValues accept any function
let combineValues;
combineValues = add;
console.log(combineValues(10, 8));
combineValues = print;
console.log(combineValues());
//! combineVals accept only functions that takes 2 params where each param is a number and then return a string
let combineVals;
combineVals = print;
combineVals = add;
// function types & callbacks
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
