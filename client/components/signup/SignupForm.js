import React from 'react';
import timezones from '../../data/timezone';
import map from 'lodash/map';

class SignupForm extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordConfirmation: "",
			timezone: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	onSubmit(e){
		e.preventDefault();
		console.log(this.state);
	}
	render(){
		const options = map(timezones, (val, key) =>
			<option key={val} value={val} >{key}</option>
		);
		return (
			<form onSubmit={this.onSubmit} >
				<h1>Join our community</h1>
				<div className="form-group">
					<label className="control-label">UserName</label>
					<input 
						value = {this.state.username}
						onChange= {this.onChange}
						type="text"
						className="form-control"
						name="username"
						required
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Email</label>
					<input 
						value = {this.state.email}
						onChange= {this.onChange}
						type="mail"
						className="form-control"
						name="email"
						required
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Password</label>
					<input 
						value = {this.state.password}
						onChange= {this.onChange}
						type="password"
						className="form-control"
						name="password"
						required
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Password Confirmation</label>
					<input 
						value = {this.state.passwordConfirmation}
						onChange= {this.onChange}
						type="password"
						className="form-control"
						name="passwordConfirmation"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="timezone" className="control-label">Time Zone</label>
					<select
						className="form-control"
						name="timezone"
						id="timezone"
						value= {this.state.timezone}
						onChange= {this.onChange}
					>
						<option value="" disabled >Chosse your timezone</option>
						{options}
					</select>
				</div>
				<div className="form-group">
					<button className="btn btn-primary btn-lg">
						Sign Up
					</button>
				</div>
			</form>
		);
	}
}

export default SignupForm;