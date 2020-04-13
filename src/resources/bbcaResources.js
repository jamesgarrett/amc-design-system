import React from 'react'
// import { Link } from 'react-router-dom';
import iconSet from '../data/icons.js';
import bbcaLogos from '../data/bbca-logos.js';

class BbcaResources extends React.Component{
  constructor(){
    super();
    this.state = {
        icons: {iconSet},
        logos: {bbcaLogos},
    };
  }

  render(){
    // let icons = this.state.icons.iconSet
    // let logos = this.state.logos.bbcaLogos
    return(
      <div className='resources m-x'>

        <body className="container-fixed">
          <h4 className="display-primary-4 m-t m-lg">Coming Soon</h4>
        </body>
      </div>
    )

  }
}

export default BbcaResources;
