var React = require('react');
var Header = require('./header');
var TopicList = require('./topicList');

module.exports = React.createClass({
  render: function() {
    return <div>
      <Header />
      {this.content()}
    </div>
  },
  content: function() {
    // we need to know whether or not to render children (to simulate pages) or just the landing pages
    if(this.props.children) {
      return this.props.children
    } else {
      return <TopicList />
    }
  }
});
