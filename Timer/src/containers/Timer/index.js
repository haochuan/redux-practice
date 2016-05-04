import './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Timer extends Component {
    constructor(props) {
        super(props);
        this._toggle = this._toggle.bind(this);
        this._reset = this._reset.bind(this);
    }

    _toggle() {
        const status = this.props.status;
        if (status === 'running') {
            this.props.dispatch(actions.stop());
        } else {
            this.props.dispatch(actions.start());
        }
    }

    _reset() {
        this.props.dispatch(actions.reset());
    }

    render() {
        const { number } = this.props;
        const toggleString = this.props.status === 'running' ? 'Stop' : 'Start';
        return (
            <div className="timer-container">          
                <div className="valign-wrapper timer-number-valign-wrapper">
                    <div className="valign timer-number-valign">
                        <p className="blue-text text-darken-2 center-align timer-number">{number}</p>
                    </div>
                </div>

                <div className="row timer-control">
                    <div className="timer-control-left">
                        <a className="waves-effect waves-light btn blue darken-2 timer-control-btn" onClick={this._toggle}>{toggleString}</a>
                    </div>
                    <div className="timer-control-right">
                        <a className="waves-effect waves-light btn blue darken-2 timer-control-btn" onClick={this._reset}>Reset</a>
                    </div>
                </div>
            </div>
        );
    }
}

Timer.propTypes = {
    number: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    number: state.number,
    status: state.status
});

export default connect(mapStateToProps)(Timer);
