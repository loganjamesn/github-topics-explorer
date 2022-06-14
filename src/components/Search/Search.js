import React, { useState } from "react";

//Styles
import { SearchElement } from "./styles";

// Update topic query value for "name"
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

export const Search = ({ topic, setTopic }) => {

    const { operations, models } = useTopicFilter();

    return (
        <SearchElement>
            <div className="search-field">
                <input
                    type="string"
                    placeholder={"Search: " + topic}
                    onChange={(e) => {
                        // Readies topic query for new fetch while typing
                        operations.updateFilter("name", e.target.value);
                    }}
                    onKeyPress={(ev) => {
                        // Searches new topic query on enter
                        if (ev.key === "Enter") {
                            ev.preventDefault();
                            setTopic(models.filters.name);
                        }
                    }}
                />
                <button
                    onClick={() => {
                        // Searches new topic query on click
                        setTopic(models.filters.name);
                    }}
                    >
                    Submit
                </button>
            </div>
        </SearchElement>
    )
}