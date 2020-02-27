  import React, {Component} from 'react';
  import About from './pages/about';
  import Home from './pages/home';
  import NetworksPage from './pages/networksPage';
  import NetworkPage from './pages/networkPage';
  import Resources from './pages/resources';
  import Logo from './img/logo512-light.png';
  import Navigation from './components/navigation';
  import Footer from './components/footer';
  import HomePage from './pages/homePage';
  import { NavLink, Switch, Route} from 'react-router-dom';

  const Main = () => (
    <Switch>
      <Route path='/' exact={true} component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/resources' component={Resources}></Route>
      <Route exact path='/typography/' component={NetworksPage}></Route>
      <Route exact path='/typography/:network' component={NetworkPage}></Route>
      <Route exact path='/templates/home/:network' component={HomePage}></Route>
    </Switch>
  );

  class App extends Component {
    render(){
      return(
        <div id='app-wrap' className='app light-text'>
          <div className='header p-h'>
            <div className='lockup'>
              <NavLink to='/'><img src={Logo} className='logo' alt='website logo' /></NavLink>
              <h5 className='headline-5--strong hidden-sm'>Design System</h5>
            </div>
            <Navigation />
          </div>
          <div className='body container-fluid p-b p-xl'>
            <Main />
          </div>
          <Footer className='container-fixed gutter'/>
        </div>
      )
    }
  }

  export default App;
