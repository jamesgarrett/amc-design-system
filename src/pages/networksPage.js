import React from 'react';
import Sidenav from '../components/sidenav';
import Conversions from '../pages/conversions';

const NetworksPage = () => {
return (
	  <div className="container-fixed">
	    <section className="intro m-b col-6">
	      <h1 className='headline-1 m-y'>Typography</h1>
	      <h4 className='headline-4 m-y col-8'>About the System</h4>
	      <p className='body-lg description m-y col-8'>The goal of the type system is to define a repeatable set of elements that can be deployed rapidly with consistent results. We use a core set of styles, and a fixed, unit independent sizing scale to generate consistent, readable type pairings.</p>
				<p className='body-lg m-y'>Select a network from the menu below to view its typography scale.</p>
			</section>
	    <Sidenav/>
	  </div>
	);
};

export default NetworksPage;
