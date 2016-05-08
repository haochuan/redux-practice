import './style.css';
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
            <ul className="collection">
                {
                    events.map(function(event) {
                        return (
                            <li className="collection-item">{event.description}</li>
                        );
                    })
                }
            </ul>
        );
    }
}

// Lottery.propTypes = {
//     value: PropTypes.number.isRequired
// }

export default Chart;
