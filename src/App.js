import React from "react";
import { TopicsContainer } from "./containers/TopicsContainer/TopicsContainer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>GitHub Topics Explorer</h1>
      <TopicsContainer />
    </div>
  );
}

export default App;
