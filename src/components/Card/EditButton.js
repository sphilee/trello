import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Edit = styled.div `
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

const EditButton = ({hovered, onClick}) => (<Edit hovered={hovered} onClick={onClick}/>);

EditButton.propTypes = {
    onClick: PropTypes.func
}

export default EditButton;