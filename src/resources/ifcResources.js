import React from 'react'
// import { Link } from 'react-router-dom';
import iconSet from '../data/icons.js';
import ifcLogos from '../data/ifc-logos.js';

class IfcResources extends React.Component{
  constructor(){
    super();
    this.state = {
        icons: {iconSet},
        logos: {ifcLogos},
    };
  }

  render(){
    // let icons = this.state.icons.iconSet
    // let logos = this.state.logos.ifcLogos
    return(
      <div className='resources m-x'>

        <body className="container-fixed">
          <h4 className="display-primary-4 m-t m-lg">Coming Soon</h4>
        </body>
      </div>
    )

  }
}

export default IfcResources;
