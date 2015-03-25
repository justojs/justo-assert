/**
 * An assertion error.
 */
export class AssertionError extends Error {
  /**
   * Initializes the error.
   *
   * @param msg1:string   The default message.
   * @param [msg2]:string The custom message.
   */
  constructor(msg1, msg2) {
    super();

    this.message = (msg2 || msg1);
    this.name = "AssertionError";
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}