import React from 'react';
import ResourceNav from '../components/resourcenav';
import Colors from '../components/colors.js'
import Logos from '../components/logos.js'
import Fonts from '../components/fonts.js'
import Placeholders from '../components/placeholders.js'
import Icons from '../components/icons.js'
import Downloads from '../components/downloads.js'

const ResourceDetail = ({ match, location }) => {
	const { params: { network } } = match;

	return (
		<div className={(network)+" body"} style={{marginTop: 0}}>
			<div className="intro">
				<header className="tl p-a">
					<h1 className='headline-1 m-y'>Resources</h1>
					<h4 className='headline-4 m-y col-8'>About the System</h4>
					<p className='body-lg description m-y col-8'>Our build system relies on a structure of shared and unique resources that both keep our network apps consistent, while accentuating the unique character that differentiate them.</p>
				</header>
			</div>
			<div className="m-x">
				<ResourceNav  />
				<Logos network={network} />
				<Colors network={network} />
				<Fonts network={network} />
				<Placeholders network={network} />
				<Icons network={network} />
				<Downloads network={network} />
			</div>
		</div>
	);
};

export default ResourceDetail;
