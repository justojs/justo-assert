//imports
const assert = require("assert");

/**
 * Checks whether two values are equal.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
export function mustBeEqual(actual, expected, msg) {
	try {
		assert.deepEqual(actual, expected);
	} catch(e) {
		throw new AssertionError(`'${actual}' must be equal to '${expected}'.`, msg);
	}
}

/**
 * Checks whether two values aren't equal.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeEqual(actual, expected, msg) {
	try {
		assert.notDeepEqual(actual, expected);
	} catch(e) {
		throw new AssertionError(`'${actual}' must not be equal to '${expected}'.`, msg);
  }
}

/**
 * Checks whether two values are the same.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
export function mustBeSame(actual, expected, msg) {
	try {
		assert.strictEqual(actual, expected);
	} catch(e) {
    throw new AssertionError(`'${actual}' must be the same as '${expected}'.`, msg);
  }
}

/**
 * Checks whether two values aren't the same.
 *
 * @param actual:any    The first value.
 * @param expected:any  The second value.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeSame(actual, expected, msg) {
	try {
		assert.notStrictEqual(actual, expected);
	} catch (e) {
    throw new AssertionError(`'${actual}' must not be the same as '${expected}'.`, msg);
  }
}

/**
 * Checks whether a value is within a range.
 *
 * @param value:any     The value.
 * @param left:number   The lowerbound inclusive.
 * @param right:number  The upperbound inclusive.
 * @param [msg]:string  The message if error.
 */
export function mustBeBetween(value, left, right, msg) {
  if (!(value >= left && value <= right)) {
    throw new AssertionError(`'${value}' must be between '${left}' and '${right}'.`, msg);
  }
}

/**
 * Checks whether a value is not within a range.
 *
 * @param value:any     The value.
 * @param left:any      The lowerbound inclusive.
 * @param right:any     The upperbound inclusive.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeBetween(value, left, right, msg) {
  if (value >= left && value <= right) {
    throw new AssertionError(`'${value}' must not be between '${left}' and '${right}'.`, msg);
  }
}

/**
 * Checks whether a value is greater than another.
 * 
 * @param actual:any		The value.
 * @param expected:any	The lowerbound exclusive.
 * @param [msg]:string	The message if error.
 */
export function mustBeGreaterThan(actual, expected, msg) {
	if (!(actual > expected)) {
		throw new AssertionError(`'${actual}' must be greater than '${expected}'.`, msg);
	}
}

/**
 * Checks whether a value is not greater than another.
 * 
 * @param actual:any		The value.
 * @param expected:any	The lowerbound exclusive.
 * @param [msg]:string	The message if error.
 */
export function mustNotBeGreaterThan(actual, expected, msg) {
	if (actual > expected) {
		throw new AssertionError(`'${actual}' must not be greater than '${expected}'.`, msg);
	}
}

/**
 * Checks whether a value is less than another.
 * 
 * @param actual:any		The value.
 * @param expected:any	The upperbound exclusive.
 * @param [msg]:string	The message if error.
 */
export function mustBeLessThan(actual, expected, msg) {
	if (!(actual < expected)) {
		throw new AssertionError(`'${actual}' must be less than '${expected}'.`, msg);
	}
}

/**
 * Checks whether a value is not less than another.
 * 
 * @param actual:any		The value.
 * @param expected:any	The upperbound exclusive.
 * @param [msg]:string	The message if error.
 */
export function mustNotBeLessThan(actual, expected, msg) {
	if (actual < expected) {
		throw new AssertionError(`'${actual}' must not be less than '${expected}'.`, msg);
	}
}

/**
 * Checks whether an object has specified properties.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param prop:string   The property name.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property name.
 * @param [msg]:string    The message if error.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:object  The properties: name: value.
 * @param [msg]:string  The message if error.
 */
export function mustHave(obj, props, msg) {
  if (typeof(props) == "string") {
    if (!obj.hasOwnProperty(props)) {
      throw new AssertionError(`${obj} must have property ${props}.`, msg);
    }
  } else if (props instanceof Array) {
    for (let i = 0; i < props.length; ++i) {
    	let name = props[i];
    	
      if (!obj.hasOwnProperty(name)) {
        throw new AssertionError(`${obj} must have property ${name}.`, msg);
      }
    }
  } else {
    for (let i = 0, keys = Object.keys(props); i < keys.length; ++i) {
    	let name = keys[i];
      let value = props[name];

      if (!obj.hasOwnProperty(name) || obj[name] != value) {
        throw new AssertionError(`${obj} must have property ${name}=${value}.`, msg);
      }
    }
  }
}

/**
 * Checks whether an object hasn't specified properties.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param prop: string  The property name.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property names.
 * @param [msg]:string    The message if error.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:object  The property name.
 * @param [msg]:string  The message if error.
 */
