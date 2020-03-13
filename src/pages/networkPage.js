import React from 'react';
import Sidenav from '../components/sidenav';
import AmcType from '../networks/amc';
import IfcType from '../networks/ifc';
import SundanceType from '../networks/sundance';
import BBCAType from '../networks/bbca';
import Conversions from '../pages/conversions';

const NetworkPage = ({ match, location }) => {
	const { params: { network } } = match;
	var typeTable;
	if ( network === 'amc'){
	  typeTable = <AmcType />;
	} if ( network === 'sundance') {
	  typeTable = <SundanceType />;
	} if ( network === 'ifc') {
	  typeTable = <IfcType />;
	} if ( network === 'bbca') {
	  typeTable = <BBCAType />;
	}

	var net = network;

	return (
	<div className={net}>
	  <body className="m-x">
	    <section className="intro m-b tc container-fixed p-y">
	      <h1 className='headline-1 m-y'>Typography</h1>
	      <h4 className='tertiary-4 m-y col-8'>About the System</h4>
	      <p className='body-lg description m-y col-8'>The goal of the type system is to define a repeatable set of elements that can be deployed rapidly with consistent results. We use a core set of styles, and a fixed, unit independent sizing scale to generate consistent, readable type pairings.</p>
	    </section>
				<Sidenav/>
	      {typeTable}
	      <Conversions />
	  </body>
	</div>
	);
};

export default NetworkPage;
