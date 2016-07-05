import React, { Component, PropTypes } from 'react';
import './style.css';

export class Message extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        const { messages } = this.props
        return (
            <div>
                {
                    messages.map((message, key) => {
                        let content;
                        if (message.isLoading === 1) {
                            content = (
                                <div className="loading">
                                    <div className="dotWrapper">
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                </div>
                            );
                        } else {
                            content = (
                                <div className="message">
                                    {message.content}
                                </div>
                            );
                        }
                        return (
                            <div className="message-wrapper" key={key}>
                                {content}
                            </div>

                        )
                    })
                }
            </div>
        );
    }
}


export default Message
