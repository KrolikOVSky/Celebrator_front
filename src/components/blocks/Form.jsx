import React from 'react'
import "../../resources/styles/Manage.css"
import {checkImg, notFoundImage} from "../../Global";

export default class Form extends React.Component {
	state = {
		image_s: "",
		first: true
	}

	handleChange = e => {
		e.preventDefault()
		this.props.onChange(e)
	}

	handleSubmit = (e) => {
		this.props.onSubmit(e)
	}

	handleCancel = () => {
		this.props.comeBack()
	}

	handleTemp = (e) => {
		let file = e.target.files[0]
		let reader = new FileReader();
		reader.onload = () => {
			this.setState({
				image_s: reader.result,
				first: false
			})
		}
		reader.readAsDataURL(file)
	}

	render() {
		const {caption, object} = this.props
		const {name, lastName, midName, sex, role, date, image} = object
		const {first, image_s} = this.state
		return (
			<div>
				<h1 className={"text-center display-4"}>{caption}</h1>
				<form className={"g-3"} onSubmit={this.handleSubmit}>
					<div className={"mt-1"}>
						<label htmlFor="name">Name*</label>
						<input id={"name"} type="text" className={"form-control"} placeholder={"Enter name"}
						       onChange={this.handleChange} defaultValue={name} required/>
					</div>

					<div className={"mt-5"}>
						<label htmlFor="lastname">Last name*</label>
						<input id={"lastname"} type="text" className={"form-control"} placeholder={"Enter lastname"}
						       onChange={this.handleChange} defaultValue={lastName} required/>
					</div>

					<div className={"mt-5"}>
						<label htmlFor="midname">Middle name</label>
						<input id={"midname"} type="text" className={"form-control"} placeholder={"Enter middle name"}
						       onChange={this.handleChange} defaultValue={midName}/>
					</div>

					<div className={"mt-5"}>
						<label htmlFor="sex">Choose sex</label>
						<select id="sex" className={"form-select"} onChange={this.handleChange} value={sex} required>
							<option disabled value={""}>Select sex</option>
							<option value={"male"}>Male</option>
							<option value={"female"}>Female</option>
							<option value={"Don't match"}>Don't match</option>
						</select>
					</div>

					<div className={"mt-5"}>
						<label htmlFor="role">Who this people for you?*</label>
						<input id={"role"} type="text" className={"form-control"} onChange={this.handleChange}
						       defaultValue={role}
						       required/>
					</div>

					<div className={"mt-5"}>
						<label htmlFor="date">Select date of birth*</label>
						<input id={"date"} type="date" className={"form-control"} onChange={this.handleChange}
						       defaultValue={date}
						       required/>
					</div>

					<div className={"mt-5 row justify-content-end align-items-center"}>

						<div className={"col me-auto"}>
							<label htmlFor="image">Choose image*</label>
							<input id={"image"} type="file" className={"form-control"} placeholder={"Enter image*"}
							       onChange={(e) => {
								       this.handleChange(e)
								       this.handleTemp(e)
							       }} accept={"image/*"}/>
						</div>

						<div className={"col-auto"}>
							<img className={"form-image"}
							     src={first && checkImg(image) ? image : !first && checkImg(image_s) ? image_s : notFoundImage}
							     alt="people_pic"/>
						</div>

					</div>

					<hr/>
					{
						this.props.comeBack !== null ?
							<input type="button"
							       className={"mt-3 mx-2 btn btn-outline-dark"}
							       value={"Cancel"}
							       onClick={this.handleCancel}/> : ''
					}
					<input type="submit" className={"mt-3 btn btn-success"} value={"Send"}/>
				</form>
			</div>
		)
	}
}