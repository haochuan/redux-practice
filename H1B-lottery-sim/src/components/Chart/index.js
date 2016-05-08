import './style.css';
import ChartJS from 'chart.js';
import React, { Component, PropTypes } from 'react'


class Chart extends Component {
    constructor(props) {
        super(props);
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
        const { events } = this.props
        return (
            <div>
                <div className="row">
                    <canvas width="400" height="400"></canvas>
                </div>

                <div className="row">
                    <canvas width="400" height="400"></canvas>
                </div>

                <div className="row">
                    <canvas width="400" height="400"></canvas>
                </div>
            </div>
        );
    }
}

// Lottery.propTypes = {
//     value: PropTypes.number.isRequired
// }

export default Chart;
