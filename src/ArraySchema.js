export default class ArraySchema {
  constructor(validators) {
    this.validators = validators;
    //this.depth = depth;
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  maxDepth(depth=0) {
    let max = 1;
    const validator = (arr) => {
        for (const subArr of arr) {
          if (Array.isArray(subArr)) {
            max += Math.max(validator(subArr), max);
          }
        }
        return (max <= depth || arr.length === depth) ? true : false;
      }
    return new ArraySchema([...this.validators, validator]);
  }
}
