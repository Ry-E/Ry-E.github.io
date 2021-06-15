import React from 'react';
import Sketch from './Sketch';
import '../styles/Portfolio.css';
import robinhood from '../assets/robinhood-clone.png';
import videography from '../assets/videography-portfolio.png';

function Portfolio() {
	return (
		<div className="portfolio">
			<div className="portfolio__card">
				<h1>Robinhood Clone</h1>
				<div className="portfolio__body">
					<div className="portfolio__sketch">
						<Sketch />
					</div>
					<div className="portfolio__project">
						<a
							href="https://ryaneldon.js.org/Robinhood"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="robinhoodClone"
								src={robinhood}
								alt="A visual clone of the Robinhood trading web UI"
								width="100%"
								height="100%"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="portfolio__card">
				<h1>Videography Portfolio</h1>
				<div className="portfolio__body">
					<div className="portfolio__sketch">
						<Sketch />
					</div>
					<div className="portfolio__project">
						<a
							href="https://ryaneldon.js.org/Videography-Portfolio"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="videography"
								src={videography}
								alt="A screenshot of my web development portfolio"
								width="100%"
								height="100%"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
