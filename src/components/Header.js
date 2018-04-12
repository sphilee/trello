import React from 'react';
import styled from 'styled-components';
import logo from 'imgs/logo.png';

const Wrapper = styled.div `
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 100%;
    top: 0px;
    z-index: 5;

`;

const Logo = styled.a `
    bottom: 0;
    display: block;
    height: 30px;
    left: 50%;
    margin-left: -40px;
    opacity: .5;
    position: absolute;
    top: 5px;
    width: 80px;
    text-align: center;
    transition: .1s ease;
    z-index: 2;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

Logo.Img = styled.span `
    background-image: url(${logo});
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 80px 30px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
`;

const Header = () => (
    <Wrapper>
        <Logo>
            <Logo.Img/>
        </Logo>
    </Wrapper>
);

export default Header;