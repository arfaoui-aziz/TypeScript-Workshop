//! Autobind Decorator

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  const adjDescriptor = {
    configurable: true,
    enumerable: false,
    //get = value
    get() {
      //this refer to the object on wich we defined the getter
      return originalMethod.bind(this);
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works !";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage();
const btn = document.querySelector("button");

btn.addEventListener("click", p.showMessage);
