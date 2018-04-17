import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

import {CardPlaceholder, ControlSet} from 'components/Card';
import {InputSet} from 'components/Shared';

const Wrapper = styled.div `
    display: flex;
    height: 100%;
    width: 100%;
    padding : ${props => props.onClick ? "" : "8px"}
    flex-direction: column;
`;

class WriteCard extends Component {
    static propTypes = {
        id : PropTypes.number,
        onUpdate: PropTypes.func
    }

    state = {
        title: '',
        focused : false
    };

    handleFocus = () => {
        this.setState({focused : true});
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({title : value});
    }

    handleCancel = () => {
        this.setState({focused : false});
    }

    handleClickOutside() {
        const { focused } = this.state;
        if(!focused) return;
        this.setState({focused : false});
    }

    handleCreate = () => {
        const { id } = this.props.list.toJS();
        const { onUpdate } = this.props;
        const { title } = this.state;
        onUpdate({id, list: { title }});
        this.setState({focused : false});
    }
    
    render() {
        const {focused, title} = this.state;
        const {handleChange, handleFocus, handleCancel, handleCreate} = this;
        return (focused
            ? (
                <Wrapper>
                    <InputSet type='card' onChange={handleChange} title={title}/>
                    <ControlSet onCreate={handleCreate} onCancel={handleCancel}/>
                </Wrapper>
            )
            : (
                <Wrapper onClick={handleFocus}>
                    <CardPlaceholder/>
                </Wrapper>
            ))
    }
}


export default enhanceWithClickOutside(WriteCard);