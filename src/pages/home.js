import React from 'react'
import { NavLink } from 'react-router-dom';


  class Home extends React.Component{
  	render(){
      var alt_text = ''
  		return(
			<div className='home m-x'>
        <header className="header-text">
			    <h1 className='headline-1 m-y'>Introduction</h1>
			    <p className='body-lg col-6'>The AMC Design System is designed to be a comprehensive resource for designers and developers on the digital product team.</p>
          <p className="body-lg col-6">The system is intended to help with the rapid development and deployment of our digital products. Included in this system are typographic rules and sample templates.</p>
			  </header>
        <body className="m-y">
          <h4 className="headline-3 m-y m-lg">A few quick links...</h4>
          <div className="row m-b m-lg">
            <div className="card">
              <NavLink to='/typography/amc'>
              <img alt={alt_text} className="thumbnail" src={require('../img/tiles/amc-type-tile.png')} />
              <div className="body-lg m-b">AMC Typography Table</div>
              </NavLink>
            </div>
            <div className="card">
              <NavLink to='/typography/sundance'>
              <img alt={alt_text} className="thumbnail" src={require('../img/tiles/sundance-type-tile.png')} />
              <div className="body-lg m-b">Sundance TV Typography Table</div>
              </NavLink>
            </div>
            <div className="card">
              <NavLink to='/home/sundance'>
              <img alt={alt_text} className="thumbnail" src={require('../img/tiles/sundance-home-tile.png')} />
              <div className="body-lg m-b">Sundance TV Home Template</div>
              </NavLink>
            </div>
            <div className="card">
              <NavLink to='/home/amc'>
              <img alt={alt_text} className="thumbnail" src={require('../img/tiles/amc-home-tile.png')} />
              <div className="body-lg m-b">AMC Home Template</div>
              </NavLink>
            </div>
          </div>
        </body>
      </div>
  		)
  	}
  }

export default Home;
