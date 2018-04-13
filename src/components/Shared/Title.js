import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

import {InputSet} from 'components/Shared';

const Wrapper = styled.div `
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
`;

const Name = styled.div `
    height: 24.8px;
    line-height: 1.2em;
    border: 1px solid transparent;
    font-weight: 700;
    margin: -3px -5px;
    padding: 3px 5px;
`;

class Title extends Component {
    static propTypes = {
        onUpdate: PropTypes.func
    }

    componentDidMount() {
        const { title } = this.props.list.toJS();
        this.setState({title});
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

    handleClickOutside() {
        const { id } = this.props.list.toJS();
        const { onUpdate } = this.props;
        const { title } = this.state;
        onUpdate({id, list: { title }});
        this.setState({focused : false});
    }
    
    render() {
        const {focused, title} = this.state;
        const {handleChange, handleFocus} = this;
        return (focused
            ? (
                <Wrapper>
                    <InputSet modify onChange={handleChange} title={title}/>
                </Wrapper>
            )
            : (
                <Wrapper onClick={handleFocus}>
                    <Name>
                        {title}
                    </Name>
                </Wrapper>
            ))
    }
}


export default enhanceWithClickOutside(Title);