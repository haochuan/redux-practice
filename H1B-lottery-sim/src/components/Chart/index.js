import './style.css';
import ChartJS from 'chart.js';
import React, { Component, PropTypes } from 'react'


class Chart extends Component {
    constructor(props) {
        super(props);
    }

    _generateChartsData(data, chartData) {
        let result = chartData;
        data.forEach(function(item) {
            result.labels.unshift(item.date.substring(5));
            result.datasets[0].data.unshift(item.count);
        });
        return result;
    }

    componentDidMount() {
        const { adv_pp_data, reg_pp_data, adv_nonpp_data, reg_nonpp_data } = this.props;
        let adv_pp_template = {
            labels: [],
            datasets: [
                {
                    label: "Advanced Premium Process Received Count Per Day",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [],
                }
            ]
        };

        let reg_pp_template = {
            labels: [],
            datasets: [
                {
                    label: "Reguar Premium Process Received Count Per Day",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [],
                }
            ]
        };

        let adv_nonpp_template = {
            labels: [],
            datasets: [
                {
                    label: "Advanced Non Premium Process Received Count Per Day",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [],
                }
            ]
        };

        let reg_nonpp_template = {
            labels: [],
            datasets: [
                {
                    label: "Regular Non Premium Process Received Count Per Day",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [],
                }
            ]
        };
        let adv_pp_chart = this._generateChartsData(adv_pp_data, adv_pp_template);
        let reg_pp_chart = this._generateChartsData(reg_pp_data, reg_pp_template);
        let adv_nonpp_chart = this._generateChartsData(adv_nonpp_data, adv_nonpp_template);
        let reg_nonpp_chart = this._generateChartsData(reg_nonpp_data, reg_nonpp_template);

        let adv_pp_ctx = this.refs.adv_pp_canvas.getContext("2d");
        let reg_pp_ctx = this.refs.reg_pp_canvas.getContext("2d");
        let adv_nonpp_ctx = this.refs.adv_nonpp_canvas.getContext("2d");
        let reg_nonpp_ctx = this.refs.reg_nonpp_canvas.getContext("2d");
        // 
        let adv_pp_LineChart = new ChartJS(adv_pp_ctx, {
            type: 'line',
            data: adv_pp_chart
        });
        let reg_pp_LineChart = new ChartJS(reg_pp_ctx, {
            type: 'line',
            data: reg_pp_chart
        });
        let adv_nonpp_LineChart = new ChartJS(adv_nonpp_ctx, {
            type: 'line',
            data: adv_nonpp_chart
        });
        let reg_nonpp_LineChart = new ChartJS(reg_nonpp_ctx, {
            type: 'line',
            data: reg_nonpp_chart
        });
    }

    componentDidUpdate() {
    }


    render() {
        return (
            <div>
                <div className="row canvas-container">
                    <canvas ref="adv_pp_canvas"></canvas>
                </div>
                <div className="row canvas-container">
                    <canvas ref="reg_pp_canvas"></canvas>
                </div>
                <div className="row canvas-container">
                    <canvas ref="adv_nonpp_canvas"></canvas>
                </div>
                <div className="row canvas-container">
                    <canvas ref="reg_nonpp_canvas"></canvas>
                </div>
            </div>
        );
    }
}

// Lottery.propTypes = {
//     value: PropTypes.number.isRequired
// }

export default Chart;
