import React from "react";

//Styles
import { TopicElement } from "./styles";

export function Topic({ name, stargazerCount, setTopic }) {
    return (
        <TopicElement 
            onClick={() => {
                // Replace currently queried topic with this one
                setTopic(name);
            }}
            onKeyPress={(ev) => {
                // Replace currently queried topic with this one
                if (ev.key === "Enter" || ev.key === " ") {
                    ev.preventDefault();
                    setTopic(name);
                }
            }}
            tabIndex="0"
            role="button"
            aria-pressed="false"
        >
            <div className="topic-name">
                <h2>{name}</h2>
            </div>
            <h5>&#128301; {stargazerCount}</h5>            
        </TopicElement>
    )
}