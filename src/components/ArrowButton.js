import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
    border: solid 2px;
    border-radius: 100%;
    padding: 20px;
    margin-top: 30px;
    transition: background-color 0.15s, color 0.15s;

    &:hover {
        background-color: #970256;
        cursor: pointer;

        .arrow {
            color: white;
        }
    }
    
    .arrow {
        height: 10px;
        width: 10px;
        border-bottom: solid 2px;
        border-right: solid 2px;
        transform: rotate(45deg);
    }
`

class ArrowButton extends React.PureComponent {
    render() {
        return (
            <StyleWrapper onClick={this.props.handleClick}>
                <div className="arrow"></div>
            </StyleWrapper>
        );
    }
}

ArrowButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default ArrowButton;