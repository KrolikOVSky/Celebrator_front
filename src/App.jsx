// noinspection JSValidateTypes
import React, {Component} from 'react';
import Footer from "./components/blocks/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/blocks/Header";
import NotFound from "./components/NotFound";
import AddBirthday from "./components/manage/AddBirthday";
import EditPage from "./components/manage/EditPage";
import StartPage from "./components/StartPage"

export default class App extends Component {
	render() {
		return (
			<Router>
				<Header/>
				<div className={"container-fluid bg-gradient align-content-center"}>
					<Switch>
						<Route exact path={"/"} component={StartPage}/>
						<Route exact path={"/add"} component={AddBirthday}/>
						<Route exact path={"/edit"} component={EditPage}/>
						<Route component={NotFound}/>
					</Switch>
				</div>
				<Footer/>
			</Router>
		);
	}
}

