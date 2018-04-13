import React, { Component } from 'react';
import './App.css';
import Graph from './Graph/Graph.js';
import General from './General/General.js';
//import Box from './Box/Box.js';
import Container from './Box/Container.js';
//import axios from 'axios';

class App extends Component {

  state = {
    data: null
  }

  handleCallback = (data, errors) => {
    console.log(errors);
    console.log(data);
  }

  render() {
    return (
      <div className="background">
        <General />
        <div>
          <Graph />
          <Container />
        </div>
      </div>
    );
  }
}

export default App;
