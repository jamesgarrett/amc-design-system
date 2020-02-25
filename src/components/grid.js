import React from 'react';

class Grid extends React.Component{
  render(){
    var alt_text = ''
    return(
      <section className="grid gutter m-v m-lg">
        <h2 className="headline-3 m-v">Featured Shows</h2>
        <div className="row m-l cards-md">
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/closeup.jpg')} />
            <h6 className="label-primary-xs m-t">Returns October 6</h6>
            <h4 className="headline-4 m-t m-sm">Close Up with the Hollywood Reporter</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/back.jpg')} />
            <h6 className="label-primary-xs m-t">Sunday 8/9c</h6>
            <h4 className="headline-4 m-t m-sm">Back</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/groundupthere.jpg')} />
            <h4 className="headline-4 m-t">Ground Up There</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/bobnewhartshow.jpg')} />
            <h4 className="headline-4 m-t">Bob Newhart Show</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/andygriffithshow.jpg')} />
            <h4 className="headline-4 m-t">The Andy Griffith Show</h4>
          </div>
          <div className="card m-b">
            <img alt={alt_text} className="thumbnail" src={require('../img/shows/lawandorder.jpg')} />
            <h4 className="headline-4 m-t">Bob Newhart Show</h4>
          </div>
        </div>
      </section>
    )
  }
}

export default Grid
