/**
 * A wrapper of a value.
 *
 * @abstract
 * @readonly value:any  The wrapped value.
 */
class Wrapper {
  /**
   * Constructor.
   *
   * @param(attr) value
   */
  constructor(value) {
    Object.defineProperty(this, "value", {value: value});
  }
}

/**
 * A must wrapper.
 */
class Must extends Wrapper {
  /**
   * Returns a must.be wrapper.
   */
  get be() {
    return new MustBe(this.value);
  }

  /**
   * Returns a must.not wrapper.
   */
  get not() {
    return new MustNot(this.value);
  }
  
  /**
   * Checks whether the wrapped collection contains an item. 
   */
  contain(...args) {
  	mustContain.call(mustContain, this.value, ...args);
  }

  /**
   * Checks a wrapped value has a property set.
   */
  have(...args) {
    mustHave.call(mustHave, this.value, ...args);
  }
  
  /**
   * Checks whether the wrapped value has any specified property.
   */
  haveAny(...args) {
  	mustHaveAny.call(mustHave, this.value, ...args);
  }

  /**
   * Checks whether a function raises an error.
   */
  raise(...args) {
    mustRaise.call(mustRaise, this.value, ...args);
  }
}

/**
 * A must.not wrapper.
 */
class MustNot extends Wrapper {
  /**
   * A must.not.be wrapper.
   */
  get be() {
    return new MustNotBe(this.value);
  }
  
  /**
   * Checks whether the wrapped collection doesn't contain an item.
   */
  contain(...args) {
  	mustNotContain.call(mustNotContain, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value hasn't a property set.
   */
  have(...args) {
    mustNotHave.call(mustNotHave, this.value, ...args);
  }

  /**
   * Checks whether the wrapped function doesn't raise an error.
   */
  raise(...args) {
    mustNotRaise.call(mustNotRaise, this.value, ...args);
  }
}

/**
 * A must.be wrapper.
 */
class MustBe extends Wrapper {
  /**
   * Checks whether the wrapped value is equal to another.
   */
  equal(...args) {
    mustBeEqual.call(mustBeEqual, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value is strictly equal to another.
   */
  same(...args) {
    mustBeSame.call(mustBeSame, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value is between within a range.
   */
  between(...args) {
    mustBeBetween.call(mustBeBetween, this.value, ...args);
  }
  
  /**
   * Checks whether the wrapped value is less than another.
   */
  lessThan(...args) {
  	mustBeLessThan.call(mustBeLessThan, this.value, ...args);
  }
  
  /**
   * Checks whether the wrapped value is greater than another.
   */
  greaterThan(...args) {
  	mustBeGreaterThan.call(mustBeGreaterThan, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value is an instance of a specified class.
   */
  instanceOf(...args) {
    mustBeInstanceOf.call(mustBeInstanceOf, this.value, ...args);
  }
}

/**
 * A must.not.be wrapper.
 */
class MustNotBe extends Wrapper {
  /**
   * Checks whether the wrapped value isn't equal to another.
   */
  equal(...args) {
    mustNotBeEqual.call(mustNotBeEqual, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value isn't strictly equal to another.
   */
  same(...args) {
    mustNotBeSame.call(mustNotBeSame, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value isn't within a range.
   */
  between(...args) {
    mustNotBeBetween.call(mustNotBeBetween, this.value, ...args);
  }
  
  /**
   * Checks whether the wrapped value isn't less than another.
   */
  lessThan(...args) {
  	mustNotBeLessThan.call(mustNotBeLessThan, this.value, ...args);
  }
  
  /**
   * Checks whether the wrapped value isn't greater than another.
   */
  greaterThan(...args) {
  	mustNotBeGreaterThan.call(mustNotBeGreaterThan, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value isn't an instance of a given class.
   */
  instanceOf(...args) {
    mustNotBeInstanceOf.call(mustNotBeInstanceOf, this.value, ...args);
  }
}