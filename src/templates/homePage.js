import React from 'react';
import NetworkNav from '../components/templatenav';
import Hero from '../components/hero';
import Swimlane from '../components/swimlane';
import SwimlaneTitle from '../components/swimlaneTitle';
import Grid from '../components/grid';

const NetworkPage = ({ match, location }) => {
	const { params: { network } } = match;
	var net = network;

	return (
	<div className={(network)+" body"} style={{marginTop: 0}}>
		<div className="intro">
			<header className="tl p-a">
				<h1 className="headline-primary-1 m-y">Templates</h1>
				<h2 className="body-lg m-y">Template: Homepage</h2>
			</header>
		</div>
			<NetworkNav />

			<Hero />

			<Swimlane />

			<Grid />

	    <SwimlaneTitle />
	</div>
	);
};

export default NetworkPage;
