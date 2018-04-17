import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Delete = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-family: trellicons;
    margin-left : auto;

    &:before {
        content: "\\E944";
    }

    &:hover {
        border-radius: 3px;
        background: #cdd2d4;
    }

`;

const SmallDelete = Delete.extend `
    width: 27px;
    height: 26px;
    font-size: 12px;
`;

const BigDelete = Delete.extend `
    width: 30px;
    height: 32px;
    font-size: 20px;
`;

const Option = ({handleDelete, size}) => (size
    ? <BigDelete/>
    : <SmallDelete onClick={handleDelete}/>);

Option.propTypes = {
    handleDelete: PropTypes.func
}

export default Option;