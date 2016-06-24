import style from './style.css';
import React, { Component, PropTypes } from 'react'
import Stream from '../../components/Stream'

const tracks = [
    {
        title: 'track 1'
    },
    {
        title: 'track 2'
    }
];

export class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stream tracks={tracks}/>
        )       
    }
}

Main.propTypes = {
    tracks: PropTypes.any
};

export default Main;
