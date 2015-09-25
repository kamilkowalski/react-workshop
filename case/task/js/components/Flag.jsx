var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function(){
    return { countryCode: '' };
  },
  countryCode: function(){
    return this.props.countryCode.toLowerCase();
  },
  render: function() {
    var classes = "tweet-flag flag-icon flag-icon-" + this.countryCode();
    return <span className={classes}></span>;
  }
});

