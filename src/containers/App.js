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
        this._scrollRef = React.createRef();
    }

    state = {
        listWidth : 270
    }

    async componentDidMount() {
        const {ListActions} = this.props;

        await ListActions.getInitialList();
    }

    updateScroll = () => {
        const {listSize} = this.props;
        const scrollbar = this._scrollBarRef.current;
        scrollbar.updateScroll();
        this._scrollRef.scrollLeft = this.state.listWidth * listSize;
      }

    render() {
        return (
            <Layout>
                <Header/>
                <PerfectScrollbar
                    containerRef={container => this._scrollRef = container}
                    ref={this._scrollBarRef}>
                    <Layout.Main>
                        <ListContainer/>
                        <WriteList updateScroll={this.updateScroll}/>
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