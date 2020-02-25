import React from 'react';
import NetworkNav from '../components/networknav';
import AmcType from '../networks/amc';
import SundanceType from '../networks/sundance';
import Conversions from '../pages/conversions';
import Hero from '../components/hero';
import Swimlane from '../components/swimlane';
import SwimlaneTitle from '../components/swimlaneTitle';
import Grid from '../components/grid';

const NetworkPage = ({ match, location }) => {
	const { params: { network } } = match;
	var net = network;
	var alt_text = ''

	return (
	<div className={net}>
	  <body>

			<header className="container-fixed m-v">
				<h1 className="headline-primary-1 m-v">Examples</h1>
				<h2 className="body-lg m-v">Template: Homepage</h2>
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
