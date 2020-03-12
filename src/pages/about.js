import React from 'react';
import { NavLink } from 'react-router-dom';

class About extends React.Component {
    render(){
      return (
        <div className="getting-started m-x">
        	<header className="header-text tc p-y">
		        <h1 className='headline-1 m-y'>Guidelines</h1>
  			    <p className='body-lg m-y'>A set of guidelines for using the design system to create digital experiences.</p>
  	    	</header>
          <body className="p-y container-fixed">
            <div className="row three-up m-b m-lg">
              <div className="card m-b m-sm m-r">
                <NavLink to='/resources'>
                <img alt="Logos" className="thumbnail" src={require('../img/tiles/logos.png')} />
                </NavLink>
              </div>
              <div className="card m-b m-sm m-r">
                <NavLink to='/typography/amc'>
                <img alt="typography" className="thumbnail" src={require('../img/tiles/typography.png')} />
                </NavLink>
              </div>
              <div className="card m-b m-sm m-r">
                <NavLink to='/templates/home/amc'>
                <img alt="Templates" className="thumbnail" src={require('../img/tiles/components.png')} />
                </NavLink>
              </div>
              <div className="card m-b m-sm m-r">
                <NavLink to='/images'>
                <img alt="Images" className="thumbnail" src={require('../img/tiles/images.png')} />
                </NavLink>
              </div>
              <div className="card m-b m-sm m-r">
                <NavLink to='/resources/#icons'>
                <img alt="Images" className="thumbnail" src={require('../img/tiles/icons.png')} />
                </NavLink>
              </div>
              <div className="card m-b m-sm m-r">
                <NavLink to='/voice'>
                <img alt="Voice" className="thumbnail" src={require('../img/tiles/voice.png')} />
                </NavLink>
              </div>
            </div>
          </body>
	    </div>
          );
    }
}

export default About;
