//function must return a string
function add(n1: number, n2: number): string {
  return (n1 + n2).toString();
}

function print(): undefined {
  return;
}

function print(): void {
  return;
}

function print(): void {
  console.log("text");
}

//********************* Functions as type ****************************************/

//! combineValues accept any function
let combineValues: Function;
combineValues = add;

console.log(combineValues(10, 8));

combineValues = print;

console.log(combineValues());

//! combineVals accept only functions that takes 2 params where each param is a number and then return a string
let combineVals: (a: number, b: number) => string;
combineVals = print;
combineVals = add;

// function types & callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
