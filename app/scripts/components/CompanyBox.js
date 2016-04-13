import React from 'react';
import ReactDOM from 'react-dom';

const CompanyBox = React.createClass({
	render: function() {
		return(
			<section className="companySection">
				<h1 className="companyHeader">Company Information</h1><hr/>
				<div className="bigImage"></div>
				<div className="imageFooter"></div>
			</section>
		)
	}
});

export default CompanyBox