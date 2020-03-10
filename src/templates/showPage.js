import React from 'react';
import GetShows from '../components/getShows';

const NetworkPage = ({ match, location }) => {
	const { params: { network } } = match;
	var net = network;

	return (
	<div className={net}>
	  <body className="m-x">

			<header className="m-y">
				<h1 className="headline-primary-1 m-y">Templates</h1>
				<h2 className="body-lg m-y">Template: Homepage</h2>
			</header>

			<GetShows />

	  </body>
	</div>
	);
};

export default ShowPage;
