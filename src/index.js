import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Header from './header/Header';
import Logo from './logo/Logo';
import Footer from './footer/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<Header />
		<Logo />
		<Footer/>
	</div>,
	document.getElementById('root')
);
registerServiceWorker();
