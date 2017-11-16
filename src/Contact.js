import React, { Component } from 'react';
import './Contact.sass';


class Contact extends Component {

	constructor(props) {
	    super(props);
	    this.state = {name: '', email: '', mes: ''};

	    this.handleNameChange = this.handleNameChange.bind(this);
	    this.handleEmailChange = this.handleEmailChange.bind(this);
	    this.handleMesChange = this.handleMesChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleNameChange(e) {
	   this.setState({name: e.target.value});
	}
	handleEmailChange(e) {
	   this.setState({email: e.target.value});
	}
	handleMesChange(e) {
	   this.setState({mes: e.target.value});
	}
	handleSubmit(e) {
	  	console.log("Name: " + this.state.name);
	    console.log("Email: " + this.state.email);
	    console.log("Message: " + this.state.mes);
	    e.preventDefault();
	}

  render() {
    return (
      <section id="contact">
        <div className="container">
        	<h2>Contact</h2>
        	<div className="row">
        		<div className="col-md-5 col-sm-5">
        			<div className="contact-item">
        				<span className="contact-item-name">Phone number:</span>
        				<span className="contact-item-val">+38066-66-66-666</span>
        			</div>
        			<div className="contact-item">
        				<span className="contact-item-name">Email:</span>
        				<span className="contact-item-val">mail@gmail.com</span>
        			</div>
        			<div className="contact-item">
        				<span className="contact-item-name">Skype:</span>
        				<span className="contact-item-val">mySkypeAcc</span>
        			</div>
        		</div>
        		<div className="col-md-7 col-sm-7">
        			<form onSubmit={this.handleSubmit} className="contact-section-form">
		        		<input type="text" name="name" className="contact-section-form-input" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
		        		<input type="text" name="email" className="contact-section-form-input" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
		        		<textarea name="mes" className="contact-section-form-textarea" placeholder="Send message" value={this.state.mes} onChange={this.handleMesChange}></textarea>
		        		<input className="contact-send" type="submit" value="Send"/>
		        	</form>
        		</div>
        	</div>
        	
        </div>
      </section> 
    );
  }
}

export default Contact;