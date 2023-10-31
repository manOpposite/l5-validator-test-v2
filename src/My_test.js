import Validator from "./Validator.js";

const validator = new Validator();
const someValue = validator.string().startsFromUpperCase().length(7).hasExclamation();
console.log(someValue.isValid('Q!     '));