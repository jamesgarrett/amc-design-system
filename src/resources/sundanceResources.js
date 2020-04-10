import React from 'react'
import { Link } from 'react-router-dom';
import iconSet from '../data/icons.js';
import sundanceLogos from '../data/sundance-logos.js';

class SundanceResources extends React.Component{
  constructor(){
    super();
    this.state = {
        icons: {iconSet},
        logos: {sundanceLogos},
    };
  }

  render(){
    let icons = this.state.icons.iconSet
    let logos = this.state.logos.sundanceLogos
    return(
      <div className='resources m-x'>

        <body className="container-fixed">
          <h4 className="display-primary-4 m-t m-lg">Logos</h4>
          <p className="body-md">A set of logos approved for use in  digital experiences.</p>
          <ul className="row five-up m-y">
            {logos.map(logo =>
              <li key={logo.slug} className={logo.dark ? "dark " + "tile p-y p-md hidden" : "light " + "tile p-y p-x p-md"}>
                <img className="m-y" src={logo.src} alt={logo.alt} />
                <p className="body-xs p-x tc">{logo.alt} <br></br> {logo.type}</p>
              </li>
            )}
          </ul>
          <p className="body-md">Download the full complement of icons in SVG format for use in your projects.</p>
          <Link to="/downloads/sundance-logos.zip" className="button-md button button-light m-y" target="_blank" download>
            <img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all logos"/>
            Download All
          </Link>

          <h4 className="display-primary-4 m-t m-lg">Icons</h4>
          <p className="body-md">We use icons in our experience as recognizable ways to quickly communicate familiar concepts and expected behaviors to our users.</p>
          <ul className="icon-set m-y">
            {icons.map(icon =>
              <li key={icon.slug} className="tile p-y p-md">
                <img className="icon m-y i-xl" src={icon.src} alt={icon.alt} />
                <p className="body-xs">{icon.alt}</p>
              </li>
            )}
          </ul>
          <p className="body-md">Download the full complement of icons in SVG format for use in your projects.</p>
          <Link to="/downloads/icons.zip" className="button-md button button-light m-y" target="_blank" download>
            <img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all icons"/>
            Download All
          </Link>

        </body>
      </div>
    )

  }
}

export default SundanceResources;
