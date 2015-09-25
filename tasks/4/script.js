/*
    Exercise 4
*/

var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];

var Search = React.createClass({
  componentDidMount: function() {
    var searchFieldNode = React.findDOMNode(this.refs.searchField);
    searchFieldNode.focus();
    console.log(searchFieldNode);
  },
  getInitialState: function() {
    return { filteredUrls: this.props.urls };
  },
  performSearch: function(event) {
    var searchValue = event.target.value;
    var filtered = this.props.urls.filter(function(element) {
      var expr = new RegExp(searchValue, "i");
      return element.name.match(expr) !== null;
    });

    this.setState({
      filteredUrls: filtered
    });
  },
  render: function() {
    return <div>
      <input onChange={this.performSearch} ref="searchField" type="text" />
      <ul>
        {
          this.state.filteredUrls.map(function(el) {
            return <li key={el.url}><a href={el.url}>{el.name}</a></li>;
          })
        }
      </ul>
    </div>;
  }
});

React.render(<Search urls={libraries}/>, document.body);
