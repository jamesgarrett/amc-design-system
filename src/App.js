  import React, {Component} from 'react';
  import About from './pages/about';
  import NetworksPage from './pages/networks';
  import NetworkPage from './pages/networkDetail';
  import Resources from './pages/resources';
  import ResourceDetail from './pages/resourceDetail';
  import Templates from './pages/templates';
  import Navigation from './components/navigation';
  import Footer from './components/footer';
  import HomePage from './templates/homePage';
  import FourOhFour from './templates/404';
  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

  const Main = (props) => (
    <Router basename="/">
      <Navigation/>
      <div className='body container-fluid p-b'>
        <Switch className="m-t m-lg">
          <Route exact path='/' component={About}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/resources/' component={Resources}></Route>
          <Route exact path='/resources/:network' component={ResourceDetail}></Route>
          <Route exact path='/typography/' component={NetworksPage}></Route>
          <Route exact path='/typography/:network' component={NetworkPage}></Route>
          <Route exact path='/templates/' component={Templates}></Route>
          <Route exact path='/templates/home/:network' component={HomePage}></Route>
          <Route exact path='/templates/404/:network' component={FourOhFour}></Route>
        </Switch>
      </div>
    </Router>
  );

  const isItDark = () => {
      if (this.state.isDark){
        console.log('its dark')
      }
  }

  class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          isDark: true,
        }
    }
    toggleMode = () => {
      this.setState(state => ({ isDark: !state.isDark }));
    };
    render(){
      return(
        <div id='app-wrap' className={(this.state.isDark ? 'dark' : 'light')+' vanilla'}>
          <Main mode={this.state.isDark}/>
          <button onClick={this.toggleMode} type="button" className="button-dark display-primary-1" style={{position:'fixed', bottom: 0, right: 0, margin: '1rem', cursor: 'pointer', zIndex: "99"}}>Toggle {this.state.isDark ? 'Light' : 'Dark'} Mode</button>
          <Footer/>
        </div>
      )
    }
  }


  export default App;
