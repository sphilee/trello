import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 12px;
    font-family: trellicons;
    width: 27px;
    height: 26px;
    margin-right: 3px;

    &:before {
        content: "\\E944";
    }

    &:hover {
        border-radius: 3px;
        background: #cdd2d4;
    }

`;
const Option = ({handleDelete}) => (
    <DeleteButton onClick={handleDelete}/>
);

Option.propTypes = {
    handleDelete: PropTypes.func
}

export default Option;