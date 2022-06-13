import { gql } from "@apollo/client";

export const GET_TOPICS = gql`
    query {
        topic(name: "react") {
            name
            stargazerCount
            relatedTopics(first: 10) {
                name
                stargazerCount
            }
        }
    }
`;