import React, { Component, PropTypes } from 'react';

function Message({ messages = [] }) {
    return (
        <div>
            {
                messages.map((message, key) => {
                    let content;
                    if (message.isLoading === 1) {
                        content = "......";
                    } else {
                        content = message.content;
                    }
                    return (
                        <div key={key}>{content}</div>
                    )
                })
            }
        </div>
    );
}

export default Message
