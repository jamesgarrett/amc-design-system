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
          <ul className="row five-up logos m-y">
            {logos.map(logo =>
              <li key={logo.slug} className={logo.dark ? "dark " + "tile p-y p-md hidden" : "light " + "tile p-y p-x p-md"}>
                <img className="m-y" src={logo.src} alt={logo.alt} />
                <p className="body-xs p-x tc">{logo.alt} - {logo.type}</p>
              </li>
            )}
          </ul>
          <p className="body-md">Download the full complement of logos in SVG format for use in your projects.</p>
          <Link to="/downloads/sundance-logos.zip" className="button-md button button-light m-y" target="_blank" download>
            <img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all logos"/>
            Download All
          </Link>

          <h4 className="display-primary-4 m-t m-lg">Web Fonts</h4>
          <p className="body-md">You can download the fonts we use in our digital experiences here, or email <a href="mailto:garrett.sibinga@amcnetworks.com">garrett.sibinga@amcnetworks.com</a>, to use the webfont packages from our CDN.</p>

          <div className="row three-up m-b m-lg">
            <div className="card m-b m-sm m-r">
              <a href="https://amcnetworks.box.com/shared/static/jtzch5f0c7ytnsxjckcen6n85b6vh4yj.zip" target="_blank" download>
              <img alt="Benton Sans Font Download" className="thumbnail" src={require('../img/tiles/benton-sans.jpg')} />
              </a>
            </div>
            <div className="card m-b m-sm m-r">
              <a href="https://amcnetworks.box.com/shared/static/6w3rzjlofln76e2cxku5bvctd86qq25l.zip" target="_blank" download>
              <img alt="Benton Sans Compressed Font Download" className="thumbnail" src={require('../img/tiles/benton-sans-condensed.jpg')} />
              </a>
            </div>
          </div>

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

          <h4 className="display-primary-4 m-t m-lg">Image Placeholders</h4>
          <p className="body-md">We use a set of images for each network as placeholders while image requests are fulfilled. Please use the set below as the placeholder images.</p>

          <div className="row four-up m-b m-lg">
            <div className="card m-b m-sm m-r">
              <img alt="Placeholder Poster" className="thumbnail" src={require('../img/tiles/sdtv-placeholder-poster.jpg')} />
            </div>
            <div className="card m-b m-sm m-r">
              <img alt="Placeholder Square" className="thumbnail" src={require('../img/tiles/sdtv-placeholder-square.jpg')} />
            </div>
            <div className="card m-b m-sm m-r">
              <img alt="Placeholder Wide" className="thumbnail" src={require('../img/tiles/sdtv-placeholder-wide.jpg')} />
            </div>
            <div className="card m-b m-sm m-r">
              <img alt="Placeholder Ultra Wide" className="thumbnail" src={require('../img/tiles/sdtv-placeholder-ultrawide.jpg')} />
            </div>
          </div>

          <p className="body-md">Download the full complement of images in jpg format for use in your projects.</p>
          <Link to="https://amcnetworks.box.com/shared/static/ii7h7kd5acsko6jqezynpma0u9mg5m9p.zips" className="button-md button button-light m-y" target="_blank" download>
            <img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all icons"/>
            Download All
          </Link>

        </body>
      </div>
    )

  }
}

export default SundanceResources;
