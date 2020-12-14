import React from 'react';
import styled from "styled-components";

const Error = styled.div`
    color: white;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
    background-color: #CA0B00;
    opacity: 70%;
    padding: 10px;
    border-radius: 5px;

`;

const ErrorMessage = ({error, visible})  =>{
    if(!visible || !error) return null
    return (
        <Error>
            {error}
        </Error>
    );
}
export default ErrorMessage;