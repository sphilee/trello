import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const EditIcon = styled.div `
    visibility : ${props => props.hovered ? 'visible' : 'hidden'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-family: trellicons;
    margin-left : auto;
    width: 27px;
    height: 26px;
    font-size: 12px;

    &:before {
        content: "\\E920";
    }

    &:hover {
        border-radius: 3px;
        background: #cdd2d4;
    }

`;

const Edit = ({hovered, onClick}) => (<EditIcon hovered={hovered} onClick={onClick}/>);

Edit.propTypes = {
    onClick: PropTypes.func
}

export default Edit;