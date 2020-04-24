import React from 'react';
import Sidenav from '../components/sidenav';
import TypeTable from '../components/typetable';
import Conversions from '../pages/conversions';

const NetworkPage = ({ match, location }) => {
	const { params: { network } } = match;

	return (
	<div className={(network)+" body"} style={{marginTop: 0}}>
	  <div className="intro">
	    <header className="m-b tl p-a">
	      <h1 className='headline-1 m-y'>Typography</h1>
	      <h4 className='tertiary-4 m-y col-8'>About the System</h4>
	      <p className='body-lg description m-y col-8'>The goal of the type system is to define a repeatable set of elements that can be deployed rapidly with consistent results. We use a core set of styles, and a fixed, unit independent sizing scale to generate consistent, readable type pairings.</p>
	    </header>
	  </div>
				<Sidenav/>
				<TypeTable network={network}></TypeTable>
	      <Conversions />
	</div>
	);
};

export default NetworkPage;
