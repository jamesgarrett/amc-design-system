import React from 'react'
import { Link } from 'react-router-dom';
import iconSet from '../data/icons.js';

class Resources extends React.Component{
  constructor(){
    super();
    this.state = {iconSet};
  }

  render(){
    let icons = this.state.iconSet
    return(
      <div className='resources m-x'>
        <header className="header-text">
          <h1 className='headline-1 m-y'>Resources</h1>
          <p className='body-lg m-y'>A collection of assets and resources to get you up and running building digital experiences.</p>
        </header>
        <h4 className="headline-3 m-t m-lg">Icons</h4>
        <p className="body-md">We use icons in our experience as recognizable ways to quickly communicate familiar concepts and expected behaviors to our users.</p>
        <ul className="icon-set m-y">
        {icons.map(icon =>
          <li key={icon.slug} className="tile p-y p-md">
            <img className="icon m-y i-xl" src={icon.src} alt={icon.alt} />
            <p className="body-xs">{icon.alt}</p>
          </li>)}
        </ul>
        <p className="body-md">Download the full complement of icons in SVG format for use in your projects.</p>
        <Link to="/downloads/icons.zip" className="button-md button button-light m-t" target="_blank" download><img className="m-r i-md" src={require('../img/icons/download.svg')} /> Download All</Link>
      </div>
    )

  }
}

export default Resources;
