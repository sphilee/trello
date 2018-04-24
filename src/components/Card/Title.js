import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

const Wrapper = styled.div `
    width: 100%;
    margin-bottom: 4px;
    word-wrap: break-word;
`;

class Title extends Component {
    static propTypes = {
        onUpdate: PropTypes.func
    }

    render() {
        const {title} = this.props.card.toJS();
        return (
            <Wrapper>
                {title}
            </Wrapper>
        )
    }
}

export default Title;