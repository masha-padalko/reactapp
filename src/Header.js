import React, { Component } from 'react';
import './Header.sass';

class Header extends Component {
  render() {
    return (
      <header>
      	<div className="header">
			  <a href="#" className="header-logo"></a>
	        <nav>
	        	<ul>
	        		<li><a className="active" href="#">Home</a></li>
	        		<li><a href="#about">About</a></li>
	        		<li><a href="#skills">Skills</a></li>
	        		<li><a href="#contact">Contact</a></li>
	        	</ul>
	        </nav>
      	</div>
        <h1>NAME SURNAME</h1>
        <div className="header-subtitle">front-end developer</div>
      </header> 
    );
  }
}

export default Header;
