import styled from 'styled-components';

const WhiteBox = styled.div`
    min-width: 270px;
    color: hsla(0,0%,100%,.7);
    padding: 4px;
    border-radius: 3px;
    background-color: ${props => props.onClick ? '' : '#e2e4e6'};
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`;

export default WhiteBox;