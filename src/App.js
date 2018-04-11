import React, { Component } from "react";
import Content from "./content";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container content">
        <div class="jumbotron">
          <h1 class="display-4">Get Your Air Condition...</h1>
          <hr class="my-4" />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
