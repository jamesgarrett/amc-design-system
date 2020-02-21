  import React, {Component} from 'react';
  import About from './pages/about';
  import Home from './pages/home';
  import NetworksPage from './pages/networksPage';
  import NetworkPage from './pages/networkPage';
  import Resources from './pages/resources';
  import Logo from './img/logo512-light.png';
  import Navigation from './components/navigation';
  import Footer from './components/footer';
  import { Switch, Route} from 'react-router-dom';

  const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/resources' component={Resources}></Route>
      <Route exact path='/typography/' component={NetworksPage}></Route>
      <Route exact path='/typography/:network' component={NetworkPage}></Route>
    </Switch>
  );

  class App extends Component {
    render(){
      return(
        <div id='app-wrap' className='app dark'>
          <div className='header container-fixed'>
            <div className='lockup'>
              <img src={Logo} className='logo' alt='website logo' />
              <h5 className='headline-5--strong hidden-sm'>Design System</h5>
            </div>
            <Navigation />
          </div>
          <div className='body container-fixed'>
            <Main />
          </div>
          <Footer className='container-fixed'/>
        </div>
      )
    }
  }

  export default App;