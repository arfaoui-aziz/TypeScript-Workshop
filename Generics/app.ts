//!Built in Generics

let names: Array<string>; // Same as let names: string[];

let promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise Resolved"), 2000);
});

function mergeObjects(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const mergedObj = mergeObjects({ name: "aziz" }, { age: 23 });

// if we try to access any propety TS will show an error because TS know only that our function
// return an object but don't know the properties of the returned object

console.log(mergedObj.name);

//! Solution 1

const mergedObj1 = mergeObjects({ name: "aziz" }, { age: 23 }) as {
  name: string;
  age: number;
};

console.log(mergedObj1.name);

//! Solution 2

//? Return T & U

function mergeObjects2<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = mergeObjects2({ name: "aziz" }, { age: 23 });

console.log(mergedObj2.name);

//we can also specifie the Type of T & Y when calling the function but it's redundant exemple:
const mergedObj3 = mergeObjects2<{ name: string }, { age: number }>(
  { name: "aziz" },
  { age: 23 }
);
