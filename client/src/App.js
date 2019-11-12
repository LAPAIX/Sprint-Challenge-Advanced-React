import React from "react";
import Player from "./Components/Player";
import CustomForm from "./Components/CustomForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anonymous Survey</h1>
        <h2>Pick your favorite player</h2>
        <CustomForm />
        <Player />
      </header>
    </div>
  );
}

export default App;
