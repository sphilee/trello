import styled from 'styled-components';

const WhiteBox = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    padding : ${props => props.onClick ? "" : "0 8px 8px 8px"}
    flex-direction: column;
`;

export default WhiteBox;