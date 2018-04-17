import styled from 'styled-components';
import oc from 'open-color';
import React from 'react';
import PropTypes from 'prop-types';

const Button = styled.div `
    background: ${oc.green[7]};
    color: white;
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 700;

    &:hover {
        background: ${oc.green[8]};
    }
    &:active {
        background: ${oc.green[8]};
    }
`;

const EditButton = ({onCreate,value}) => (
    <Button onClick={onCreate}>
        {value}
    </Button>
);

EditButton.propTypes = {
    onCreate: PropTypes.func
}

export default EditButton;