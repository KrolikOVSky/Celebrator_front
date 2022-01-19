import React from 'react'

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="container">
				<hr/>
				<p className="float-end"><a href="#">Back to top</a></p>
				<p>© {new Date().getFullYear()} KrolikOVSky</p>
			</footer>
		)
	}
}