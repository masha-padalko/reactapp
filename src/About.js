import React, { Component } from 'react';
import './About.sass';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <h2>About</h2>
            <div className="col-md-4 text-right">
              <h3>Goals</h3>
              <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
            </div>
            <div className="icon-user-circle-o col-md-"></div>
            <div className="col-md-4">
              <h3>Dreams</h3>
              <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
            </div>
          </div>
        </div>
      </section> 
    );
  }
}

export default About;
