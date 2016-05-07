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


    render() {
        const { value } = this.props
        return (
            <div className="container">
                <div className="card-panel">
                    <div className="row">
                        <div className="input-field col s12">
                            <select className='type-selection'>
                                <option value="" disabled>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <label>Materialize Select</label>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="input-field col s12">
                            <select className='pp-selection'>
                                <option value="" disabled>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <label>Materialize Select</label>
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
