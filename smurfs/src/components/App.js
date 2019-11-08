import React, { Component } from "react";
import "./App.css";
import RenderSmurfs from "../components/smurfs/RenderSmurfs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <RenderSmurfs />
      </div>
    );
  }
}

export default App;
