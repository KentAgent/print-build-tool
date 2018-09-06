import React, { Component } from 'react';
import './App.css';
import ShapeTool from './components/ShapeTool/ShapeTool'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-logo">SkyltMaximum</h1>
        <ShapeTool />
      </div>
    );
  }
}

export default App;
