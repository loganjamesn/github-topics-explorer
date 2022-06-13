import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import './App.scss';

import { GET_TOPICS } from "./graphql/queries";



function App() {

  const { data, loading, error, refetch } = useQuery( GET_TOPICS );

  return (
    <div className="App">
      <h1>GitHub Topic Explorer</h1>

      {data?.topic?.relatedTopics?.map((name) => (
        <div>
          {JSON.stringify(name)}
        </div>
      ))}
    </div>
  );
}

export default App;
