import React from 'react';
import ResourceNav from '../components/resourcenav';
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
		<section className="m-b tl container-fixed p-y">
			<h1 className='headline-1 m-y'>Resources</h1>
			<h4 className='headline-4 m-y col-8'>About the System</h4>
			<p className='body-lg description m-y col-8'>Our build system relies on a structure of shared and unique resources that both keep our network apps consistent, while accentuating the unique character that differentiate them.</p>
		</section>
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
