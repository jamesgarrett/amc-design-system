  import React from 'react';
  import About from './components/about';
  import Home from './components/home';
  import Logo from './img/logo512-dark.png';
  import Typography from './components/typography';
  import Navigation from './components/navigation';
  import Contact from './components/contact';
  import Footer from './components/footer';
  import { NavLink, Switch, Route } from 'react-router-dom';

  const Main = () => (
    <Switch>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/typography' component={Typography}></Route>
    </Switch>
  );

  const App = () => (
    <div id='app-wrap' className='app'>
      <div className='header'>
        <div className='lockup'>
          <img src={Logo} className='logo' alt='website logo' />
          <h5 className='headline-5--strong'>Gold Standard</h5>
        </div>
        <Navigation />
      </div>
      <div className='body'>
        <Main />
      </div>
      <Footer />
    </div>
  );

  export default App;