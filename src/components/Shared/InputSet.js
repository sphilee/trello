import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

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
    font-weight: ${props => props.subType === 'card' ? 0 : 700};
    margin: -3px -5px;
    padding: 3px 5px;
    background: hsla(0,0%,100%,.85);
`;

const CardInput = styled.textarea `
    overflow: hidden;
    font: 14px Helvetica Neue,Arial,Helvetica,sans-serif;
    word-wrap: break-word;
    resize: none;
    border: none;
    border-radius: 3px;
    margin-bottom: 6px;
    height: 54px;
`;

class InputSet extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        title: PropTypes.string,
        type: PropTypes.oneOf(['card', 'modify', 'add'])
    }
    
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
    }

    componentDidMount() {
        this.titleRef.current.focus();
        this.titleRef.current.select();
    }

    handleKeyPress = (e) => {
        const {setTitle} = this.props;
        e.key === 'Enter' && setTitle();
    }

    handleClickOutside() {
        const {setTitle} = this.props;
        setTitle && setTitle();
    }

    getBlockComponent() {
        const {type, subType, onChange, title} = this.props;
        const {handleKeyPress} = this;
        switch (type) {
            case 'card':
                return <CardInput
                    name="title"
                    onChange={onChange}
                    onKeyPress={handleKeyPress}
                    innerRef={this.titleRef}
                    value={title}/>

            case 'modify':
                return <ModifyInput
                    name="title"
                    subType={subType}
                    onChange={onChange}
                    onKeyPress={handleKeyPress}
                    innerRef={this.titleRef}
                    value={title}/>

            case 'add':
                return <AddInput
                    name="title"
                    onChange={onChange}
                    onKeyPress={handleKeyPress}
                    innerRef={this.titleRef}
                    placeholder="Add a list..."
                    value={title}/>
            default:
                return <div className='no_type'/>
        }
    }

    render() {
        return this.getBlockComponent();
    }
}

export default enhanceWithClickOutside(InputSet);