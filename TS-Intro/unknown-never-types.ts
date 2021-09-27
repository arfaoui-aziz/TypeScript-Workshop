let userInput: unknown;

let username: string;

userInput = 5;
userInput = "Max";
username = userInput; //! Error

if (typeof userInput === "string") username = userInput;

// never Type

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}
