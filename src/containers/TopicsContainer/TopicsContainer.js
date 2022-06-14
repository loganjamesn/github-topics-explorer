import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOPICS } from "../../graphql/GET_TOPICS";
import { Search } from "../../components/Search/Search";
import { CurrentTopic } from "../../components/CurrentTopic/CurrentTopic";
import { Topic } from "../../components/Topic/Topic";

//Styles
import { TopicElementsContainer } from "./styles";

export const TopicsContainer = () => {

    const [topic, setTopic] = useState("react");

    const { data, loading, error } = useQuery(GET_TOPICS(topic));

    if (loading) return (
        <div className="topics-container">

            <CurrentTopic 
                // Displays current topic as a heading
                topic="Loading..." 
            />
        
            <Search
                // Searchbar with preset topic placeholder
                topic={topic} 
                setTopic
            />

            <label><h5>Related Topics</h5></label>
        </div>
    );

    if (error) return <div>error</div>;

    return (

      <div className="topics-container">

        <CurrentTopic 
            // Displays current topic as a heading
            topic={topic} 
        />
      
        <Search
            // Searchbar with preset topic placeholder
            topic={topic} 
            setTopic={setTopic} 
        />

        <label><h5>Related Topics</h5></label>

        <TopicElementsContainer className="topicsContainer">
            {   // Fallback for no results
                data.topic.relatedTopics.length === 0 ? (
                    <div className="no-results">
                        <p>Sorry, no results found for "{topic}".</p>
                    </div>
                )
                
                // Otherwise show results
                : data.topic.relatedTopics.map((topic) => (
                    <Topic 
                        key={topic.name} 
                        name={topic.name} 
                        stargazerCount={topic.stargazerCount}
                        setTopic={setTopic} 
                    />
                ))
            }
        </TopicElementsContainer>

      </div>

    )
}
