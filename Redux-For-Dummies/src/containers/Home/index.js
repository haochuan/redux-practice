import './style.css';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TV from '../../components/TV';
import Sofa from '../../components/Sofa';
import Table from '../../components/Table';
import Button from '../../components/Button';

// Home is the smart component that pass global state to it's child as props

class Home extends Component {
    constructor(props) {
        super(props);
        // remember to bind the functions 
        this.moveTV = this.moveTV.bind(this);
        this.movebackTV = this.movebackTV.bind(this);
        this.moveTable = this.moveTable.bind(this);
        this.movebackTable = this.movebackTable.bind(this);
    }

    // we use connect(mapStateToProps)(Home) at the end
    // we can use this.props.dispatch to dispatch an action

    moveTV() {
        this.props.dispatch(actions.moveTV());
    }

    movebackTV() {
        this.props.dispatch(actions.movebackTV());
    }

    moveTable() {
        this.props.dispatch(actions.moveTable());
    }

    movebackTable() {
        this.props.dispatch(actions.movebackTable());
    }

    render() {
        const { tv, table, sofa } = this.props;
        return (
            <div>
                <Button moveTV={this.moveTV}
                        movebackTV={this.movebackTV}
                        moveTable={this.moveTable}
                        movebackTable={this.movebackTable}
                ></Button>
                <div className='livingRoom'>
                    <TV tvPosition={tv}/>
                    <Sofa sofaPosition={sofa}/>
                    <Table tablePosition={table}/>
                </div>
            </div>
        );
    }
}

// type checking
Home.propTypes = {
    tv: PropTypes.object.isRequired,
    table: PropTypes.object.isRequired,
    sofa: PropTypes.object.isRequired
};

// the globle state can be accessed by props.tv, props.table and props.sofa
// the dispatch function is also available in props
const mapStateToProps = (state) => ({
    tv: state.tv,
    table: state.table,
    sofa: state.sofa
});

export default connect(mapStateToProps)(Home);

