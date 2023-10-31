import StringSchema from "./StringSchema.js";
import ArraySchema from "./ArraySchema.js";

export default class Validator {
  string() {
    return new StringSchema([(value) => typeof value === 'string']);
  }
  array() {
    return new ArraySchema([(value) => Array.isArray(value)]);
  }
}
