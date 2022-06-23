import React from "react";
import "./search.css";

const Search = (props) => {
	const { handlePlaceHolder, handleChange } = props;
	return (
		<div className="Search-Box">
			<input type="text" placeholder={handlePlaceHolder} onChange={handleChange} />
		</div>
	);
};

export default Search;
