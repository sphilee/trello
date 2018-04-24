import styled from 'styled-components';
import oc from 'open-color';
import React from 'react';
import PropTypes from 'prop-types';

const Button = styled.a `
    color: ${oc.gray[6]};
    height: 32px;
    font-family: trellicons;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    line-height: 30px;
    width: 30px;
    cursor: pointer;

    &:hover {
        color: ${oc.gray[8]};
    }
    &:active {
        color: ${oc.gray[8]};
    }
    &:before {
        content: "\\E916";
    }
`;

const Cancelbutton = ({onCancel}) => (<Button onClick={onCancel}/>);

Cancelbutton.propTypes = {
    onCancel: PropTypes.func
}

export default Cancelbutton;