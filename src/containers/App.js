import React, {Component} from 'react';
import Header from 'components/Header';
import Layout from 'components/Layout';
import WriteList from './WriteList';
import ListContainer from './ListContainer';

import * as listActions from 'modules/list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

class App extends Component {
    async componentDidMount() {
        const {ListActions} = this.props;

        await ListActions.getInitialList();
    }

    render() {
        return (
            <Layout>
                <Header/>
                <PerfectScrollbar>
                    <Layout.Main>
                        <ListContainer/>
                        <WriteList/>
                    </Layout.Main>
                </PerfectScrollbar>
            </Layout>
        );
    }
}

export default connect((state) => ({}), (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
}))(App);