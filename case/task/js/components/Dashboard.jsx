var _ = require('lodash');
var React = require('react');
var TweetList = require('./TweetList');
var TweetMap = require('./TweetMap');
var CurrentTweet = require('./CurrentTweet');
var AppHeader = require('./AppHeader');
var CountryList = require('./CountryList');

module.exports = React.createClass({
  getInitialState: function() {
    return { tweets: [], selectedTweet: null, tweetCount: 0, countryStats: {} };
  },
  componentDidMount: function() {
    var ws = new WebSocket('ws://localhost:9999');
    ws.onmessage = function(ms) {
      var newTweet = JSON.parse(ms.data);
      var newTweets = this.state.tweets.slice(-99);
      newTweets.push(newTweet);

      var newCountryStats = _.clone(this.state.countryStats);
      var countryCode = newTweet.place.country_code;
      var currentValue = 0;

      if(_.has(newCountryStats, countryCode)){
        currentValue = newCountryStats[countryCode];
      }

      newCountryStats[countryCode] = currentValue + 1;

      this.setState({
        tweets: newTweets,
        tweetCount: this.state.tweetCount + 1,
        countryStats: newCountryStats
      });
    }.bind(this);
  },
  selectTweet: function(tweet) {
    this.setState({ selectedTweet: tweet });
  },
  render: function() {
    var selected = null;

    if(this.state.selectedTweet != null) {
      selected = <CurrentTweet tweet={this.state.selectedTweet}/>;
    }

    return <div>
      <TweetMap tweets={this.state.tweets} selectTweet={this.selectTweet} selectedTweet={this.state.selectedTweet}/>
      <AppHeader tweetCount={this.state.tweetCount}/>
      <CountryList countryStats={this.state.countryStats}/>
      {selected}
      <TweetList tweets={this.state.tweets}/>
    </div>;
  }
});

