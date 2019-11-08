import React from "react";
import "./App.css";
import RenderSmurfs from "../components/smurfs/RenderSmurfs";
import AddSmurf from "../components/smurfs/AddSmurf"

const App = props => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <AddSmurf />
      <RenderSmurfs />
    </div>
  );
};

export default App;
