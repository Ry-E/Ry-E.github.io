import React from 'react';
import '../styles/Landing.css';

function Landing() {
	return (
		<div className="landing__container">
			<div className="nameBox">
				<h1>Ryan Eldon</h1>
			</div>
			<h2>Web and App Development Portfolio</h2>
			<div className="contact__info">
				<h3>ryaneldon24@gmail.com</h3>
				<div className="links">
					<a id="black" href="https://github.com/Ry-E">
						Github
					</a>
					<a
						id="white"
						href="https://www.linkedin.com/in/ryan-eldon-837074110/"
					>
						LinkedIn{' '}
					</a>
				</div>
			</div>
		</div>
	);
}

export default Landing;
