import {asyncActionType} from "../../sharedConstants";

export const CURRENT_PRICE_ENDPOINT = `https://api.coindesk.com/v1/bpi/currentprice.json`;

const namespace = 'Spectro/CurrentPrice';

export const CURRENT_PRICE_FETCH = asyncActionType(namespace, 'fetchCurrentPrice');
