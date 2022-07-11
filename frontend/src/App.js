import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import './App.scss';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Header />
			<Footer />
		</Router>
	);
}

export default App;
