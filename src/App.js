import React, { Component } from "react";
import "./App.css";
import CardList from "./components/cartList/CardList";
import Search from "./components/search/Search";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monster: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monster: users }));
	}

	render() {
		const { searchField, monster } = this.state;
		const filterMonster = monster.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
		return (
			<div className="App">
				<h1>Monster Rolodex </h1>
				<Search handlePlaceHolder={"Search Here"} handleChange={(e) => this.setState({ searchField: e.target.value })} />
				<CardList monster={filterMonster} searchField={searchField} />
			</div>
		);
	}
}

export default App;
