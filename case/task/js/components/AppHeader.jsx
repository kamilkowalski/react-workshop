var React = require('react');
var Timer = require('./Timer');

module.exports = React.createClass({
  getDefaultProps: function() {
    return { tweetCount: 0 };
  },
  render: function() {
    return <div className="app-header">
      <h1>WOW MUCH TWITS SUCH WEBSOCKET</h1>
      <div>
        <span className="tweet-stats-desc">seconds running</span>
        <Timer />
      </div>
      <div>
        <span className="tweet-stats-desc"># of tweets</span>
        <strong>{this.props.tweetCount}</strong>
      </div>
    </div>;
  }
});

