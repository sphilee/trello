import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import List from './List';

const Wrapper = styled.div `
    display: flex;
`;

const Lists = ({lists, onDelete}) => {
    const Lists = lists.map(list => (<List key={list.get('id')} list={list} onDelete={onDelete}/>));
    return (
        <Wrapper>
            {Lists}
        </Wrapper>
    );
};

Lists.propTypes = {
    lists: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({id: PropTypes.number, title: PropTypes.string})),
    onDelete: PropTypes.func 
}

export default Lists;