var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topicStore');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  // whenever TopicStore emits an event "onChange" is called
  mixins: [
    Reflux.listenTo(TopicStore, "onChange")
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function() {
    return <div className="list-group">
      {this.renderTopics()}
    </div>
  },
  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic) {
      return <Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    });
  },
  // we know the parameters here because we defined the "trigger" in TopicStore
  onChange: function(event, topics) {
    this.setState({
      topics: topics
    });
  }
});
