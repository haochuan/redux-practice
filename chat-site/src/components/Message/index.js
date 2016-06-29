import React, { Component, PropTypes } from 'react';

export class Message extends Component {
    render() {
        const { text, isLoading } = this.props;
        let message;
        if (isLoading) {
            message = (
                <div>
                    Loading
                </div>
            );
        } else {
            message = (
                <div>
                    {text}
                </div>
            );
        }
        return message;
    }
}

export default Message;
