var Api = require('../utils/Api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  // "if any of the actions in Actions get called and you have a method with the same
  // name, call that method"
  listenables: [Actions],
  getTopics: function() {
    return Api.get("topics/defaults")
      .then(function(json) {
        this.topics = json.data;

        // whenever we successfully fetch data we trigger a change for listeners
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    // trigger comes from Reflux and comes as part of "createStore"
    this.trigger("change", this.topics);
  }
});
