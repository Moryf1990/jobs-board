import React from 'react';
import ReactDOM from 'react-dom';

const InfoBox = React.createClass({
	render: function() {
		return (
			<section className="infoSection">
				<section className="infoAdvertisement">
					<h1>Looking for a job?</h1><hr/>
					<div className="advertiseText">Create a fresh jobs profile andlet employers come to you</div>
					<ul>
						<li className="advertiseList">Employers search our database and contact you</li>
						<li className="advertiseList">Import easily from LinkedIn</li>
						<li className="advertiseList">Link to Stack Overflow, GitHub, CodePlex and more</li>
					</ul>
						<button className="advertiseButton">Create a Profile</button>
				</section>
			</section>
		)
	}
}); 

export default InfoBox;