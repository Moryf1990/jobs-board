import React from 'react';
import ReactDOM from 'react-dom';

const FilterBox = React.createClass({
	render: function() {
		return (
			<div className="filterBox">
				<section className="inputBoxes">
					<div className="inputText">Keywords</div>
					<input className="searchInput"></input>
				</section>
				<section className="inputBoxes">
					<div className="inputText">Location</div>
					<input className="searchInput"></input>
				</section>
				<section className="searchButton">
					<button className="button">Search</button>
				</section>
			</div>
		)
	}
});


export default FilterBox;