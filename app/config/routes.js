// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var Info = require('../components/Search'); 
var Chat = require('../components/Saved'); 


// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Info or Chat show the appropriate component*/}
		<Route path='info' component={Search} />
		<Route path='chat' component={Saved} />

		{/*If user selects any other path... we get the Info Route*/}
		<IndexRoute component={Search} />

	</Route>


);