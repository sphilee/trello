import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lists from 'components/Lists';
import { bindActionCreators } from 'redux';
import * as listActions from 'modules/list';

class ListContainer extends Component {
    render() {
        const { lists, ListActions } = this.props;
        return (
            <Lists
                lists={lists}
                onDelete={ListActions.deleteList}
            />
        );
    }
}

export default connect(
    (state) => ({
        lists: state.list.get('data')
    }),
    (dispatch) => ({
        ListActions: bindActionCreators(listActions, dispatch)
    })
)(ListContainer);