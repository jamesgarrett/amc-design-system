import React, { Component } from 'react';
import ResourceNav from '../components/resourcenav';
import { Link } from 'react-router-dom';
import Colors from '../components/colors.js'
import Logos from '../components/logos.js'
import Fonts from '../components/fonts.js'
import Placeholders from '../components/placeholders.js'
import Icons from '../components/icons.js'

const ResourceDetail = ({ match, location }) => {
	const { params: { network } } = match;

	return (
	<div className={network}>
		<div className="m-x">
			<ResourceNav  />
			<Logos network={network} />
			<Colors network={network} />
			<Fonts network={network} />
			<Placeholders network={network} />
			<Icons network={network} />
		</div>
	</div>
	);
};

export default ResourceDetail;
