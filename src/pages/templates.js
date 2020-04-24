import React from 'react';
import { NavLink } from 'react-router-dom';

const Templates = () => {
		const alt_text = ''
return (
	  <div className="intro p-x">
	    <section className="m-b tl container-fixed p-y">
	      <h1 className='headline-1 m-y'>Templates</h1>
	      <h4 className='headline-4 m-y col-8'>About the System</h4>
	      <p className='body-lg description m-y col-8'>The templates system harnesses the power of the typography system to create uniform interfaces across platforms, devices, and networks.</p>
			</section>
			<section className="m-y container-fixed">
				<div className="row four-up m-b m-lg">
					<div className="card m-b m-r m-sm">
						<NavLink to='/templates/home/amc'>
						<img alt={alt_text} className="thumbnail" src={require('../img/tiles/amc.jpg')} />
						<div className="body-lg m-b tl">Homepage</div>
						</NavLink>
					</div>
				</div>
				</section>
	  </div>
	);
};

export default Templates;
