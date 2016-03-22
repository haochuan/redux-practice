import './style.css';
import React, { Component, PropTypes } from 'react';

// Button is the dump component that does not know anything about the global state
// The glabal state will be passed to here by it's parent

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { moveTV, movebackTV, moveTable, movebackTable } = this.props;
        return (
            <div className='home-controller'>
                <button className='home-controller-button' onClick={moveTV}>Move TV</button>
                <button className='home-controller-button' onClick={movebackTV}>Move Back TV</button>
                <button className='home-controller-button' onClick={moveTable}>Move Table</button>
                <button className='home-controller-button' onClick={movebackTable}>Move Back Table</button>
            </div>
        );
    }
}

// type checking
Button.propTypes = {
    moveTV: PropTypes.func.isRequired,
    movebackTV: PropTypes.func.isRequired,
    moveTable: PropTypes.func.isRequired,
    movebackTable: PropTypes.func.isRequired,
};

export default Button;
