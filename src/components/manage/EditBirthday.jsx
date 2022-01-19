import React from 'react'
import axios from "axios";
import {birthdayUrl, targetToState} from "../../Global";
import Form from "../blocks/Form";

export default class EditBirthday extends React.Component {

	state = {
		birthday: {
			id: "",
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

	componentDidMount() {
		this.setState({birthday: this.props.object})
	}

	handleChange = e => {
		this.setState({birthday: targetToState(e, this.state.birthday)})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		axios.put(birthdayUrl, this.state.birthday).then(res => {
			if (res.status === 200) this.setState({redirect: true})
		})
	}

	render() {
		const {redirect} = this.state
		if (redirect) this.props.comeBack()
		return (
			<div className={"container mb-5"}>
				<Form caption={"Edit birthday"}
				      onChange={(e) => this.handleChange(e)}
				      onSubmit={(e) => this.handleSubmit(e)}
				      comeBack={() => this.props.comeBack()}
				      object={this.state.birthday}/>
			</div>
		)
	}
}