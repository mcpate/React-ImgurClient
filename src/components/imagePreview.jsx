var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


module.exports = React.createClass({
  getInitialState: function() {
    return {
      hovering: false
    }
  },
  render: function() {
    return <Link
      to={"images/" + this.props.image.id}
      className="image-preview"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      >
      {this.props.image.animated && this.state.hovering ? this.video() : this.image()}
      {this.props.image.animated && !this.state.hovering ? this.icon() : null}
      {this.state.hovering ? this.inset() : null}
    </Link>
  },
  inset: function() {
    return <div className="inset">
      Views: {this.props.image.views}
      <br/>
      Upvotes: {this.props.image.ups}
    </div>
  },
  image: function() {
    var link = "http://i.imgur.com/" + this.props.image.id + "h.jpg";

    return <img src={link} />
  },
  video: function() {
    return <div>
      <video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
        <source src={this.props.image.mp4} type='video/mp4'></source>
      </video>
    </div>
  },
  icon: function() {
    return <span className="glyphicon glyphicon-play"></span>
  },
  handleMouseEnter: function() {
    console.log("enter");
    this.setState({hovering: true});
  },
  handleMouseLeave: function() {
    console.log("exit");
    this.setState({hovering: false});
  }
});
