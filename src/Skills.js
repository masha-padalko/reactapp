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
      <div className="section" id="skills">
        <div className="center-container">
        	<h2>Skills</h2>
        	<div>
			    {this.state.skills.map((skill, index) => (
			        	<p key={index}>{skill.name}</p>)
			    	)
				}
			    </div>
        </div>
      </div> 
    );
  }
}

export default Skills;
