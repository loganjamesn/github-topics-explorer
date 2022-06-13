import React, { useState } from "react";

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
        <div className="search">
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
    )
}