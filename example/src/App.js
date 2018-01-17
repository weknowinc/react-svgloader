import React, { Component } from 'react';
import SvgLoader from 'react-svgloader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SvgLoader src='/svg/logo.svg' className="App-logo svg-logo"/>
          <h1 className="App-title">Welcome to React SvgLoader Component</h1>
        </header>
        <p className="App-intro">
          The animated logo was loaded using SvgLoader!!!
        </p>
        <p>Go ahead and try it by your self ;)</p>
      </div>
    );
  }
}

export default App;
