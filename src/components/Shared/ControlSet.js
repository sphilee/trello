import styled from 'styled-components';
import oc from 'open-color';
import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    height : 32px;
    display: flex;
`;

const Save = styled.div`
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

const Cancel = styled.a`
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

const ControlSet = ({onCreate, onCancel}) => (
    <Wrapper>   
        <Save onClick={onCreate}>
            Save
        </Save>
        <Cancel onClick={onCancel} />
    </Wrapper>
);

ControlSet.propTypes = {
    onCreate: PropTypes.func,
    onCancel: PropTypes.func
}

export default ControlSet;