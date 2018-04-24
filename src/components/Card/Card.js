import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Title, Edit} from 'components/Card';

const Wrapper = styled.a`
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    border-radius: 3px;
    padding: 6px 6px 2px 8px;
    cursor: pointer;
    display: flex;
    margin-bottom: 6px;
    text-decoration: none;
    
    &:hover {
        background: #edeff0;
        border-bottom-color: #d6dadc;
    }
`;

class List extends Component {
    static propTypes = {
        onDelete: PropTypes.func,
        onUpdate: PropTypes.func
    }

    state = {
        isHovered : false
    }

    handleDelete = () => {
        const { id } = this.props.card.toJS();
        const { onDelete } = this.props;
        onDelete(id);
    }

    handleHover =() => {
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    render() {
        const { card, onUpdate } = this.props;
        const { isHovered } = this.state;
        const { handleHover, handleDelete } = this;
        return (
            <Wrapper onMouseOver={handleHover} onMouseOut={handleHover}>
                <Title card={card} onUpdate={onUpdate}/>
                <Edit isHovered={isHovered} handleDelete={handleDelete}/>
            </Wrapper> 
        )
    }
}


export default List;