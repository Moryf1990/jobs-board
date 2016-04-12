import React from 'react';
import ReactDOM from 'react-dom';

const JobRow = React.createClass({
	render: function() {
		return (
			<section className="jobRowSection">
				<div className="jobTitle">Senior Frontend Engineer<span className="jobSpan">yesterday</span></div>
				<div className="company">NSONE <span className="citySpan">New York, NY</span></div>
				<div className="description">Senior Frontend EngineerSolve Hard Problems With a Team of Infrastructure ProsNSONE is based in New York...</div>
				<button className="jobButton">angularjs</button>
				<button className="jobButton">d3.js</button>
				<button className="jobButton">javascript</button>
				<button className="jobButton">ui</button>
				<button className="jobButton">css</button>
			</section>
		)
	}
});

export default JobRow;