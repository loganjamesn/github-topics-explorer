import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import './App.scss';

import { GET_TOPICS } from "./graphql/queries";

function useTopicFilter() {
  const [filters, _updateFilter] = useState({ 
    name: undefined 
  });

  const updateFilter = (name, value) => {
    _updateFilter({
      [name]: value,
    });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
}

function App() {
  const { operations, models } = useTopicFilter();

  const [topic, setTopic] = useState("react");

  const { data, loading, error } = useQuery(GET_TOPICS(topic));

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <div className="App">
      <h1>GitHub Topics Explorer</h1>
      <div>
        <label>Search</label>
        <input
          onChange={(e) => operations.updateFilter("name", e.target.value)}
          type="string"
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
              setTopic(models.filters.name);
            }
          }}
          placeholder={topic}
        />
        <button
          onClick={() => {
            setTopic(models.filters.name);
          }}
        >
          Submit
        </button>
      </div>

      <br/>

      {data?.topic?.relatedTopics?.map((name) => (
        <div>
          {JSON.stringify(name)}
        </div>
      ))}

    </div>
  );
}

export default App;
