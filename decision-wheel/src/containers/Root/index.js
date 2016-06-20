// import style from './style.css';
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class Root extends Component {
    constructor(props) {
      super(props)

    }

    render() {
        return (
            <div className="ui grid container">
                <div className="row">
                <div className="four wide column">
                    {this.props.children}
                </div>
                <div className="twelve wide column">
                    eee
                </div>
                </div>
            </div>
        );
    }

}

// Counter.propTypes = {
//   value: PropTypes.number.isRequired
// }

const mapStateToProps = (state) => ({
    // value: state.counter
});

export default connect(mapStateToProps)(Root);
