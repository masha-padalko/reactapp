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
      <section id="contact">
        <div className="center-container">
        	<h2>Contact</h2>
        	<form onSubmit={this.handleSubmit}>
        		<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
        		<input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
        		<input className="contact-send" type="submit" value="Send"/>
        	</form>
        </div>
      </section> 
    );
  }
}

export default Contact;