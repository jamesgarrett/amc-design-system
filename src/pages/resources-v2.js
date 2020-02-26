import React from 'react'
import { Link } from 'react-router-dom';

class Resources extends React.Component{
    render(){
      return(
      <div className='resources container-fixed'>
        <header className="header-text">
          <h1 className='headline-1 m-v'>Resources</h1>
          <p className='body-lg m-v'>A collection of assets and resources to get you up and running building digital experiences.</p>
          <h4 className="headline-3 m-b m-lg">Icons</h4>
          <div className="row">
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/10-second-rewind.svg')} />
                <p className="body-xs">10 Second Rewind</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/arrow-down.svg')} />
                <p className="body-xs">Arrow Down</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/arrow-left.svg')} />
                <p className="body-xs">Arrow Left</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/arrow-right.svg')} />
                <p className="body-xs">Arrow Right</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/arrow-up.svg')} />
                <p className="body-xs">Arrow Up</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/close-x.svg')} />
                <p className="body-xs">Close X</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/closed-captions--default.svg')} />
                <p className="body-xs">Closed Captions</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/menu.svg')} />
                <p className="body-xs">Menu</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/play-icon-primary.svg')} />
                <p className="body-xs">Play Icon Primary</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/play-icon-secondary.svg')} />
                <p className="body-xs">Play Icon Secondary</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/screen--maximize.svg')} />
                <p className="body-xs">Screen Maximize</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/search.svg')} />
                <p className="body-xs">Search</p>
              </div>
              <div className="tile t-c m-r">
                <img alt="" className="icon" src={require('../img/icons/volume.svg')} />
                <p className="body-xs">Volume</p>
              </div>
          </div>
          <div className="row">
            <button className="button-md">
              <Link to="/downloads/icons.zip" target="_blank" download>Download</Link>
            </button>
          </div>
        </header>
      </div>
      )
    }
  }


export default Resources;
