import React from 'react';
import { NavLink } from 'react-router-dom';

const ResourcePage = () => {
		const alt_text = ''
return (
	  <div className="intro p-x">
	    <section className="m-b tl container-fixed p-y">
	      <h1 className='headline-1 m-y'>Resources</h1>
	      <h4 className='headline-4 m-y col-8'>About the System</h4>
	      <p className='body-lg description m-y col-8'>Our build system relies on a structure of shared and unique resources that both keep our network apps consistent, while accentuating the unique character that differentiate them.</p>
			</section>
			<section className="m-y container-fixed">
				<div className="row five-up m-b m-lg">
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/amc'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/amc.png')} />
						<div className="body-lg m-b tl">AMC Resources</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/sundance'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/sundance.png')} />
						<div className="body-lg m-b tl">SundanceTV Resources</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/ifc'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/ifc.png')} />
						<div className="body-lg m-b tl">IFC Resources</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/bbca'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/bbca.png')} />
						<div className="body-lg m-b tl">BBC America Resources</div>
						</NavLink>
					</div>
					<div className="card m-b m-r m-sm">
						<NavLink to='/resources/wetv'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/wetv.png')} />
						<div className="body-lg m-b tl">WEtv Resources</div>
						</NavLink>
					</div>
				</div>
				</section>
	  </div>
	);
};

export default ResourcePage;
