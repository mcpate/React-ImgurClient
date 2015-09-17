var React = require("react");
var ReactRouter = require('react-router');
// library for keeping track of the pages the user is on
var HashHistory = require('react-router/lib/hashhistory');
// decides which route to give to the user
var Router = ReactRouter.Router;
// configures router
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic}/>
    </Route>
  </Router>
);
