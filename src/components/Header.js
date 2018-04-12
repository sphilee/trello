import React from 'react';
import styled from 'styled-components';
import logo from 'imgs/logo.png';

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
`;

const Logo = styled.a `
    display: flex;
    height: 30px;
    opacity: .5;
    width: 80px;
    transition: .1s ease;
    z-index: 2;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

Logo.Img = styled.span `
    background-image: url(${logo});
    width: 100%;
`;

const Header = () => (
    <Wrapper>
        <Logo>
            <Logo.Img/>
        </Logo>
    </Wrapper>
);

export default Header;