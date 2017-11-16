import React, { Component } from 'react';
import './Footer.sass';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
              <div className="col-md-6 footer-contacts">
                <ul>
                  <li><span>Mobile:</span>  +38066-66-66-666</li>
                  <li><span>Email:</span>   mail@gmail.com</li>
                  <li><span>Skype:</span>   mySkypeAcc</li>
                </ul>
               
                
                
              </div>
              <div className="col-md-6">
                <div className="footer-contacts-logo text-right"></div>
              </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
