import './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Event from '../../components/Event';
import Chart from '../../components/Chart';

class Lottery extends Component {
    constructor(props) {
        super(props);
        this._validation = this._validation.bind(this);
        this._startover = this._startover.bind(this);
    }

    _validation() {
        const { time } = this.props;
        let type = $(this.refs.typeSelect).val();
        let pp = $(this.refs.ppSelect).val();
        if (type && pp) {
            this.props.dispatch(actions.lottery({
                type: type,
                pp: pp === 'pp' ? true : false
            }));
        } else {
            Materialize.toast('Please select both the Degree and the Type to continue.', 4000);
        }
    }

    _startover() {
        this.props.dispatch(actions.repeat()); 
    }

    componentDidMount() {
        $(this.refs.typeSelect).material_select();
        $(this.refs.ppSelect).material_select();
    }

    componentDidUpdate() {
        $(this.refs.typeSelect).material_select();
        $(this.refs.ppSelect).material_select();
    }


    render() {
        const { time, status, application } = this.props
        const startWindow = (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <select className='type-selection' defaultValue="" ref='typeSelect'>
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
                        <select className='pp-selection' defaultValue="" ref='ppSelect'>
                            <option value="" disabled>Choose The Type of Application</option>
                            <option value="pp">Premium Process</option>
                            <option value="nonpp">Regular Process</option>
                        </select>
                        <label>Choose The Type of Application</label>
                    </div>
                </div>
                <div className="row center">
                    <div className="col s12">
                        <a className="waves-effect waves-light btn" onClick={this._validation}>Start Simulation</a>
                    </div>
                </div>
            </div>
        );

        const resultWindow = (
            <div>
                <Event 
                    events={application.eventLine} 
                    application={application.application_result}
                    startover={this._startover}
                />
                <Chart 
                    adv_pp_data={application.adv_pp_data} 
                    reg_pp_data={application.reg_pp_data}
                    adv_nonpp_data={application.adv_nonpp_data} 
                    reg_nonpp_data={application.reg_nonpp_data} 
                />
            </div>
        );

        let mainWindow;

        if (status === 1) {
            mainWindow = resultWindow;
        } else {
            mainWindow = startWindow;
        }


        return (
            <div className="">
                <div className="card-panel c-card-panel">
                    <div>
                        <h5 className="center-align">{time.substring(0, 4)} H1B Application Simulator</h5>
                    </div>
                    <br />
                    <br />
                    {mainWindow}
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
