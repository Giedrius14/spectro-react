import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './CurrentPrice.css';

import {fetchCurrentPrice} from './actions'

class CurrentPriceContainer extends Component {

    componentDidMount() {
        this.props.fetchCurrentPrice();
    }

    fetchCurrentPrice = () => {
        this.props.fetchCurrentPrice();
    };

    render() {
        return (
            <div className="CurrentPriceContainer">
                <pre>{JSON.stringify(this.props)}</pre>
                <button onClick={this.fetchCurrentPrice}>Test redux action</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currencyRates, isLoading} = state.currentPrice;
    return {
        currencyRates,
        isLoading
    };
};
CurrentPriceContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    fetchCurrentPrice: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, {fetchCurrentPrice})(CurrentPriceContainer);
