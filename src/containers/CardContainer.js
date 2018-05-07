import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cardActions from 'modules/card';
import {Cards} from 'components/Card';

class CardContainer extends Component {
    render() {
        const {cards, CardActions} = this.props;
        return (<Cards cards={cards} onUpdate={CardActions.updateCard} onDelete={CardActions.deleteCard}/>);
    }
}

export default connect((state, ownProps) => ({
    cards: state.card.get('data').filter(card => card.get('listId') === ownProps.listId)
}), (dispatch) => ({
    CardActions: bindActionCreators(cardActions, dispatch)
}))(CardContainer);