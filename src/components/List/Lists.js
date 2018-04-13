import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import List from './List';

const Wrapper = styled.div `
    display: flex;
    align-items: flex-start;
`;

const Lists = ({lists, onDelete, onUpdate}) => {
    const Lists = lists.map(list => (<List key={list.get('id')} list={list} onUpdate={onUpdate} onDelete={onDelete}/>));
    return (
        <Wrapper>
            {Lists}
        </Wrapper>
    );
};

Lists.propTypes = {
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func
}

export default Lists;