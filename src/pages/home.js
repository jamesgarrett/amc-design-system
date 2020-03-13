import React from 'react'
import { NavLink } from 'react-router-dom';


  class Home extends React.Component{
  	render(){
      var alt_text = ''
  		return(
			<div className='page home m-x'>
        <header className="header-text tc container-fixed p-y">
			    <h1 className='headline-1 m-y'>Introduction</h1>
			    <p className='body-lg col-6'>A set of resources for designers and developers.</p>
			  </header>
      </div>
  		)
  	}
  }

export default Home;
