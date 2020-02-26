import React from 'react'
import { Link } from 'react-router-dom';



class Resources extends React.Component{
  constructor(){
    super();
    this.state = {items: [
      { src: require('../img/icons/10-second-forward.svg'), alt: '10 Second Forward' },
      { src: require('../img/icons/10-second-rewind.svg'), alt: '10 Second Rewind' },
      { src: require('../img/icons/15-second-forward.svg'), alt: '15 Second Forward' },
      { src: require('../img/icons/15-second-rewind.svg'), alt: '15 Second Rewind' },
      { src: require('../img/icons/arrow-down.svg'), alt: 'Arrow Down' },
      { src: require('../img/icons/arrow-left.svg'), alt: 'Arrow Left' },
      { src: require('../img/icons/arrow-right.svg'), alt: 'Arrow Right' },
      { src: require('../img/icons/arrow-up.svg'), alt: 'Arrow Up' },
      { src: require('../img/icons/cast.svg'), alt: 'Cast' },
      { src: require('../img/icons/close-x.svg'), alt: 'Close X' },
      { src: require('../img/icons/closed-captions--active.svg'), alt: 'Closed Captions Active' },
      { src: require('../img/icons/closed-captions--default.svg'), alt: 'Closed Captions Default' },
      { src: require('../img/icons/download.svg'), alt: 'Download' },
      { src: require('../img/icons/download--complete.svg'), alt: 'Download Complete' },
      { src: require('../img/icons/facebook.svg'), alt: 'Facebook' },
      { src: require('../img/icons/instagram.svg'), alt: 'Instagram' },
      { src: require('../img/icons/menu.svg'), alt: 'Menu' },
      { src: require('../img/icons/more-info.svg'), alt: 'More Info' },
      { src: require('../img/icons/pause--outline.svg'), alt: 'Pause Icon Primary' },
      { src: require('../img/icons/play-icon-primary.svg'), alt: 'Play Icon Primary' },
      { src: require('../img/icons/play-icon-secondary.svg'), alt: 'Play Icon Secondary' },
      { src: require('../img/icons/screen--maximize.svg'), alt: 'Screen Maximize' },
      { src: require('../img/icons/screen--minimize.svg'), alt: 'Screen Minimize' },
      { src: require('../img/icons/search.svg'), alt: 'Search' },
      { src: require('../img/icons/tumblr.svg'), alt: 'Tumblr' },
      { src: require('../img/icons/volume.svg'), alt: 'Volume' },
      { src: require('../img/icons/youtube.svg'), alt: 'Youtube' }
    ]}
  }

  render(){
    let items = this.state.items
    return(
      <div className='resources container-fixed'>
        <header className="header-text">
          <h1 className='headline-1 m-v'>Resources</h1>
          <p className='body-lg m-v'>A collection of assets and resources to get you up and running building digital experiences.</p>
        </header>
        <h4 className="headline-3 m-t m-lg">Icons</h4>
        <p className="body-md">We use icons in our experience as recognizable ways to quickly communicate familiar concepts and expected behaviors to our users.</p>
        <ul className="row icon-set m-v">
        {items.map(item =>
          <li key={item.src} className="tile t-c m-r">
            <img src={item.src} alt={item.alt} className="icon" />
            <p className="body-xs">{item.alt}</p>
          </li>)}
        </ul>
        <p className="body-md">Download the full complement of icons in SVG format for use in your projects.</p>
        <Link to="/downloads/icons.zip" className="button-md m-t" target="_blank" download>Download All</Link>
      </div>
    )

  }
}

export default Resources;
