import './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Terminal extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { value } = this.props
        return (
            <div className='terminal-container'>
                <input className='terminal-line terminal-line-input' type="text" value="this is an input"/>
                <input className='terminal-line terminal-line-output' type="text" value="this is an output"/>
            </div>
        )
    }
}

Terminal.propTypes = {
    value: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
    value: state.counter
});

export default connect(mapStateToProps)(Terminal);
