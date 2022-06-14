import React, { useState } from "react";

//Styles
import { ActiveTopic } from "./styles";

export const CurrentTopic = ({ topic }) => {

    return (
        <ActiveTopic>
            <h1>{topic}</h1>
        </ActiveTopic>
    )
}