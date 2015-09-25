/*
    Exercise 2
*/

var HelloWorld = React.createClass({
  render: function() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
});

var Helloes = React.createClass({
  render: function() {
    return <div>
    {
      this.props.names.map(function(name) {
        return <HelloWorld name={name}/>;
      })
    }
    </div>;
  }
});

React.render(<Helloes names={["Kamil", "Marcin"]}/>, document.body);
