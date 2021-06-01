import React from 'react';
import Header from './Header';
import Landing from './Landing';
import Portfolio from './Portfolio';
import '../styles/Home.css';

function Home() {
	return (
		<div className="home__page">
			<div className="landing__view">
				<Header />
				<Landing />
			</div>
			<div className="portfolio__view">
				<Portfolio />
			</div>
		</div>
	);
}

export default Home;
