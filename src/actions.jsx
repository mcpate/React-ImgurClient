var Reflux = require('reflux');

// define actions object and give it an action
// in this simple usage, these actions act simply as a proxy for calling the methods directly in your components.
module.exports = Reflux.createActions([
  "getTopics",
  "getImages",
  "getImage"
]);
