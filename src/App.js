  import React from 'react';
  import About from './pages/about';
  import Home from './pages/home';
  import Typography from './pages/typography';
  import Conversions from './pages/conversions';
  import Resources from './pages/resources';
  import Logo from './img/logo512-dark.png';
  import Navigation from './components/navigation';
  import Footer from './components/footer';
  import { NavLink, Switch, Route } from 'react-router-dom';

  const Main = () => (
    <Switch>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/resources' component={Resources}></Route>
      <Route exact path='/typography' component={Typography}></Route>
      <Route exact path='/conversions' component={Conversions}></Route>
    </Switch>
  );

  const App = () => (
    <div id='app-wrap' className='app container-fluid'>
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
  );

  export default App;