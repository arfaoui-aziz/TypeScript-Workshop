// const userInput = <HTMLInputElement>document.getElementById("userInput")!;

const userInput = document.getElementById("userInput") as HTMLInputElement;

userInput.value = "hi There";

if (userInput) {
  (userInput as HTMLInputElement).value;
}
