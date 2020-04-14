import React from 'react'
import { Link } from 'react-router-dom';
import iconSet from '../data/icons.js';
import AMCBrand from '../data/amc-brand.js';

class AmcResources extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        icons: {iconSet},
        brand: {AMCBrand}.AMCBrand,
    };
  }

  render(){
    let icons = this.state.icons.iconSet
    let logos = this.state.brand.logos
    let colors = this.state.brand.colors
    let fonts = this.state.brand.fonts
    let placeholders = this.state.brand.placeholders
    return(
      <div className='resources m-x'>

        <section className="container-fixed">
          <h4 className="display-primary-4 m-t m-lg">Logos</h4>
          <p className="body-md">A set of logos approved for use in AMC digital experiences.</p>
          <ul className="row five-up logos m-y">
            {logos.map(logo =>
              <li key={logo.src} className={logo.dark ? "dark " + "tile p-y p-md hidden" : "light " + "tile p-y p-md"}>
                <img className="m-y" src={logo.src} alt={logo.alt} />
                <p className="body-xs p-x tc">{logo.alt} - {logo.type}</p>
              </li>
            )}
          </ul>
          <p className="body-md">Download the full complement of logos in SVG format for use in your projects.</p>
          <Link to="/downloads/amc-logos.zip" className="button-md button button-light m-y" target="_blank" rel="noopener noreferrer" download>
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
          <Link to="/downloads/icons.zip" className="button-md button button-light m-y" target="_blank" rel="noopener noreferrer" download>
            <img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all icons"/>
            Download All
          </Link>

          <h4 className="display-primary-4 m-t m-lg">Image Placeholders</h4>
          <p className="body-md">We use a set of images for each network as placeholders while image requests are fulfilled. Please use the set below as the placeholder images.</p>
          <ul className="row five-up">
          {placeholders.map(placeholder =>
            <li key={placeholder.slug} className="card p-y p-md">
              <img className="thumbnail" src={placeholder.src} alt={placeholder.alt} />
              <p className="body-xs">{placeholder.name}</p>
            </li>
          )}
          </ul>

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

        </section>
      </div>
    )

  }
}

export default AmcResources;
