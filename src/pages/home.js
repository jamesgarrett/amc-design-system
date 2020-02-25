import React from 'react'

  class Home extends React.Component{
  	render(){
  		return(
			<div className='home container-fixed'>
        <header className="header-text">
			    <h1 className='headline-1 m-v'>Introduction</h1>
			    <p className='body-lg col-6'>The AMC Design System is designed to be a comprehensive resource for designers and developers on the digital products team.</p>
          <p className="body-lg col-6">The system is intended to help with the rapid development and deployment of our digital products. Included in this systema are typographic rules and how to implement them.</p>
			  </header>
      </div>
  		)
  	}
  }

export default Home;