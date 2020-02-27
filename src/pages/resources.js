import React from 'react'
import { Link } from 'react-router-dom';

class Resources extends React.Component{
  constructor(){
    super();
    this.state = {items: [
      { slug: '10-second-forward', src: require('../img/icons/10-second-forward.svg'), alt: '10 Second Forward' },
      { slug: '10-second-rewind', src: require('../img/icons/10-second-rewind.svg'), alt: '10 Second Rewind' },
      { slug: '15-second-forward', src: require('../img/icons/15-second-forward.svg'), alt: '15 Second Forward' },
      { slug: '15-second-rewind', src: require('../img/icons/15-second-rewind.svg'), alt: '15 Second Rewind' },
      { slug: 'arrow-down', src: require('../img/icons/arrow-down.svg'), alt: 'Arrow Down' },
      { slug: 'arrow-left', src: require('../img/icons/arrow-left.svg'), alt: 'Arrow Left' },
      { slug: 'arrow-right', src: require('../img/icons/arrow-right.svg'), alt: 'Arrow Right' },
      { slug: 'arrow-up', src: require('../img/icons/arrow-up.svg'), alt: 'Arrow Up' },
      { slug: 'cast', src: require('../img/icons/cast.svg'), alt: 'Cast' },
      { slug: 'close-x', src: require('../img/icons/close-x.svg'), alt: 'Close X' },
      { slug: 'closed-captions--active', src: require('../img/icons/closed-captions--active.svg'), alt: 'Closed Captions Active' },
      { slug: 'closed-captions--default', src: require('../img/icons/closed-captions--default.svg'), alt: 'Closed Captions Default' },
      { slug: 'download', src: require('../img/icons/download.svg'), alt: 'Download' },
      { slug: 'download--complete', src: require('../img/icons/download--complete.svg'), alt: 'Download Complete' },
      { slug: 'facebook', src: require('../img/icons/facebook.svg'), alt: 'Facebook' },
      { slug: 'instagram', src: require('../img/icons/instagram.svg'), alt: 'Instagram' },
      { slug: 'menu', src: require('../img/icons/menu.svg'), alt: 'Menu' },
      { slug: 'more-info', src: require('../img/icons/more-info.svg'), alt: 'More Info' },
      { slug: 'pause--outline', src: require('../img/icons/pause--outline.svg'), alt: 'Pause Icon Primary' },
      { slug: 'play-icon-primary', src: require('../img/icons/play-icon-primary.svg'), alt: 'Play Icon Primary' },
      { slug: 'play-icon-secondary', src: require('../img/icons/play-icon-secondary.svg'), alt: 'Play Icon Secondary' },
      { slug: 'screen-maximize', src: require('../img/icons/screen--maximize.svg'), alt: 'Screen Maximize' },
      { slug: 'screen-minimize', src: require('../img/icons/screen--minimize.svg'), alt: 'Screen Minimize' },
      { slug: 'search', src: require('../img/icons/search.svg'), alt: 'Search' },
      { slug: 'tumblr', src: require('../img/icons/tumblr.svg'), alt: 'Tumblr' },
      { slug: 'volume', src: require('../img/icons/volume.svg'), alt: 'Volume' },
      { slug: 'youtube', src: require('../img/icons/youtube.svg'), alt: 'Youtube' }
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
        <ul className="icon-set m-v">
        {items.map(item =>
          <li key={item.src} className="tile t-l p-v">
            <img src={item.src} alt={item.alt} className="icon m-v" />
            <p className="body-xs">{item.alt}</p>
          </li>)}
        </ul>
        <p className="body-md">Download the full complement of icons in SVG format for use in your projects.</p>
        <Link to="/downloads/icons.zip" className="button-md button button-light m-t" target="_blank" download><img className="m-r" src={require('../img/icons/download.svg')} /> Download All</Link>
      </div>
    )

  }
}

export default Resources;
