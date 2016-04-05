//imports
import * as assert from "./assert";

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
export default class Must extends Wrapper {
  /**
   * Returns a must.all wrapper.
   */
  get all() {
    return new MustAll(this.value);
  }

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
    assert.mustContain.call(assert.mustContain, this.value, ...args);
  }

  /**
   * Checks a wrapped value has a property set.
   */
  have(...args) {
    assert.mustHave.call(assert.mustHave, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value has any specified property.
   */
  haveAny(...args) {
    assert.mustHaveAny.call(assert.mustHave, this.value, ...args);
  }

  /**
   * Checks whether a function raises an error.
   */
  raise(...args) {
    assert.mustRaise.call(assert.mustRaise, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value matches a regular expression.
   */
  match(...args) {
    assert.mustMatch.call(assert.mustMatch, this.value, ...args);
  }
}

/**
 * A must.not wrapper.
 */
class MustNot extends Wrapper {
  /**
   * A must.not.all wrapper.
   */
  get all() {
    return new MustNotAll(this.value);
  }

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
    assert.mustNotContain.call(assert.mustNotContain, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value hasn't a property set.
   */
  have(...args) {
    assert.mustNotHave.call(assert.mustNotHave, this.value, ...args);
  }

  /**
   * Checks whether the wrapped function doesn't raise an error.
   */
  raise(...args) {
    assert.mustNotRaise.call(assert.mustNotRaise, this.value, ...args);
  }

  /**
   * Checks whether the wrapped valie doesn't match a regular expression.
   */
  match(...args) {
    assert.mustNotMatch.call(assert.mustNotMatch, this.value, ...args);
  }
}

/**
 * A must.all wrapper.
 */
class MustAll extends Wrapper {
  have(...args) {
    assert.mustAllHave.call(assert.mustAllHave, this.value, ...args);
  }
}

/**
 * A must.not.all wrapper.
 */
class MustNotAll extends Wrapper {
  have(...args) {
    assert.mustNotAllHave.call(assert.mustNotAllHave, this.value, ...args);
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
    assert.mustBeEqual.call(assert.mustBeEqual, this.value, ...args);
  }

  /**
   * @alias equal
   */
  eq(...args) {
    this.equal(...args);
  }

  /**
   * Checks whether the wrapped value is strictly equal to another.
   */
  same(...args) {
    assert.mustBeSame.call(assert.mustBeSame, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value is between within a range.
   */
  between(...args) {
    assert.mustBeBetween.call(assert.mustBeBetween, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value is in a collection.
   */
  insideOf(...args) {
    assert.mustBeInsideOf.call(assert.mustBeInsideOf, this.value, ...args);
  }

  in(...args) {
    this.insideOf(...args);
  }

  /**
   * Checks whether the wrapped value is less than another.
   */
  lessThan(...args) {
    assert.mustBeLessThan.call(assert.mustBeLessThan, this.value, ...args);
  }

  /**
   * @alias lessThan
   */
  lt(...args) {
    this.lessThan(...args);
  }

  /**
   * Checks whether the wrapped value is greater than another.
   */
  greaterThan(...args) {
    assert.mustBeGreaterThan.call(assert.mustBeGreaterThan, this.value, ...args);
  }

  /**
   * @alias greaterThan
   */
  gt(...args) {
    this.greaterThan(...args);
  }

  /**
   * Checks whether the wrapped value is an instance of a specified class.
   */
  instanceOf(...args) {
    assert.mustBeInstanceOf.call(assert.mustBeInstanceOf, this.value, ...args);
  }

  /**
   * Check whether the wrapped value is like a specified value.
   */
  like(...args) {
    assert.mustMatch.call(assert.mustMatch, this.value, ...args);
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
    assert.mustNotBeEqual.call(assert.mustNotBeEqual, this.value, ...args);
  }

  /**
   * @alias equal
   */
  eq(...args) {
    this.equal(...args);
  }

  /**
   * Checks whether the wrapped value isn't strictly equal to another.
   */
  same(...args) {
    assert.mustNotBeSame.call(assert.mustNotBeSame, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value isn't within a range.
   */
  between(...args) {
    assert.mustNotBeBetween.call(assert.mustNotBeBetween, this.value, ...args);
  }

  /**
   * Checks whether the wrapped value isn't in a collection.
   */
  insideOf(...args) {
    assert.mustNotBeInsideOf.call(assert.mustNotBeInsideOf, this.value, ...args);
  }

  in(...args) {
    this.insideOf(...args);
  }

  /**
   * Checks whether the wrapped value isn't less than another.
   */
  lessThan(...args) {
    assert.mustNotBeLessThan.call(assert.mustNotBeLessThan, this.value, ...args);
  }

  /**
   * @alias lessThan
   */
  lt(...args) {
    this.lessThan(...args);
  }

  /**
   * Checks whether the wrapped value isn't greater than another.
   */
  greaterThan(...args) {
    assert.mustNotBeGreaterThan.call(assert.mustNotBeGreaterThan, this.value, ...args);
  }

  /**
   * @alias greaterThan
   */
  gt(...args) {
    this.greaterThan(...args);
  }

  /**
   * Checks whether the wrapped value isn't an instance of a given class.
   */
  instanceOf(...args) {
    assert.mustNotBeInstanceOf.call(assert.mustNotBeInstanceOf, this.value, ...args);
  }

  /**
   * Check whether the wrapped value is not like a specified value.
   */
  like(...args) {
    assert.mustNotMatch.call(assert.mustNotMatch, this.value, ...args);
  }
}
