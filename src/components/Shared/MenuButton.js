import styled from 'styled-components';
import React from 'react';

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-family: trellicons;
    margin-left : auto;
    width: 30px;
    height: 32px;
    font-size: 20px;

    &:before {
        content: "\\E944";
    }

    &:hover {
        border-radius: 3px;
        background: #cdd2d4;
    }

`;

const MenuButton = () => (<Menu/>);

export default MenuButton;