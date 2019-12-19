import React from 'react'
import styled from "styled-components";

export const Card = ({member: {name, email}}) => {
    return (
        <CardContainer>
            <h2>{name}</h2>
            <h3>{email}</h3>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    background-color: black;
    padding: 2rem;

    width: calc(50% - 2rem);
    margin: 1rem;

    h2, h3 {
        color: white;
        margin: 1rem;
    }

    h2 {
        font-size: 48px;
    }

    h3 {
        font-size: 32px;
    }
`