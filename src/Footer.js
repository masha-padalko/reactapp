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
                  <li><span>Facebook:</span><a href="https://www.facebook.com/maria.padalko">http://github.com/masha-padalko/</a></li>
                  <li><span>Linkedin:</span><a href="http://linkedin.com/in/mariya-padalko-15992b82">http://linkedin.com/in/mariya-padalko-15992b82</a></li>
                  <li><span>GitHub:</span><a href="http://github.com/masha-padalko/">http://github.com/masha-padalko/</a></li>
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
