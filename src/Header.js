import React, { Component } from 'react';
import './Header.sass';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
        	<ul>
        		<li><a className="active" href="#">Home</a></li>
        		<li><a href="#about">About</a></li>
        		<li><a href="#about">Skills</a></li>
        		<li><a href="#about">Contact</a></li>
        	</ul>
        </nav>
      </header> 
    );
  }
}

export default Header;
