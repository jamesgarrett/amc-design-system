  import React, {Component} from 'react';
  import About from './pages/about';
  import Home from './pages/home';
  import NetworksPage from './pages/networksPage';
  import NetworkPage from './pages/networkPage';
  import Resources from './pages/resources';
  import Templates from './pages/templates';
  import Navigation from './components/navigation';
  import Footer from './components/footer';
  import HomePage from './templates/homePage';
  import FourOhFour from './templates/404';
  import { createBrowserHistory } from 'history';
  import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

  const hist = createBrowserHistory();

  const Main = () => (
    <BrowserRouter basename="/" history>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/resources' component={Resources}></Route>
        <Route exact path='/typography/' component={NetworksPage}></Route>
        <Route exact path='/typography/:network' component={NetworkPage}></Route>
        <Route exact path='/templates/' component={Templates}></Route>
        <Route exact path='/templates/home/:network' component={HomePage}></Route>
        <Route exact path='/templates/404/:network' component={FourOhFour}></Route>
      </Switch>
    </BrowserRouter>
  );

  class App extends Component {
    render(){
      return(
        <div id='app-wrap' className='app light-text'>
          <div className='body container-fluid'>
            <Main />
          </div>
          <Footer className='container-fixed gutter'/>
        </div>
      )
    }
  }

  export default App;
