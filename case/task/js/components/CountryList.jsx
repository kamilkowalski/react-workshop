var _ = require('lodash');
var React = require('react');
var Flag = require('./Flag');

module.exports = React.createClass({
  getDefaultProps: function() {
    return { countryStats: {} };
  },
  topStats: function() {
    var statAry = _.pairs(this.props.countryStats);
    statAry.sort(function(a, b) {
      if(a[1] > b[1]) return -1;
      if(a[1] < b[1]) return 1;
      return 0;
    });

    return statAry.slice(0, 10);
  },
  render: function() {
    return <ul className="countrylist">
    {
      this.topStats().map(function(pair){
        return <li key={pair[0]}>
          <Flag countryCode={pair[0]}/>
          <span className="country-tweet-count">{pair[1]}</span>
        </li>;
      })
    }
    </ul>
  }
});