export function mustNotHave(obj, props, msg) {
  if (typeof(props) == "string") {
    if (obj.hasOwnProperty(props)) {
      throw new AssertionError(`${obj} must not have property ${props}.`, msg);
    }
  } else if (props instanceof Array) {
    for (let i = 0; i < props.length; ++i) {
    	let name = props[i];
    	
      if (obj.hasOwnProperty(name)) {
        throw new AssertionError(`${obj} must not have property ${name}.`, msg);
      }
    }
  } else {
  	for (let i = 0, keys = Object.keys(props); i < keys.length; ++i) {
    	let name = keys[i];
      let value = props[name];

      if (obj.hasOwnProperty(name) && obj[name] == value) {
        throw new AssertionError(`${obj} must have property ${name}=${value}.`, msg);
      }
    }
  }
}

/**
 * Checks whether an object has any specified properties.
 *
 * @overload
 * @param obj:any         The object to check.
 * @param props:string[]  The property names.
 * @param [msg]:string    The message if error.
 *
 * @overload
 * @param obj:any       The object to check.
 * @param props:Object  The properties.
 * @param [msg]:string  The message if error.
 */
export function mustHaveAny(obj, props, msg) {
  if (props instanceof Array) {
  	if (props.length > 0) {
	    for (let i = 0; i < props.length; ++i) {
	      if (obj.hasOwnProperty(props[i])) return;
	    }
  	}
  } else {
    for (let name in props) {
      if (obj[name] == props[name]) return;
    }
  }

  throw new AssertionError(`${obj} must have any property of ${props}.`, msg);
}

/**
 * Checks whether a function throws an error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function to call and to check.
 * @param error:any     The error expected.
 * @param [msg]:string  The message if error.
 *
 * @overload
 * @param fn:function   The function object to call and to check.
 * @param error:any     The error expected.
 * @param args:any[]    The arguments to call with.
 * @param [msg]:string  The message if error.
 */
export function mustRaise(fn, ...args) {
  var thrown, error, params, msg;
  
  //(1) pre: arguments
  if (!(fn instanceof Function)) {
    throw new Error(`'${fn}' is not a callable object.`);
  }

  if (args.length == 1) {
    if (args[0] instanceof Array) params = args[0];
    else error = args[0];
  } else if (args.length == 2) {
    if (args[0] instanceof Array) {
      [params, msg] = args;
    } else {
      error = args[0];
      
      if (args[1] instanceof Array) params = args[1];
      else msg = args[1];
    }
  } else {
    [error, params, msg] = args;
  }

  if (!params) params = [];

  //(2) check
  try {
    fn.apply(fn, params);
  } catch(e) {
    thrown = e;
  }
  
  if (!thrown) {
  	throw new AssertionError(`'${fn.name}' expected to throw error.`, msg);
  } else {
    if (error) {
    	if (typeof(error) == "string") {
    		if (thrown.message != error) {
    			throw new AssertionError(`'${fn.name}' expected to throw error.`, msg);
    		}
    	} else {
    		if(!(thrown instanceof error)) {
    			throw new AssertionError(`'${fn.name}' expected to throw error.`, msg);
    		}
    	}
    }
  }
}

/**
 * Checks whether a value is instance of a given class.
 *
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @param [msg]:string  The message if error.
 */
export function mustBeInstanceOf(obj, clss, msg) {
  var err;

  //(1) check
  if (clss === String) err = (typeof(obj) != "string");
  else if (clss === Number) err = (typeof(obj) != "number");
  else if (clss === Boolean) err = (typeof(obj) != "boolean");
  else  err = !(obj instanceof clss);

  //(2) throw error if needed
  if (err) {
    if (obj instanceof Function) err = `'${obj.name}' must be instance of '${clss.name}'.`;
    else err = `'${obj}' must be instance of '${clss.name}'.`;

    throw new AssertionError(err, msg);
  }
}

/**
 * Checks whether a value is not an instance of a given class.
 *
 * @param obj:any       The value to check.
 * @param clss:class    The class object.
 * @param [msg]:string  The message if error.
 */
export function mustNotBeInstanceOf(obj, clss, msg) {
  var err;

  //(1) check
  if (clss === String) err = (typeof(obj) == "string");
  else if (clss === Number) err = (typeof(obj) == "number");
  else if (clss === Boolean) err = (typeof(obj) == "boolean");
  else err = (obj instanceof clss);

  //(2) throw error if needed
  if (err) {
    if (obj instanceof Function) err = `'${obj.name}' must not be instance of '${clss.name}'.`;
    else err = `'${obj}' must not be instance of '${clss.name}'.`;

    throw new AssertionError(err, msg);
  }
}