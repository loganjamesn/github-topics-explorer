import React from "react";
import { TopicsContainer } from "./containers/TopicsContainer/TopicsContainer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1>GitHub Topics Explorer</h1>
        <p>Search below or click on any topic to find related GitHub topics and their number of stargazers.</p>        
      </div>
      <TopicsContainer />
    </div>
  );
}

export default App;
