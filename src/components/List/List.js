import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import enhanceWithClickOutside from 'react-click-outside';

import {InputSet} from 'components/Shared';

const Wrapper = styled.div`
    width: 270px;
    margin: 0 5px;
    cursor : pointer;
    background: #e2e4e6;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
`;

const Header = styled.div`
    display: flex;
    padding-left: 10px;
    align-items: center;
    height: 34px;
`;

const TitleWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 12px;
    font-family: trellicons;
    width: 27px;
    height: 26px;

    &:before {
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
        onDelete: PropTypes.func,
        onUpdate: PropTypes.func
    }

    componentDidMount(){
        const { title } = this.props.list.toJS();
        this.setState({title});
    }

    state = {
        title: '',
        focused : false
    };

    handleDelete = () => {
        const { id } = this.props.list.toJS();
        const { onDelete } = this.props;
        onDelete(id);
    }

    handleFocus = () => {
        this.setState({focused : true});
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({title : value});
    }

    handleClickOutside() {
        const { id } = this.props.list.toJS();
        const { onUpdate } = this.props;
        const { title } = this.state;
        onUpdate({id, list: { title }});
        this.setState({focused : false});
    }
    
    render() {
        const { focused, title } = this.state;
        const { handleDelete, handleChange, handleFocus } = this;
        return (
            <Wrapper>
                <Header>
                    {focused
                        ? <TitleWrapper>
                                <InputSet modify onChange={handleChange} title={title}/>
                            </TitleWrapper>
                        : <TitleWrapper onClick={handleFocus}>
                            <Title>
                                {title}
                            </Title>
                        </TitleWrapper>}
                    <Option onClick={handleDelete}/>
                </Header>
                <Card>
                    Add a card...
                </Card>
            </Wrapper>

        )
    }
}


export default enhanceWithClickOutside(List);