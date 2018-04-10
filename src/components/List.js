import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const Wrapper = styled.div`
    width: 270px;
    margin: 0 5px;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    cursor : pointer;
`;

const Content = styled.div`
    background: #e2e4e6;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
`;

const Header = styled.div`
    display: flex;
    padding-right: 34px;
    padding: 8px 10px;
    position: relative;
    min-height: 18px;
`;

const Title = styled.div`
    height: 24.8px;
    line-height: 1.2em;
    border: 1px solid transparent;
    font-weight: 700;
    margin: -3px -5px;
    padding: 3px 5px;
`;

const Option = styled.div`
    position: absolute;
    right: 4px;
    top: 4px;
    color: #999;
    font-size: 12px;
    font-family: trellicons;
    width: 27px;
    height: 26px;

    &:before {
        position: absolute;
        top: 5px;
        left: 50%;
        margin-left: -5px;
        content: "\\E944";
    }

    &:hover {
        border-radius: 3px;
        background: #cdd2d4;
    }

`;

const Card = styled.a`
    border-radius: 0 0 3px 3px;
    color: #838c91;
    padding: 8px 10px;
    position: relative;
    text-decoration: none;

     &:hover {
        background-color: #cdd2d4;
        color: #4d4d4d;
        text-decoration: underline;
     }
`;

class List extends Component {
    static propTypes = {
        list: ImmutablePropTypes.mapContains({
            id: PropTypes.number,
            title: PropTypes.string
        }),
        onDelete: PropTypes.func 
    }

    handleClick = () => {
        const { id } = this.props.list.toJS();
        const { onDelete } = this.props;
        onDelete(id);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.list !== this.props.list;
    }
    
    render() {
        const { title } = this.props.list.toJS();
        const { handleClick } = this;

        return (
            <Wrapper>
                <Content>
                    <Header>
                        <Title>
                            {title}
                        </Title>
                        <Option onClick={handleClick}/>
                    </Header>
                    <Card>
                        Add a card...
                    </Card>
                </Content>
            </Wrapper>

        )
    }
}

export default List;