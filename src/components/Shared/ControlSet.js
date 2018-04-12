import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import Save from './SaveButton';
import Cancel from './CancelButton';

const Wrapper = styled.div `
    height : 32px;
    display: flex;
`;

const ControlSet = ({onCreate, onCancel}) => (
    <Wrapper>
        <Save onCreate={onCreate}/>
        <Cancel onCancel={onCancel}/>
    </Wrapper>
);

ControlSet.propTypes = {
    onCreate: PropTypes.func,
    onCancel: PropTypes.func
}

export default ControlSet;