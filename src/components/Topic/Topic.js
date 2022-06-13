import React from "react";

export function Topic({ name, stargazerCount, setTopic }) {
    return (
        <div 
            className="topic"
            onClick={() => {
                setTopic(name);
            }}
        >
            <h1>{name}</h1>
            <h5>{stargazerCount}</h5>            
        </div>
    )
}