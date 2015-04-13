Number.prototype.__defineGetter__("must", function() {
  return new Must(this);
});

Object.prototype.__defineGetter__("must", function() {
  return new Must(this);
});

String.prototype.__defineGetter__("must", function() {
  return new Must(this);
});