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
    constructor(props) {
        super(props);
        this._scrollBarRef = React.createRef();
        this.listWidth = 270;
    }

    async componentDidMount() {
        const {ListActions} = this.props;

        await ListActions.getInitialList();
    }

    updateScroll() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        const {listSize} = this.props;
        const scrollbar = this._scrollBarRef.current;
        scrollbar.updateScroll();
        scrollbar._container.scrollLeft = this.listWidth * listSize;
      }

    render() {
        return (
            <Layout>
                <Header/>
                <PerfectScrollbar ref={this._scrollBarRef}>
                    <Layout.Main>
                        <ListContainer/>
                        <WriteList updateScroll= {this.updateScroll.bind(this)}/>
                    </Layout.Main>
                </PerfectScrollbar>
            </Layout>
        );
    }
}

export default connect((state) => ({
    listSize: state.list.get('data').size - 1
}),(dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
}))(App);