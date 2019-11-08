import React, {Component} from 'react';
import {connect} from 'react-redux';
import './CurrentPrice.css';

import {simpleAction} from './actions/simpleAction'

class CurrentPriceContainer extends Component {

    simpleAction = () => {
        this.props.simpleAction();
    };

    render() {
        return (
            <div className="CurrentPriceContainer">
                <pre>{JSON.stringify(this.props)}</pre>
                <button onClick={this.simpleAction}>Test redux action</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPriceContainer);
