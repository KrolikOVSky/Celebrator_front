import React from 'react'
import "../../resources/styles/Manage.css"
import axios from "axios";
import {birthdayUrl, checkImg, notFoundImage} from "../../Global";

export default class EditBirthdayItem extends React.Component {

	handleEdit = () => {
		this.props.turnToEdit(this.props.object)
	}

	handleRemove = () => {
		if (confirm("Are you sure to delete this birthday?")) axios.delete(`${birthdayUrl}?id=${this.props.object.id}`).then(() => {
			this.props.refresh()
		})
		else this.props.refresh()
	}

	render() {
		const {object} = this.props
		return (
			<div className={`container editItem row align-items-center`}>
				<div className={"col-auto me-auto"}>
					<h1><i><b>Full name: </b></i>{object.name} {object.lastName} {object.midName}</h1>
					<hr/>
					<h3><i><b>Date of birth: </b></i>{object.date}</h3>
					<h3><i><b>Sex: </b></i>{object.sex}</h3>
					<h3><i><b>Role: </b></i>{object.role}</h3>
				</div>

				<div className={"col-auto"}>
					<img className={"editImage"} src={checkImg(object.image) ? object.image : notFoundImage}
					     alt={`${object.name} ${object.lastName} ${object.midName}`}/>
				</div>

				<div className={"col-auto row gap-3"}>
					<input type="button" value={"Edit"} className={"btn btn-warning"} onClick={this.handleEdit}/>
					<input type="button" value={"Remove"} className={"btn btn-danger"} onClick={this.handleRemove}/>
				</div>
			</div>
		)
	}
}