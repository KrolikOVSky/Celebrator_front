import React from 'react'
import {celebratesUrl, checkImg, notFoundImage} from "../Global";
import axios from "axios";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"
import "../resources/styles/startPage.css"

export default class StartPage extends React.Component {

	state = {
		celebrates: []
	}

	parseToDate = (date, mark) => {
		let array = date.split("-")
		return `celebrated on ${array[2].length !== 2 ? `0${array[2]}` : array[2]}-${array[1].length !== 2 ? `0${array[1]}` : array[1]}-${mark === 1 ? new Date().getFullYear() + 1 : new Date().getFullYear()}`
	}

	componentDidMount() {
		axios.get(celebratesUrl).then(res => {
			this.setState({celebrates: res.data})
		})
	}

	render() {
		const {celebrates} = this.state
		return (
			<div className={"container"}>
				<Carousel showArrows={true} className={"carousel"}>
					{
						celebrates.map((item, key) => {
							return (
								<div key={key}>
									<img className={"picture"} src={checkImg(item.image) ? item.image : notFoundImage}
									     alt="img"/>
									<div className="legend innerText">
										<p>{item.name} {item.lastName} {item.midName} ({item.age} years old)</p>
										<p>{this.parseToDate(item.date, item.mark)}</p>
									</div>
								</div>
							)
						})
					}
				</Carousel>
			</div>
		)
	}
}