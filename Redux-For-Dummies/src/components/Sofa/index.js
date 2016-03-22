import './style.css';
import React, { Component, PropTypes } from 'react';

// Sofa is the dump component that does not know anything about the global state
// The glabal state will be passed to here by it's parent

class Sofa extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { sofaPosition } = this.props;
        return (
            <div className='home-sofa' style={sofaPosition}>
                <p className=''>Sofa</p>
            </div>
        );
    }
}

// type checking
Sofa.propTypes = {
    sofaPosition: PropTypes.object.isRequired,
};

export default Sofa;
