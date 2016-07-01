import React, { Component, PropTypes } from 'react';
import './style.css';

function Message({ messages = [] }) {
    return (
        <div>
            {
                messages.map((message, key) => {
                    let content;
                    let className = 'bubble';
                    if (message.isLoading === 1) {
                        content = "......";
                        className += " loading"
                    } else {
                        content = message.content;
                    }
                    return (
                        <div className={className} key={key}>
                            <div className="message">
                                {content}
                            </div>
                        </div>

                    )
                })
            }
        </div>
    );
}

export default Message
