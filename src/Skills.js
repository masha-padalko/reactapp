import React, { Component } from 'react';
import './Skills.sass';


class Skills extends Component {
	constructor(props) {

	    super(props);

		const  skills = [
		     { name: "HTML5", level: 8},
			 { name: "CSS3", level: 5},
			 { name: "JavaScript", level: 10},
			 { name: "ReactJS", level: 8 },
			 { name: "AngularJS", level: 8 },
		]

	    this.state = { skills };
	}

  render() {
    return (
      <section id="skills">
        <div className="center-container">
        	<h2>Skills</h2>
        	<div>
			    {this.state.skills.map((skill, index) => (
			    			<div>
					        	<p key={index}>{skill.name}</p>
							    <Skill value={skill.level}/>
					        </div>
			        	)
			    	)
				}
			</div>
        </div>
      </section> 
    );
  }
}

class Skill extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    var classes = new Array(10).fill('active')
      .map( (className, i) => (i<this.props.value) ? className : '');
    console.log(classes, this.props.value);
    var items = classes
      .map( (className, i) => (<li key={i} className={className}><a href="#">{className}</a></li>));

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default Skills;
