"use strict";
let userInput;
let username;
userInput = 5;
userInput = "Max";
username = userInput; //! Error
if (typeof userInput === "string")
    username = userInput;
// never Type
function generateError(message, code) {
    throw { message, errorCode: code };
}
