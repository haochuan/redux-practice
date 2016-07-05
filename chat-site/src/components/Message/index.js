import React, { Component, PropTypes } from 'react';
import anime from 'animejs';
import './style.css';

export class Message extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(anime.easings);
    }

    componentDidUpdate() {
        const { messages } = this.props;
        const index = messages.length - 1;
        let messageWidth = 5;
        const selectorLoading = '.loading-' + index;
        const selectorMessage = '.message-' + index;
        if (messages[index].content) {
            messageWidth += messages[index].content.length / 10 + 0.7;
        }
        anime({
            targets: [selectorLoading],
            width: ['5rem', '0rem'],
            elasticity: 300,
            direction: 'reverse',
            duration: 600
        });

        anime({
            targets: [selectorMessage],
            width: [messageWidth + 'rem', '5rem'],
            elasticity: 0,
            delay: -100,
            direction: 'reverse',
            duration: 1000
        });
    }

    render() {
        const { messages } = this.props
        return (
            <div>
                {
                    messages.map((message, key) => {
                        let classNameLoading = "loading loading-" + key;
                        let classNameMessage = "message message-" + key;
                        if (message.isLoading === 0) {
                            classNameMessage += ' show';
                        } else {
                            classNameLoading += ' show';
                        }
                        return (
                            <div className="message-wrapper" key={key}>
                                <div className={classNameMessage}>
                                    {message.content}
                                </div>
                                <div className={classNameLoading}>
                                    <div className="dotWrapper">
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        );
    }
}


export default Message
