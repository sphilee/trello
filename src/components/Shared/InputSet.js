import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input `
    width: 100%;
    font-size : 14px;
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
    
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
    }

    componentDidMount() {
        this.titleRef.current.focus();
        this.titleRef.current.select();
    }

    render() {
        const {modify, onChange, title} = this.props;

        return (modify
            ? <ModifyInput
                    name="title"
                    onChange={onChange}
                    innerRef={this.titleRef}
                    value={title}/>
            : <AddInput
                name="title"
                onChange={onChange}
                placeholder="Add a list..."
                innerRef={this.titleRef}
                value={title}/>);
    }
}

export default InputSet;