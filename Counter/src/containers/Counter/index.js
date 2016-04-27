import './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Counter extends Component {
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
            <div className="counter-container">          
                <div className="valign-wrapper counter-number-valign-wrapper">
                    <div className="valign counter-number-valign">
                        <p className="blue-text text-darken-2 center-align counter-number">{value}</p>
                    </div>
                </div>

                <div className="row counter-control">
                    <div className="counter-control-left">
                        <a className="waves-effect waves-light btn blue darken-2 counter-control-btn" onClick={this._onIncrement}><i className="fa fa-plus counter-btn-icon" aria-hidden="true"></i></a>
                    </div>
                    <div className="counter-control-right">
                        <a className="waves-effect waves-light btn blue darken-2 counter-control-btn" onClick={this._onDecrement}><i className="fa fa-minus counter-btn-icon" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
    value: state.counter
});

export default connect(mapStateToProps)(Counter);
