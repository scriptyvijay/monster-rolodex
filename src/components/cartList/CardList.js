import React from "react";
import "./cardList.css";
import Card from "../card/Card";

const CardList = (props) => {
	return (
		<div className="CardList">
			{props.monster.map((monster) => (
				<Card key={monster.id} monster={monster} imgPath={`https://robohash.org/${monster.id}.png?set=set3`} />
			))}
		</div>
	);
};

export default CardList;
