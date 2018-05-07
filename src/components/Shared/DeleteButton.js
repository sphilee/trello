import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = styled.div `
    visibility : ${props => props.isHovered
    ? 'visible'
    : 'hidden'};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27px;
    height: 26px;
    
    &:hover {
        border-radius: 3px;
        background: #cdd2d4;
    }
`;

const Trash = styled.div `
    width: 14px;
    height: 17px;
    position: relative;
    overflow: hidden;
`;

const Lid = styled.div `
    width: 62%;
    height: 10%;
    position: absolute;
    left: 50%;
    margin-left: -31%;
    top: 10.5%;
    background-color: #999;
    border-top-left-radius: 80%;
    border-top-right-radius: 80%;
    transform: rotate(-5deg); 
    
    &:after {
        content: "";
        width: 26%;
        height: 100%;
        position: absolute;
        left: 50%;
        margin-left: -13%;
        margin-top: -10%;
        background-color: inherit;
        border-top-left-radius: 30%;
        border-top-right-radius: 30%;
        transform: rotate(-1deg); 
    }
`;

const Container = styled.div `
    width: 56%;
    height: 65%;
    position: absolute;
    left: 50%;
    margin-left: -28%;
    bottom: 10%;
    background-color: #999;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;

    &:after {
        content: "";
        width: 110%;
        height: 12%;
        position: absolute;
        left: 50%;
        margin-left: -55%;
        top: 0;
        background-color: inherit;
        border-bottom-left-radius: 45%;
        border-bottom-right-radius: 45%;
    }
`;


const DeleteButton = ({isHovered, handleDelete}) => (
    <Wrapper isHovered={isHovered} onClick={handleDelete}>
        <Trash >
            <Lid/>
            <Container/>
        </Trash>
    </Wrapper>
);

DeleteButton.propTypes = {
    handleDelete: PropTypes.func
}

export default DeleteButton;