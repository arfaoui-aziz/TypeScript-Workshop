function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

//! Decorator Factories

function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
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
