  import React, {Component} from 'react';
  import About from './pages/about';
  import Home from './pages/home';
  import Typography from './pages/typography';
  import Sundance from './pages/sundance';
  import Conversions from './pages/conversions';
  import Resources from './pages/resources';
  import Logo from './img/logo512-light.png';
  import Navigation from './components/navigation';
  import Footer from './components/footer';
  import { Switch, Route } from 'react-router-dom';

  const Main = () => (
    <Switch>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/resources' component={Resources}></Route>
      <Route exact path='/typography' component={Typography}></Route>
      <Route exact path='/conversions' component={Conversions}></Route>
      <Route exact path='/sundance' component={Sundance}></Route>
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