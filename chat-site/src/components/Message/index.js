import React, { Component, PropTypes } from 'react';

export default function Message(isLoading, text) {
    // const { text, isLoading } = this.props;
    // console.log(isLoading);
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
