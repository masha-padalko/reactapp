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
							    <SkillLevel value={skill.level}/>
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

class SkillLevel extends Component {

	constructor(props) {

	    super(props);

		const items = new Array(10).fill('active')

	    this.state = { items };
	}

    render() {
       	this.state.items.map( (className, i) => (i<this.props.value) ? className : '')
		  .map(className => `<li class="${className}"><a href="#"></a></li>` )
		  .join('')
    	return this.state.items
    }
}

export default Skills;
