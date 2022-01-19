import React from 'react'
import {Link} from "react-router-dom";
import {logo} from "../../Global";

export default class Header extends React.Component {
	render() {
		return (
			<div className="container-lg">
				<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
					<a href="/"
					   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">

						<span><img height={50} width={50} src={logo} alt="logo"/></span>
						<span className="fs-4">Celebrator</span>
					</a>

					<ul className="nav nav-pills">
						<li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link>
						</li>
						<li className="nav-item"><Link to={"/add"} className="nav-link">Add event</Link></li>
						<li className="nav-item"><Link to="/edit" className="nav-link">Edit events</Link></li>
					</ul>
				</header>
			</div>
		)
	}
}