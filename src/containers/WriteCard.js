import React, {Component} from 'react';
import enhanceWithClickOutside from 'react-click-outside';

import {InputPlaceholder, WhiteBox, ControlSet} from 'components/WriteCard';
import {InputSet} from 'components/Shared';

class WriteCard extends Component {
    state = {
        card: '',
        focused : false
    };

    handleFocus = () => {
        this.setState({focused : true});
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({card : value});
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
        const { onUpdate, id } = this.props;
        const { card } = this.state;
        onUpdate({id, list: { card }});
        this.setState({card: '', focused : false});
    }
    
    render() {
        const {focused, card} = this.state;
        const {handleChange, handleFocus, handleCancel, handleCreate} = this;
        return (focused
            ? (
                <WhiteBox>
                    <InputSet type='card' onChange={handleChange} title={card}/>
                    <ControlSet onCreate={handleCreate} onCancel={handleCancel}/>
                </WhiteBox>
            )
            : (
                <WhiteBox onClick={handleFocus}>
                    <InputPlaceholder/>
                </WhiteBox>
            ))
    }
}


export default enhanceWithClickOutside(WriteCard);