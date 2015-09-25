/*
    Exercise 3
*/

var Timer = React.createClass({
  getInitialState: function() {
    return { seconds: 0.0 }
  },
  componentDidMount: function() {
    this.timer = setInterval(this.countUp, 100);
  },
  countUp: function() {
    this.setState(function(prev, props) {
      console.log(prev.seconds);
      return { seconds: prev.seconds + 0.1 };
    });
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  render: function() {
    return <h1>{Math.round(this.state.seconds*10)/10}</h1>;
  }
});

React.render(<Timer/>, document.body);

setTimeout(function() {
    React.unmountComponentAtNode(document.body);
}, 3000);
