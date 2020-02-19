import React from 'react';
import Sidenav from '../components/sidenav';
import Conversions from '../pages/conversions';
import AmcType from '../networks/amc';

class Typography extends React.Component{
	render(){
		return(

      <main>
      <section className="intro m-b col-6">
        <h1 className='headline-1 m-v'>Typography</h1>
        <h4 className='headline-4 m-v col-8'>About the System</h4>
        <p className='subhead-1 description m-v'>The goal of the type system is to define a repeatable set of elements that can be deployed rapidly with consistent results. We use a core set of styles, and a fixed, unit independent sizing scale to generate consistent, readable type pairings.</p>
        <Sidenav/>
      </section>

      <AmcType />

      <Conversions />

      </main>
		)
	}
	
}

export default Typography;