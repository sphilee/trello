import styled from 'styled-components';
import React from 'react';

const Button = styled.a`
    border-radius: 0 0 3px 3px;
    width: 100%;
    color: #838c91;
    padding: 8px 10px;

     &:hover {
        background-color: #cdd2d4;
        color: #4d4d4d;
        text-decoration: underline;
     }
`;

const CardPlaceholder = () => (
    <Button>
        Add a card...
    </Button>
);

export default CardPlaceholder;