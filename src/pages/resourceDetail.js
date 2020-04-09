import React from 'react';
import ResourceNav from '../components/resourcenav';
import AmcResources from '../resources/amcResources';

const ResourceDetail = ({ match, location }) => {
	const { params: { network } } = match;
	var resourcePage;

	if ( network === 'amc'){
	  resourcePage = <AmcResources />;
  }
	// } if ( network === 'sundance') {
	//   resourcePage = <SundanceType />;
	// } if ( network === 'ifc') {
	//   resourcePage = <IfcType />;
	// } if ( network === 'bbca') {
	//   resourcePage = <BBCAType />;
	// }

	var net = network;

	return (
	<div className={net}>
	  <div className="intro p-x">
      <section className="m-b tl container-fixed p-y">
        <h1 className='headline-1 m-y'>Resources</h1>
        <h4 className='headline-4 m-y col-8'>About the System</h4>
        <p className='body-lg description m-y col-8'>Our build system relies on a structure of shared and unique resources that both keep our network apps consistent, while accentuating the unique character that differentiate them.</p>
      </section>
	  </div>
				<ResourceNav/>
	      {resourcePage}
	</div>
	);
};

export default ResourceDetail;
