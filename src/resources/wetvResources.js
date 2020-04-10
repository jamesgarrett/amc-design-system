import React from 'react'
import { Link } from 'react-router-dom';
import iconSet from '../data/icons.js';
import wetvLogos from '../data/wetv-logos.js';

class WetvResources extends React.Component{
  constructor(){
    super();
    this.state = {
        icons: {iconSet},
        logos: {wetvLogos},
    };
  }

  render(){
    let icons = this.state.icons.iconSet
    let logos = this.state.logos.wetvLogos
    return(
      <div className='resources m-x'>

        <body className="container-fixed">
          <h4 className="display-primary-4 m-t m-lg">Coming Soon</h4>
        </body>
      </div>
    )

  }
}

export default WetvResources;
