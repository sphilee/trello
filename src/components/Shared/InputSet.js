import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input `
    width: 100%;
    box-shadow: inset 0 1px 8px rgba(0,0,0,.15);
    border: 1px solid #aaa;
    border-radius: 3px;
`;

const AddInput = Input.extend `
    padding: 7px;
    background: rgba(0,0,0,.05);
    margin-bottom : 6px;
`;

const ModifyInput = Input.extend `
    height: 24.8px;
    line-height: 1.2em;
    font-weight: 700;
    margin: -3px -5px;
    padding: 3px 5px;
    background: hsla(0,0%,100%,.85);
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
        const {modify, onChange, title} = this.props;

        return (modify
            ? <ModifyInput
                    name="title"
                    onChange={onChange}
                    innerRef={ref => this.title = ref}
                    value={title}/>
            : <AddInput
                name="title"
                onChange={onChange}
                placeholder="Add a list..."
                innerRef={ref => this.title = ref}
                value={title}/>);
    }
}

export default InputSet;