const person: {
  // Ts representation of object
  name: string;
  age: number;
} = {
  name: "aziz",
  age: 23,
};

//Same object type infered by TS

// const person = {
//        name: "aziz",
//         age: 23,

// }

/************************************************* */
const user: object = {
  name: "string",
};
//Same

const user2: {} = {
  name: "string",
};

// Ts error when we try to acces object properties
// user.name;
// user2.name;

//! Nested Objects

const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

const prod: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
