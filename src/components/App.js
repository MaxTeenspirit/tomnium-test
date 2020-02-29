import React, { Component } from 'react';
import Table from './Table';
import './App.css';
import * as data from '../data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.getData = this.getData.bind(this);
  }

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(data)
      }, 1000)
    })
  }

  componentDidMount() {
    this.getData()
    .then(() => this.getData())
    .then(data => {
      this.setState(data)
    })
  }

  render() {
    const state = this.state.default;
    return (
      <div className="App">
        {state &&
          <Table state={state}/>
        }
      </div>
    )
  }
}

export default App;