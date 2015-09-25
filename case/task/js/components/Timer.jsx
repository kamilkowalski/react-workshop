var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return { seconds: 0.0 }
  },
  componentDidMount: function() {
    this.timer = setInterval(this.countUp, 100);
  },
  countUp: function() {
    this.setState({ seconds: this.state.seconds + 0.1 });
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  render: function() {
    return <strong>{Math.round(this.state.seconds*10)/10}</strong>;
  }
});

