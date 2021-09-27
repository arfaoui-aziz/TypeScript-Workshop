// unions type
// 2 or more types
let input1: string | number;

input1 = "str";
input1 = 2;
input1 = false; //! X

//Literal Types

let textAlign: "left" | "right" | "center";

textAlign = "rtl"; //! X : textAlign value can be only "left" | "right" | "center"

//******************************************* Type Aliases *******************************************************/

// type CustomTypeName = anyType;

type combinable = string | number;

type currency = "euro" | "dollar";


type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };