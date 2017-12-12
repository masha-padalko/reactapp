import React, { Component } from 'react';
import './About.sass';

class About extends Component {

  constructor(props) {

    super(props);

      const infoArr = [
         { title: "Introducion", text: 'My name is Mariia. I am very interested in new technologies and always try to know something new. I wish to work in the strong modern company among in young and friendly people. '},
         { title: "Education", text: 'Donetsk National Technical University (2004-2009), Faculty of Computer Science and Informatics, Specialization: Сomputer ecological and economic monitoring'},
         { title: "Experience", text: 'Luxoft (Markup dev 2015-current), Anadea Inc(2014-2015), Evoplay(2014), Stearling Studio(2014), SteelKiwi(2013-2014), WebSparta(2013) '},
      ]

    this.state = { infoArr };
  }

  render() {
    return (
      <section id="about">
      <div className="container">
        <div className="row">
             <h2>About</h2>
             <div className="icon-user-circle col-md-12"><img src={require('./img/user-avatar.png')} /></div>
        </div>
      </div>
        <div className="container">
          <div className="row">
           
              {this.state.infoArr.map((item, index) => (
                <Info title={item.title} info={item.text} key={index}/>
                 )
               )
              }
        
          </div>
        </div>
      </section> 
    );
  }
}

class Info extends Component {
  render() {

    return (
      <div className="col-md-4">
        <h3>{this.props.title}</h3>
        <p>{this.props.info}</p>
      </div>
    );
  }

}

export default About;
