var _ = require("underscore");

// core module --> If we do not specify the path, node assumes that its a core module if not found
// File or Folder --> then node checks if we have a file or folder if not found
// node_modules --> then node checks if it exists under node_module folder
// This is how require function resolves a module.

var result = _.contains([1, 2, 3], 3);
console.log(result)