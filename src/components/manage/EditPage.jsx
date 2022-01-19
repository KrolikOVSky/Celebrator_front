import React from 'react'
import axios from "axios";
import {birthdayUrl} from "../../Global";
import EditBirthdayItem from "../items/EditBirthdayItem";
import EditBirthday from "./EditBirthday";

export default class EditPage extends React.Component {

	state = {
		objects: [],
		object: {},
		editing: false
	}

	componentDidMount() {
		this.getData()
	}

	update = () => {
		this.getData()
		this.render()
	}

	getData = () => {
		this.setState({editing: false})
		axios.get(birthdayUrl).then(res => {
			this.setState({objects: res.data})
		})
	}

	render() {
		const {editing, object} = this.state
		if (editing) return <EditBirthday object={object} comeBack={() => this.update()}/>
		return (
			<div className={"container"}>
				<div className={"container row align-content-center"}>
					{
						this.state.objects.map((item, key) => {
							return <EditBirthdayItem className={"col-auto"}
							                         key={key}
							                         object={item}
							                         turnToEdit={(obj) => {
								                         this.setState({
									                         editing: true,
									                         object: obj
								                         })
							                         }}
							                         refresh={() => {
								                         this.update()
							                         }}/>
						})
					}
				</div>
			</div>
		)
	}
}