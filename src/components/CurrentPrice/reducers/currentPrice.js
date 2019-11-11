import {CURRENT_PRICE_FETCH} from "../constants";
import { fromJS } from 'immutable';

const initialState = {
  isLoading: false,
  currencyRates: {},
};
export const currentPrice = (state = fromJS(initialState), action = {}) => {
  switch (action.type) {
    case CURRENT_PRICE_FETCH.PENDING: {
      return state.merge({
        isLoading: true,
      });
    }
    case CURRENT_PRICE_FETCH.SUCCESS: {
      const payload = action.payload;
      return state.merge({
        currencyRates: payload,
        isLoading: false,
      });
    }
    case CURRENT_PRICE_FETCH.FAIL: {
      return fromJS(initialState);
    }
    default:
      return state;
  }
};
