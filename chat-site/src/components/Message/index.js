import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import anime from 'animejs';
import './style.css';

export class Message extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log(anime.easings);
    }

    componentDidUpdate() {
        // const fontSize = parseInt(getComputedStyle(document.body, null).getPropertyValue('font-size'));
        // const ratio = fontSize / 16;
        const { messages } = this.props;
        const index = messages.length - 1;
        let messageWidth = 0;
        const selectorLoading = '.loading-' + index;
        const selectorMessage = '.message-' + index;
        const selectorContent = '.content-' + index;
        if (messages[index].content.length) {
            // messageWidth = messages[index].content.length > 24 ? 55 :  messages[index].content.length / 2;
            
            messageWidth = messages[index].content.length
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
            width: [messageWidth + 'rem', messageWidth + 'rem'],
            elasticity: 100,
            direction: 'reverse',
            duration: 1200
        });

        // anime({
        //     targets: [selectorContent],
        //     opacity: [0, 1],
        //     // elasticity: 200,
        //     // direction: 'reverse',
        //     easing: 'easeInQuart',
        //     duration: 1500
        // });
    }

    render() {
        const { messages } = this.props
        return (
            <div>
                {
                    messages.map((message, key) => {
                        let classNameLoading = "loading loading-" + key;
                        let classNameMessage = "message message-" + key;
                        let classNameContent = "content content-" + key;
                        if (message.isLoading === 0) {
                            classNameMessage += ' show';
                        } else {
                            classNameLoading += ' show';
                        }
                        return (
                            <div className="message-wrapper" key={key}>
                                <div className={classNameMessage}>
                                    <div className={classNameContent}>
                                        {
                                            message.content.data.map((line, key) => {
                                                return (
                                                    <div key={key}>
                                                        {line.content} 
                                                        <a href={line.link.url}>{line.link.display}</a>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
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
