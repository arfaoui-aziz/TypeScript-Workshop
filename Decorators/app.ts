function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

//! Decorator Factories

function Logger2(logString: string) {
  console.log("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("With Template Factory");
  return function (constructor: any) {
    const hookEl = document.querySelector(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      document.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger
@Logger2("Person Logger - Custom Decorator")
@WithTemplate("<h1>My Person Class</h1>", "app")
class Person {
  private name = "aziz";

  constructor(name: string) {
    console.log(this.name);
  }
}

//! Property Decorator

function Log(target: any, propertyName: string) {
  console.log(target, propertyName); //objectPrototype, title
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}
