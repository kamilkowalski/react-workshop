var React = require('react');
var Tweet = require('./Tweet');

module.exports = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.tweet != nextProps.tweet;
  },
  render: function() {
    console.log("Boop");
    return <div className="current-tweet">
      <Tweet tweet={this.props.tweet}/>
    </div>;
  }
});

