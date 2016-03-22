import './style.css';
import React, { Component, PropTypes } from 'react';

// Table is the dump component that does not know anything about the global state
// The glabal state will be passed to here by it's parent

class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { tablePosition } = this.props;
        return (
            <div className='home-table' style={tablePosition}>
                <p className=''>Table</p>
            </div>
        );
    }
}

// type checking
Table.propTypes = {
    tablePosition: PropTypes.object.isRequired,
};

export default Table;
