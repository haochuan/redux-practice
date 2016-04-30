import './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Timer extends Component {
    constructor(props) {
        super(props)
        this._onIncrement = this._onIncrement.bind(this)
        this._onDecrement = this._onDecrement.bind(this)
    }

    _onIncrement() {
        this.props.dispatch(actions.increment());
    }

    _onDecrement() {
        this.props.dispatch(actions.decrement());
    }

    render() {
        const { value } = this.props
        return (
            <div className="timer-container">          
                <div className="valign-wrapper timer-number-valign-wrapper">
                    <div className="valign timer-number-valign">
                        <p className="blue-text text-darken-2 center-align timer-number">{value}</p>
                    </div>
                </div>

                <div className="row timer-control">
                    <div className="timer-control-left">
                        <a className="waves-effect waves-light btn blue darken-2 timer-control-btn" onClick={this._onIncrement}><i className="fa fa-plus timer-btn-icon" aria-hidden="true"></i></a>
                    </div>
                    <div className="timer-control-right">
                        <a className="waves-effect waves-light btn blue darken-2 timer-control-btn" onClick={this._onDecrement}><i className="fa fa-minus timer-btn-icon" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

Timer.propTypes = {
    value: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
    value: state.timer
});

export default connect(mapStateToProps)(Timer);
