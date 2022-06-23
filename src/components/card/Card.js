import React from "react";
import "./card.css";
const Card = (props) => {
	return (
		<div className="card">
			<img src={props.imgPath} alt={props.monster.name} />
			<h1>{props.monster.name}</h1>
			<p>{props.monster.email}</p>
		</div>
	);
};

export default Card;
