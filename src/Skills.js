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
        	<table>
          
			    {this.state.skills.map((skill, index) => (
			    			<tr>
					        <td key={index}>{skill.name}</td>
							    <td  key={index}><Skill value={skill.level}/></td>
					        </tr>
			        	)
			    	)
				}

			</table>
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

    var items = classes
      .map( (className, i) => (<li key={i} className={className}></li>));

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default Skills;
