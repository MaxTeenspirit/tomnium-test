import React, { Component } from 'react';
import Table from './Table';
import './App.css';
import * as data from '../data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(data)
      }, 1000)
    })
  }

  componentDidMount() {
    this.getData()
    .then(data => {
      this.setState(data.default)
    })
  }

  render() {
    const { valid, timestamp, base, rates} = this.state;

    return (
      <div className="App">
        {this.state.valid &&
          <Table 
            valid={valid}
            timestamp={timestamp}
            base={base}
            rates={rates} 
          />
        }
      </div>
    )
  }
}

export default App;