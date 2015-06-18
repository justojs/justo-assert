Object.defineProperty(Number.prototype, "must", {get: function() { return new Must(this); }});
Object.defineProperty(Object.prototype, "must", {get: function() { return new Must(this); }});
Object.defineProperty(String.prototype, "must", {get: function() { return new Must(this); }});
