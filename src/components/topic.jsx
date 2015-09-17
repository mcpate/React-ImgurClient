var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/imageStore');
var Reflux = require('reflux');
var ImagePreview = require('./imagePreview');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, "onChange")
  ],
  getInitialState: function() {
    return {
      images: []
    }
  },
  componentWillMount: function() {
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps) {
    Actions.getImages(nextProps.params.id);
  },
  render: function() {
    return <div>
      {this.renderImages()}
    </div>
  },
  renderImages: function() {
    return this.state.images.slice(0, 20).map(function(image) {
      return <ImagePreview key={image.id} image={image} />
    });
  },
  onChange: function(event, images) {
    this.setState({images: images})
  }
});
