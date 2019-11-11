import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './CurrentPrice.css';

import {fetchCurrentPrice} from './actions'
import {compose} from "redux";

class CurrentPriceContainer extends Component {

    componentDidMount() {
        this.props.fetchCurrentPrice();
    }

    fetchCurrentPrice = () => {
        this.props.fetchCurrentPrice();
    };

    render() {
        const { currencyRates } = this.props;
        return (
            <div className="CurrentPriceContainer">
                <pre>{JSON.stringify(this.props)}</pre>
                <button onClick={this.fetchCurrentPrice}>Test redux action</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {isLoading, currencyRates } = state.currentPrice.toJS();
    return {
        currencyRates,
        isLoading
    };
};
CurrentPriceContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    fetchCurrentPrice: PropTypes.func.isRequired,
};
export default compose(connect(mapStateToProps, {fetchCurrentPrice}))(CurrentPriceContainer);
