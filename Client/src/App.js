import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Layout/Header';
import ListView from './components/Calendar/ListView';
import NotFound from './components/NotFound';

const App = () => (
	<Router>
		<Fragment>
			<Header />
			<Switch>
				<Route exact path="/" component={ListView} />
				<Route exact path="*" component={NotFound} />
			</Switch>
		</Fragment>
	</Router>
);

export default App;
