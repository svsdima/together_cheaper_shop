import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import './App.scss';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<Router>
			<Header />
			<HomeScreen />
			<Footer />
		</Router>
	);
}

export default App;
