import React, { Component } from 'react';
import './Contact.sass';


class Contact extends Component {

	constructor(props) {
	    super(props);
	    this.state = {name: '', email: ''};

	    this.handleNameChange = this.handleNameChange.bind(this);
	    this.handleEmailChange = this.handleEmailChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleNameChange(e) {
	   this.setState({name: e.target.value});
	}
	handleEmailChange(e) {
	   this.setState({email: e.target.value});
	}
	handleSubmit(e) {
	  	console.log("Name: " + this.state.name);
	    console.log("Email: " + this.state.email);
	    e.preventDefault();
	}

  render() {
    return (
      <div className="section" id="contact">
        <div className="center-container">
        	<h2>Contact</h2>
        	<form onSubmit={this.handleSubmit}>
        		<input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
        		<input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
        		<input type="submit" value="Submit"/>
        	</form>
        </div>
      </div> 
    );
  }
}

export default Contact;