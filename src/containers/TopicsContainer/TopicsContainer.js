import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOPICS } from "../../graphql/GET_TOPICS";
import { Search } from "../../components/Search/Search";
import { Topic } from "../../components/Topic/Topic";

export const TopicsContainer = () => {

    const [topic, setTopic] = useState("react");

    const { data, loading, error } = useQuery(GET_TOPICS(topic));

    if (loading) return <div>Loading</div>;
    if (error) return <div>error</div>;

    return (

      <div className="topics-container">
      
        <Search
            // Searchbar with preset topic placeholder
            topic={topic} 
            setTopic={setTopic} 
        />

        <div className="topics">
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
        </div>

      </div>

    )
}
