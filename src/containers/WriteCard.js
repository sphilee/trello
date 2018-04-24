import React, {Component} from 'react';
import enhanceWithClickOutside from 'react-click-outside';

import {InputPlaceholder, WhiteBox, ControlSet} from 'components/WriteCard';
import {InputSet} from 'components/Shared';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cardActions from 'modules/card';

class WriteCard extends Component {
    state = {
        title: '',
        focused : false
    };

    handleFocus = () => {
        this.setState({focused : true});
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({title : value});
    }

    handleCancel = () => {
        this.setState({focused : false});
    }

    handleClickOutside() {
        const { focused } = this.state;
        if(!focused) return;
        this.setState({focused : false});
    }

    handleCreate = async() => {
        const {listId, cursor, cardActions} = this.props;
        const { title } = this.state;
        await cardActions.createCard({listId, title});
        await cardActions.getRecentCard({listId, cursor : cursor ? cursor.get('id') : 0});
        this.setState({title: '', focused : false});
    }
    
    render() {
        const {focused, title} = this.state;
        const {handleChange, handleFocus, handleCancel, handleCreate} = this;
        return (focused
            ? (
                <WhiteBox>
                    <InputSet type='card' onChange={handleChange} title={title}/>
                    <ControlSet onCreate={handleCreate} onCancel={handleCancel}/>
                </WhiteBox>
            )
            : (
                <WhiteBox onClick={handleFocus}>
                    <InputPlaceholder/>
                </WhiteBox>
            ))
    }
}


export default connect((state, ownProps) => ({
    cursor: state.card.get('data').findLast(card => card.get('listId') === ownProps.listId)
}), (dispatch) => ({
    cardActions: bindActionCreators(cardActions, dispatch)
}))(enhanceWithClickOutside(WriteCard));