import React from 'react';
import NetworkNav from '../components/networknav';
import Hero from '../components/hero';
import Swimlane from '../components/swimlane';
import SwimlaneTitle from '../components/swimlaneTitle';
import Grid from '../components/grid';

const NetworkPage = ({ match, location }) => {
	const { params: { network } } = match;
	var net = network;

	return (
	<div className={net}>
	  <body className="m-x">

			<header className="p-y container-fixed">
				<h1 className="headline-primary-1 m-y">Templates</h1>
				<h2 className="body-lg m-y">Template: Homepage</h2>
			</header>

			<NetworkNav />

			<Hero />

			<Swimlane />

			<Grid />

	    <SwimlaneTitle />

	  </body>
	</div>
	);
};

export default NetworkPage;
