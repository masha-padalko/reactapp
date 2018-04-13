import React, { Component } from 'react';
import './Header.sass';

class Header extends Component {
  render() {
    return (
      <header>
      	<div className="main-container">
          <div className="header-logo-wrapper">
              <a href="" className="header-logo luxoft"></a>
              <a href="" className="header-logo creative-labs"></a>
          </div>
      		<nav>
      			<ul>
      				<li><a href="">About us</a></li>
      				<li><a href="">Offering</a></li>
      				<li><a href="">Process</a></li>
      				<li><a href="">Projects</a></li>
      				<li><a href="">Team</a></li>
      			</ul>
      		</nav>
      		<a href="" className="header-mail-icon"></a>
          <span className="header-mobile-menu">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </span>
      	</div>
      </header> 
    );
  }
}

export default Header;
