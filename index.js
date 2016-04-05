//imports
import Must from "./lib/Must";

//api
export {default as AssertionError} from "./lib/AssertionError";

//define "must" property
Object.defineProperty(Number.prototype, "must", {get: function() { return new Must(this); }});
Object.defineProperty(Object.prototype, "must", {get: function() { return new Must(this); }});
Object.defineProperty(String.prototype, "must", {get: function() { return new Must(this); }});
