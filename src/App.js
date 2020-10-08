import React, { Component } from 'react';
import './App.scss';
import Phones from './components/Phones';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Phones />
      </main>
    );
  }
}

export default App;
