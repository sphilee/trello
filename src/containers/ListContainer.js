import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listActions from 'modules/list';
import Lists from 'components/List';

class ListContainer extends Component {
    render() {
        const {lists, ListActions} = this.props;
        return (<Lists lists={lists} onUpdate={ListActions.updateList} onDelete={ListActions.deleteList}/>);
    }
}

export default connect((state) => ({
    lists: state.list.get('data')
}), (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
}))(ListContainer);