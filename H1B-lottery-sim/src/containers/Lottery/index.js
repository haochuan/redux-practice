import './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Lottery extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        $('.type-selection').material_select();
        $('.pp-selection').material_select();
    }

    componentDidUpdate() {
        $('.type-selection').material_select();
        $('.pp-selection').material_select();
    }


    render() {
        const { time, status, application } = this.props
        return (
            <div className="container">
                <div className="card-panel c-card-panel">
                    <div>
                        <h5 className="center-align">{time.format("YYYY")} H1B Application Simulator</h5>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="input-field col s12">
                            <select className='type-selection' defaultValue="">
                                <option value="" disabled>Choose Your Degree</option>
                                <option value="adv">Advanced</option>
                                <option value="reg">Regular</option>
                            </select>
                            <label>Choose Your Degree</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="input-field col s12">
                            <select className='pp-selection' defaultValue="">
                                <option value="" disabled>Choose The Type of Application</option>
                                <option value="pp">Premium Process</option>
                                <option value="nonpp">Regular Process</option>
                            </select>
                            <label>Choose The Type of Application</label>
                        </div>
                    </div>
                    <div className="row center">
                        <div className="col s12">
                            <a className="waves-effect waves-light btn">Start Simulation</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Lottery.propTypes = {
//     value: PropTypes.number.isRequired
// }

const mapStateToProps = (state) => ({
    status: state.status,
    application: state.application,
    time: state.time
});

export default connect(mapStateToProps)(Lottery);
