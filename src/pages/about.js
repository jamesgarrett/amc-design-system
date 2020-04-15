import React from 'react';
import { NavLink } from 'react-router-dom';

class About extends React.Component {
    render(){
      return (
        <div className="getting-started m-x">
        	<header className="header-text tl container-fixed p-y">
		        <h1 className='headline-1 m-y'>Guidelines</h1>
  			    <p className='body-lg m-y'>A set of guidelines for using the design system to create digital experiences.</p>
  	    	</header>
          <div className="p-y container-fixed">
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

            <h4 className="display-primary-4 m-t m-lg">Getting Started</h4>
            <p className="body-md">Download our sketch files to get up and running designing digital experiences for AMC Networks.</p>

            <div className="row three-up m-b m-lg">
              <div className="card m-b m-sm m-r">
                <a href="https://amcnetworks.box.com/shared/static/1ryqj8p5heauaqarrzdhe3a4o1hamyv1.zip" target="_blank" rel="noopener noreferrer" download>
                <img alt="Getting Started Sketch File" className="thumbnail" src={require('../img/tiles/sketch-getting-started.png')} />
                </a>
              </div>
              <div className="card m-b m-sm m-r">
                <a href="https://amcnetworks.box.com/shared/static/82nrhrsi9q2605hx86u64u0gczlf4rzq.zip" target="_blank" rel="noopener noreferrer" download>
                <img alt="AMC Web Sketch Files" className="thumbnail" src={require('../img/tiles/sketch-amc-web.png')} />
                </a>
              </div>
              <div className="card m-b m-sm m-r">
                <a href="https://amcnetworks.box.com/shared/static/gv1mecoodjejnn84nxy1qbwgc1qbfg1j.zip" target="_blank" rel="noopener noreferrer" download>
                <img alt="AMC TV Sketch Files" className="thumbnail" src={require('../img/tiles/sketch-amc-tv.png')} />
                </a>
              </div>
              <div className="card m-b m-sm m-r">
                <a href="https://amcnetworks.box.com/shared/static/yvd0s7ecx367f5kbv6iftar1fnye17g0.zip" target="_blank" rel="noopener noreferrer" download>
                <img alt="AMC Mobile Sketch Files" className="thumbnail" src={require('../img/tiles/sketch-amc-mobile.jpg')} />
                </a>
              </div>
            </div>

          </div>
	    </div>
          );
    }
}

export default About;
