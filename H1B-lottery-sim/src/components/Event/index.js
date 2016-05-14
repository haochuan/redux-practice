import './style.css';
import '../../dependencies/animate.css';
import React, { Component, PropTypes } from 'react'


class Event extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('.event-item').each(function(index) {
            var that = this;
           setTimeout(function() {
               $(that).addClass("animated fadeInLeft");
           }, index * 3000); 
        });
    }

    componentDidUpdate() {
    }


    render() {
        const { events, application, startover } = this.props
        console.log(startover);
        let result;
        let resultNode;

        let pp_text = application.pp ? "" : "Non";
        let type_text = application.type==="adv" ? "Advanced" : "Regular";
        if (application.pass) {
            result = "Congratulations! Your " + pp_text + " Premium Process for " + type_text + " Degree was selected on " + application.passDate;
            resultNode = (
                <li className="collection-item  green accent-2 event-item">{result}</li>
            );
        } else {
            result = "Unfortunatelly, you did not received any new about your " + pp_text + " Premium Process for " + type_text + " Degree";
            resultNode = (
                <li className="collection-item grey lighten-1 event-item">
                    {result}
                    <hr />
                    <a className="center-align waves-effect waves-light btn" onClick={startover}>Try next year</a>
                </li>
            );

        }
        return (
            <div>
                <ul className="collection">
                    {
                        events.map(function(event) {
                            return (
                                <li className="collection-item event-item">{event.description}</li>
                            );
                        })
                    }
                    {resultNode}
                </ul>
            </div>
        );
    }
}

// Lottery.propTypes = {
//     value: PropTypes.number.isRequired
// }

export default Event;
