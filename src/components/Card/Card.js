import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {DeleteButton, InputSet} from 'components/Shared';
import {Title, EditButton} from 'components/Card';

const Wrapper = styled.a `
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

class Card extends Component {
    static propTypes = {
        onDelete: PropTypes.func,
        onUpdate: PropTypes.func
    }

    componentDidMount() {
        const { title, id } = this.props.card.toJS();
        this.setState({title, id});
    }

    state = {
        title: '',
        id: null,
        hovered: false,
        edited: false
    }

    handleDelete = () => {
        const {id} = this.state;
        const {onDelete} = this.props;
        onDelete(id);
    }

    handleHover = () => {
        this.setState({
            hovered: !this.state.hovered
        });
    }

    handleEdit = () => {
        this.setState({
            edited: !this.state.edited
        });
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({title : value});
    }

    setTitle = () => {
        const { title, id } = this.state;
        const { onUpdate } = this.props;
        const { handleHover, handleEdit } = this;
        onUpdate({id, list: { title }});
        handleHover();
        handleEdit();
    }

    render() {
        const {title, hovered, edited} = this.state;
        const {handleHover, handleEdit, handleDelete, handleChange, setTitle} = this;
        return (edited
            ? <Wrapper>
                    <InputSet type='modify' setTitle={setTitle} onChange={handleChange} title={title}/>
                </Wrapper>
            : <Wrapper onMouseOver={handleHover} onMouseOut={handleHover}>
                <Title title={title}/>
                <EditButton hovered={hovered} onClick={handleEdit}/>
                <DeleteButton hovered={hovered} handleDelete={handleDelete}/>
            </Wrapper>)
    }
}

export default Card;