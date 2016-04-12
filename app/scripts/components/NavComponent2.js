import React from 'react';
import ReactDOM from 'react-dom';

const NavComponent2 = React.createClass({
    render: function() {
        return (
        	<ul className="ul">
				<img src="https://github.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/blob/master/images/logo.png?raw=true" className="image" />
				<li className="list1 list">FRESH JOBS</li>
				<li className="list"><a href="#jobs" className="list">JOBS</a></li>
				<li className="list"><a href="#companies" className="list">COMPANIES</a></li>
				<li className="list"><a href="#" className="list">CITIES</a></li>
				<li className="list"><a href="#" className="list">WHY FRESH?</a></li>
				<li className="list"><a href="#" className="list">FOR EMPLOYERS</a></li>
			</ul>
        )
    }
});

// ReactDOM.render(<NavComponent2 />, document.querySelector('.main'));

export default NavComponent2;