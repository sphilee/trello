import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import {SaveButton, CancelButton} from './';

const Wrapper = styled.div `
    height : 32px;
    display: flex;
`;

const ControlSet = ({onCreate, onCancel}) => (
    <Wrapper>
        <SaveButton onCreate={onCreate}/>
        <CancelButton onCancel={onCancel}/>
    </Wrapper>
);

ControlSet.propTypes = {
    onCreate: PropTypes.func,
    onCancel: PropTypes.func
}

export default ControlSet;