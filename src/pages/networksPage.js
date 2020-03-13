import React from 'react';
import Sidenav from '../components/sidenav';
import { NavLink } from 'react-router-dom';

const NetworksPage = () => {
		const alt_text = ''
return (
	  <div className="m-x">
	    <section className="intro m-b tl container-fixed p-y">
	      <h1 className='headline-1 m-y'>Typography</h1>
	      <h4 className='headline-4 m-y col-8'>About the System</h4>
	      <p className='body-lg description m-y col-8'>The goal of the type system is to define a repeatable set of elements that can be deployed rapidly with consistent results. We use a core set of styles, and a fixed, unit independent sizing scale to generate consistent, readable type pairings.</p>
			</section>
			<body className="m-y container-fixed">
				<div className="row four-up m-b m-lg">
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/amc'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/amc.png')} />
						<div className="body-lg m-b tl">AMC Typography</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/sundance'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/sundance.png')} />
						<div className="body-lg m-b tl">SundanceTV Typography</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/ifc'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/ifc.png')} />
						<div className="body-lg m-b tl">IFC Typography</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/typography/bbca'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/bbca.png')} />
						<div className="body-lg m-b tl">BBC America Typography</div>
						</NavLink>
					</div>
				</div>
				</body>
	  </div>
	);
};

export default NetworksPage;
