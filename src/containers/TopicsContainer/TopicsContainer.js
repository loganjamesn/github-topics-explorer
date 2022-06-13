import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOPICS } from "../../graphql/GET_TOPICS";
import { Topic } from "../../components/Topic/Topic";
import { Search } from "../../components/Search/Search";

export const TopicsContainer = () => {

    const [topic, setTopic] = useState("react");

    const { data, loading, error } = useQuery(GET_TOPICS(topic));

    if (loading) return <div>Loading</div>;
    if (error) return <div>error</div>;

    return (

      <div className="topics-container">
        <Search
            topic={topic}
            setTopic={setTopic} 
        />
        <div className="topics">
            {data?.topic?.relatedTopics?.map((topic) => (
                <Topic 
                    key={topic.name} 
                    name={topic.name} 
                    stargazerCount={topic.stargazerCount}
                    setTopic={setTopic} 
                />
            ))}
        </div>
      </div>
    )
}
