import {CURRENT_PRICE_FETCH} from "../constants";
import { fromJS } from 'immutable';

const initialState = {
  isLoading: false,
  currencyRates: {},
};
export const currentPrice = (state = fromJS(initialState), action = {}) => {
  switch (action.type) {
    case CURRENT_PRICE_FETCH.PENDING: {
      return {
        isLoading: true,
      };
    }
    case CURRENT_PRICE_FETCH.SUCCESS: {
      return {
        currencyRates: action.payload,
        isLoading: false,
      };
    }
    case CURRENT_PRICE_FETCH.FAIL: {
      return {
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
