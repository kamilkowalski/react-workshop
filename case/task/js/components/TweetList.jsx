var React = require('react');
var Tweet = require('./Tweet');

module.exports = React.createClass({
  getDefaultProps: function() {
    return { tweets: [] }
  },
  latestTweets: function() {
    if(this.props.tweets.length <= 3) return this.props.tweets;
    var sorted = this.props.tweets.slice();
    sorted.sort(function(a, b) {
      if(a.user.followers_count > b.user.followers_count) return -1;
      if(a.user.followers_count < b.user.followers_count) return 1;
      return 0;
    });
    return sorted.slice(0, 3);
  },
  render: function() {
    return <ul className="tweetlist">
      {
        this.latestTweets().map(function(tweet) {
          return <Tweet key={tweet.id} tweet={tweet} />;
        })
      }
    </ul>;
  }
});

