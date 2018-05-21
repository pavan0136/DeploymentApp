import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
       value: 10 /** Start value **/
    };
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
      Test Application of React Deployment
        </p>
      </div>

    );
  }
}

export default App;
