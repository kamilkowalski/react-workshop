var React = require('react');
var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

module.exports = React.createClass({
  getDefaultProps: function() {
    return { tweets: [], selectedTweet: null };
  },
  displayableTweets: function() {
    return this.props.tweets.slice(-100);
  },
  render: function() {
    return <div className="tweet-map">
      <Map
        initialZoom={3}
        initialCenter={new GoogleMapsAPI.LatLng(30.675226, -35.051272)}
        height="100%"
        width="100%"
        scaleControl={false}
        streetViewControl={false}
        panControl={false}
        zoomControl={false}
        mapTypeControl={false}>
        {
          this.displayableTweets().map(function(tweet) {
            var markerIcon = (tweet == this.props.selectedTweet) ? "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
            var selectHandler = function() {
              this.props.selectTweet(tweet);
            }.bind(this);

            return <Marker
              key={tweet.id}
              icon={markerIcon}
              onClick={selectHandler}
              position={new GoogleMapsAPI.LatLng(tweet.geo.coordinates[0], tweet.geo.coordinates[1])}/>;
          }.bind(this))
        }
      </Map>
    </div>
  }
});

