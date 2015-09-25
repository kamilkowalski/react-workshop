var React = require('react');
var numeral = require('numeral');
var Flag = require('./Flag');

module.exports = React.createClass({
  followersCount: function() {
    return numeral(this.props.tweet.user.followers_count).format('0,0');
  },
  render: function() {
    return  <div className="tweet">
              <div className="tweet-header">
                  <img className="tweet-image" src={this.props.tweet.user.profile_image_url} />
                  <div className="tweet-image-offset tweet-name">
                    {this.props.tweet.user.name}
                  </div>
                  <div className="tweet-image-offset tweet-screen-name">@{this.props.tweet.user.screen_name}</div>
              </div>

              <div className="tweet-text">{this.props.tweet.text}</div>
              <div className="tweet-stats">
                  <span className="tweet-user-followers">
                      <strong>{this.followersCount()}</strong>
                      <span className="tweet-stats-desc">followers</span>
                  </span>
              </div>
              <Flag countryCode={this.props.tweet.place.country_code}/>
              <span className="tweet-country tweet-stats-desc">{this.props.tweet.place.country}</span>
              <div className="tweet-city tweet-stats-desc">{this.props.tweet.place.full_name}</div>
          </div>;
  }
});


