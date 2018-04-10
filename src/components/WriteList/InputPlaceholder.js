import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 7px;
    cursor: pointer;

    &:hover {
        background: rgba(0,0,0,.3);
    }
`;

const InputPlaceholder = () => (
    <Wrapper>
        Add a list...
    </Wrapper>
);

export default InputPlaceholder;