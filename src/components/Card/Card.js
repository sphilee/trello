import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {DeleteButton, InputSet} from 'components/Shared';
import {Title, Edit} from 'components/Card';

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
        focused: false
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

    handleFocus = () => {
        this.setState({
            focused: !this.state.focused
        });
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({title : value});
    }

    setTitle = () => {
        const { title, id } = this.state;
        const { onUpdate } = this.props;
        const { handleHover, handleFocus } = this;
        onUpdate({id, list: { title }});
        handleHover();
        handleFocus();
    }

    render() {
        const {title, hovered, focused} = this.state;
        const {handleHover, handleFocus, handleDelete, handleChange, setTitle} = this;
        return (focused
            ? <Wrapper>
                    <InputSet type='modify' setTitle={setTitle} onChange={handleChange} title={title}/>
                </Wrapper>
            : <Wrapper onMouseOver={handleHover} onMouseOut={handleHover}>
                <Title title={title}/>
                <Edit hovered={hovered} onClick={handleFocus}/>
                <DeleteButton hovered={hovered} handleDelete={handleDelete}/>
            </Wrapper>)
    }
}

export default Card;