import React from 'react';
import Sketch from './Sketch';
import Project from './Project';
import '../styles/Portfolio.css';
import robinhood from '../assets/robinhood-clone.png';
import videography from '../assets/videography-portfolio.png';
import nucampsite from '../assets/nucampsite_project.png';
import sarahliz_Fitness from '../assets/sarahliz_fitness.png';

function Portfolio() {
	return (
		<div className="portfolio">
			<Project
				name="SarahLiz Fitness Website"
				url="https://sarahlizfitness.herokuapp.com/"
				imgClass="sarahLizFitness"
				img={sarahliz_Fitness}
				alt="A clean looking website for a personal trainer"
			/>
			<Project
				name="Robinhood Clone"
				url="https://ryaneldon.js.org/Robinhood"
				imgClass="robinhoodClone"
				img={robinhood}
				alt="A visual clone of the Robinhood trading web UI"
			/>
			<Project
				name="Videography Portfolio"
				url="https://ryaneldon.js.org/Videography-Portfolio"
				imgClass="videography"
				img={videography}
				alt="A screenshot of my web development portfolio"
			/>
			<Project
				name="Nucampsite"
				url="http://3.133.161.173"
				imgClass="nucampsite"
				img={nucampsite}
				alt="A simple and modern web design"
			/>
		</div>
	);
}

export default Portfolio;
