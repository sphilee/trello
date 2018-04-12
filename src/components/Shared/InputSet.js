import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleInput = styled.input`
    background: rgba(0,0,0,.05);
    width: 100%;
    box-shadow: inset 0 1px 8px rgba(0,0,0,.15);
    margin-bottom : 6px;
    border: 1px solid #cdd2d4;
    border-color: #aaa;
    border-radius: 3px;
    padding: 7px;
`;

class InputSet extends Component {

    static propTypes = {
        onChange: PropTypes.func,
        title: PropTypes.string
    }

    componentDidMount() {
        this.title.focus();
    }

    render() {
        const { onChange, title } = this.props;

        return (
            <div>
                <TitleInput 
                    name="title" 
                    onChange={onChange} 
                    placeholder="Add a list..."
                    innerRef={ref=>this.title = ref}
                    value={title}
                />
            </div>
        );
    }
}

export default InputSet;