interface IPerson {
  readonly name? : string;
  age: number;
  greet(phrase: string): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet(phrase: string) {
    console.log(phrase);
  }
}

//Interfaces as Function types

type addFn = (n1: number, n2: number) => number;

interface AddFn {
  (n1: number, n2: number): number;
}
