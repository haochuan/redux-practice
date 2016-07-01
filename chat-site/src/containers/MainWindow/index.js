import style from './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';


import Message from '../../components/Message';

export class MainWindow extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(actions.loadMessage());
    }

    render() {
        const { messages } = this.props
        return (
            <div className="main">
                <Message messages={messages} />
            </div>
        )
    }
}

MainWindow.propTypes = {
    
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(MainWindow);
