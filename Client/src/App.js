import React, { Fragment } from 'react';
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
				<Route path="/" component={ListView} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Fragment>
	</Router>
);

export default App;
