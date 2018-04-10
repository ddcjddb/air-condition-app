import React, { Component } from "react";
import Content from "./content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Your Weather</h1>
        </header>
        <Content />
      </div>
    );
  }
}

export default App;
