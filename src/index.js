import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<Header />
		<About />
		<Skills/>
		<Contact/>
	</div>,
	document.getElementById('root')
);
registerServiceWorker();
