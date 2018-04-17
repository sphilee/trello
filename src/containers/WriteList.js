import React, {Component} from 'react';
import {InputPlaceholder, WhiteBox} from 'components/WriteList';
import {InputSet, ControlSet} from 'components/Shared';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import enhanceWithClickOutside from 'react-click-outside';
import * as uiActions from 'modules/ui';
import * as listActions from 'modules/list';

class WriteList extends Component {
    componentDidUpdate() {
        const {updateScroll} = this.props;
        updateScroll();
    }

    handleFocus = () => {
        const {focused, UIActions} = this.props;

        focused || UIActions.focusInput();
    }

    handleClickOutside() {
        const {UIActions, focused} = this.props;

        focused && UIActions.blurInput();
    }

    handleCancel = () => {
        const {UIActions, focused} = this.props;

        focused && UIActions.blurInput();
    }

    handleChange = (e) => {
        const {UIActions} = this.props;
        const {name, value} = e.target;

        UIActions.changeInput({name, value});
    }

    handleCreate = async() => {
        const {title, cursor, ListActions, UIActions} = this.props;
        
        await ListActions.createList({title});
        await ListActions.getRecentList(cursor ? cursor : 0);
        UIActions.resetInput();
    }

    render() {
        const {handleFocus, handleChange, handleCreate, handleCancel} = this;
        const {focused, title} = this.props;

        return (focused
            ? (
                <WhiteBox>
                    <InputSet type='add' onChange={handleChange} title={title}/>
                    <ControlSet onCreate={handleCreate} onCancel={handleCancel}/>
                </WhiteBox>
            )
            : (
                <WhiteBox onClick={handleFocus}>
                    <InputPlaceholder/>
                </WhiteBox>
            ));
    }
}

export default connect((state) => ({
    focused: state.ui.getIn(['write', 'focused']),
    title: state.ui.getIn(['write', 'title']),
    cursor: state.list.getIn(['data', state.list.get('data').size - 1, 'id'])
}), (dispatch) => ({
    UIActions: bindActionCreators(uiActions, dispatch),
    ListActions: bindActionCreators(listActions, dispatch)
}))(enhanceWithClickOutside(WriteList));