export default class StringSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  startsFromUpperCase() {
    const validator = (value) => {
      if(value.length === 0 || value[0].toUpperCase() === value[0].toLowerCase()) {
        return false;
      }
      return  value[0] === value[0].toUpperCase();
    }
    return new StringSchema([...this.validators, validator]);
  }

  length(num) {
    const validator = (value) => value.length === num;
    return new StringSchema([...this.validators, validator]);
  }

  hasExclamation() {
    const validator = (value) => {
      const arr = value.split('');
      return arr.includes('!')
    };
    return new StringSchema([...this.validators, validator]);
  }
}
