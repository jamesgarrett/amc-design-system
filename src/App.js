  import React from 'react';
  import About from './pages/about';
  import Home from './pages/home';
  import Typography from './pages/typography';
  import Contact from './pages/contact';
  import Logo from './img/logo512-dark.png';
  import Navigation from './components/navigation';
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
          <h5 className='headline-5--strong'>Design System</h5>
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