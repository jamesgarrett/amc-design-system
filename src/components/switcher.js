import React, {Component} from 'react'

class Switcher extends Component{
  toggleMode = () => {
    this.setState(state => ({ isDark: !state.isDark }));
  };
  render(){
    return <>
    <button onClick={this.toggleMode} type="button">Toggle Mode</button>
    </>
  }
}



export default Switcher
