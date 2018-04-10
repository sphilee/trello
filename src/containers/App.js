import React, {Component} from 'react';
import Header from 'components/Header';
import Layout from 'components/Layout';
import WriteList from './WriteList';
import ListContainer from './ListContainer';

import * as listActions from 'modules/list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
    async componentDidMount() {
        const { ListActions } = this.props;
        
        await ListActions.getInitialList();
    }


    render() {
        return (
            <Layout>
                <Header/>
                <Layout.Main>
                    <ListContainer/>
                    <WriteList/>
                </Layout.Main>
            </Layout>
        );
    }
}

export default connect((state) => ({}), (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
}))(App);