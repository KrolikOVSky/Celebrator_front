import React from 'react'
import axios from "axios";
import {birthdayUrl, targetToState} from "../../Global";
import {Redirect} from "react-router-dom";
import Form from "../blocks/Form";

export default class AddBirthday extends React.Component {

	state = {
		birthday: {
			name: "",
			lastName: "",
			midName: "",
			sex: "",
			role: "",
			date: "",
			image: "",
		},
		redirect: false
	}

	handleChange = e => {
		this.setState({birthday: targetToState(e, this.state.birthday)})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const birthday = this.state.birthday
		axios.post(birthdayUrl, birthday).then(res => {
			if (res.status === 200) this.setState({redirect: true})
		})
	}

	render() {
		const {redirect} = this.state
		if (redirect) return <Redirect to={"/"}/>
		return (
			<div className={"container mb-5"}>
				<Form caption={"Add birthday"}
				      onChange={(e) => this.handleChange(e)}
				      onSubmit={(e) => this.handleSubmit(e)}
				      comeBack={null}
				      object={this.state.birthday}/>
			</div>
		)
	}
}