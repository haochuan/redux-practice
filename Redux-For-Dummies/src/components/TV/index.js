import './style.css';
import React, { Component, PropTypes } from 'react';

// TV is the dump component that does not know anything about the global state
// The glabal state will be passed to here by it's parent

class TV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { tvPosition } = this.props;

        return (
            <div className='home-tv' style={tvPosition}>
                <p>TV</p>
            </div>
        );
    }
}

// type checking
TV.propTypes = {
    tvPosition: PropTypes.object.isRequired,
};

export default TV;
