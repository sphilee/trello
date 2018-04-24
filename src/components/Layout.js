import React from 'react';
import styled from 'styled-components';
import background from 'imgs/background.jpg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${background});
    background-size: cover;
`;

const Layout = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

Layout.Main = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 2rem;
    width: 1200px;
`

export default Layout;