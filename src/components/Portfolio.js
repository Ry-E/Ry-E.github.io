import React from 'react';
import Sketch from './Sketch';
import '../styles/Portfolio.css';
import robinhood from '../assets/robinhood-clone.png';

function Portfolio() {
	return (
		<div className="portfolio">
			<Sketch />
			<div className="portfolio__card">
				<h1>Robinhood Clone</h1>
				<a
					href="https://ryaneldon.js.org/Robinhood"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={robinhood}
						alt="The Robinhood trading web UI"
						width="50%"
						height="50%"
					/>
				</a>
			</div>
		</div>
	);
}

export default Portfolio;
