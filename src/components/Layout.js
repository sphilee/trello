import React from 'react';
import styled from 'styled-components';
import background from 'imgs/background.jpg';

const Wrapper = styled.div`
    background-image: url(${background});
    background-size: cover;
    padding-top: 60px; /* 헤더 높이 */
`;

const Layout = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

Layout.Main = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 2rem;
    width: 1200px;
    transition: all .3s;
    position: relative;

`

export default Layout;