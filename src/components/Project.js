import React from 'react';
import Sketch from './Sketch';

function Project(props) {
	return (
		<div>
			<div className="portfolio__card">
				<h1>{props.name}</h1>
				<div className="portfolio__body">
					<div className="portfolio__sketch">
						<Sketch />
					</div>
					<div className="portfolio__project">
						<a href={props.url} target="_blank" rel="noreferrer">
							<img
								className={props.imgClass}
								src={props.img}
								alt={props.alt}
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

export default Project;
