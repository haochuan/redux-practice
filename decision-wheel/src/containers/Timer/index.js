// import style from './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class Timer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        This is a Timer
      </div>
    )
  }
}

// Timer.propTypes = {
//   value: PropTypes.number.isRequired
// }

const mapStateToProps = (state) => ({
    // value: state.Timer
});

export default connect(mapStateToProps)(Timer);
