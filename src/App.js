import React, { Component } from 'react';
import './App.scss';
import Phones from './components/Phones';
import Store from './components/Store';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Store />
        <Phones />
      </main>
    );
  }
}

export default App;
