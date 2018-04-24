import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Option, Title} from 'components/Shared';
import WriteCard from 'containers/WriteCard';
const Wrapper = styled.div`
    width: 270px;
    margin: 0 5px;
    cursor : pointer;
    background: #e2e4e6;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    padding-left: 10px;
    padding-right: 3px;
    align-items: center;
    height: 34px;
`;

class List extends Component {
    static propTypes = {
        onDelete: PropTypes.func,
        onUpdate: PropTypes.func
    }

    handleDelete = () => {
        const { id } = this.props.list.toJS();
        const { onDelete } = this.props;
        onDelete(id);
    }

    render() {
        const { list, onUpdate } = this.props;
        const { handleDelete } = this;
        return (
            <Wrapper> 
                <Header>
                    <Title list={list} onUpdate={onUpdate}/>
                    <Option handleDelete={handleDelete}/>
                </Header>
                <WriteCard id={list.toJS().id}/>
            </Wrapper> 
        )
    }
}


export default List;