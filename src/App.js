import React, { Component } from 'react';
import './App.css'
import NavBar from  './components/navbar';
import Footer from  './components/footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        < NavBar />
        <div className="container">
          <h1>Cart Items</h1>
        </div>
        < Footer />
      </React.Fragment>
    );
  }
}

export default App;
