import React from "react";

export function Topic({ name, stargazerCount, setTopic }) {
    return (
        <div 
            className="topic"
            onClick={() => {
                // Replace currently queried topic with this one
                setTopic(name);
            }}
        >
            <h1>{name}</h1>
            <h5>{stargazerCount}</h5>            
        </div>
    )
}