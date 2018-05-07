import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from './Card';

const Wrapper = styled.div `
    flex : 1 1 auto;
    overflow-y:auto;
    overflow-x: hidden;
    margin: 0 4px;
    padding: 0 4px;
    z-index: 1;
`;

const Cards = ({cards, onUpdate, onDelete}) => {
    const Cards = cards.map(card => (<Card key={card.get('id')} card={card} onUpdate={onUpdate} onDelete={onDelete}/>));
    return (
        <Wrapper>
            {Cards}
        </Wrapper>
    );
};

Cards.propTypes = {
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func
}

export default Cards;