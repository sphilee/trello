import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    width: 100%;
    margin-bottom: 4px;
    word-wrap: break-word;
`;

class Title extends Component {

    render() {
        const {title} = this.props;
        return (
            <Wrapper>
                {title}
            </Wrapper>
        )
    }
}

export default Title;