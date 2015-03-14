/** @jsx React.DOM */
//var APP = require('./components/app');
var MyApplication = React.createClass({
		render: function(){
				return <h1>Hello</h1>
			}
	});

React.renderComponent(<MyApplication />,document.getElementById('main'));