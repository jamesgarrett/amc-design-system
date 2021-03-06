import React from 'react';
import { NavLink } from 'react-router-dom';

const ResourcePage = () => {
		const alt_text = ''
return (
	<div className="body" style={{marginTop: 0}}>
			<div className="intro">
				<header className="tl p-a">
		      <h1 className='headline-1 m-y'>Resources</h1>
		      <h4 className='headline-4 m-y col-8'>About the System</h4>
		      <p className='body-lg description m-y col-8'>Our build system relies on a structure of shared and unique resources that both keep our network apps consistent, while accentuating the unique characters that differentiate them.</p>
				</header>
			</div>
			<section className="m-x">
				<div className="row four-up m-y">
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/vanilla'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/vanilla.jpg')} />
						<div className="body-lg m-b tl">Vanilla Resources</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/amc'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/amc.jpg')} />
						<div className="body-lg m-b tl">AMC Resources</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/sundance'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/sundance.jpg')} />
						<div className="body-lg m-b tl">SundanceTV Resources</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/ifc'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/ifc.jpg')} />
						<div className="body-lg m-b tl">IFC Resources</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/bbca'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/bbca.jpg')} />
						<div className="body-lg m-b tl">BBC America Resources</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/wetv'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/wetv.jpg')} />
						<div className="body-lg m-b tl">WEtv Resources</div>
						</NavLink>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ResourcePage;
