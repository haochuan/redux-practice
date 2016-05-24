import './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Terminal extends Component {
    constructor(props) {
        super(props);
        this._addCommand = this._addCommand.bind(this);
    }

    _addCommand(e) {
        if (e.keyCode === 13) {
            this.props.dispatch(actions.addCommand(e.target.value));
            e.target.value = "";
        }
    }


    render() {
        const { commands } = this.props
        return (
            <div className='terminal-container'>
            {
                commands.map((command) => {
                    return (
                        <div>
                            <input className='terminal-line terminal-line-input' type="text" value={command.input} readOnly />
                            <input className='terminal-line terminal-line-output' type="text" value={command.output} readOnly />
                        </div>
                    );
                })
            }
                <input className='terminal-line terminal-line-current' type="text" autoFocus onKeyDown={this._addCommand} />
            </div>
        )
    }
}

Terminal.propTypes = {
    commands: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    commands: state.commands
});

export default connect(mapStateToProps)(Terminal);
