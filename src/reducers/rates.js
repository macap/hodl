import { FETCH_CURRENT_RATES, FETCH_HISTORICAL_RATES } from '../actions/rates';

const defaultRatesState = {
  current: {
    rate: null,
    updated: null,
  },
  historical: {
    start: null,
    end: null,
    currency: null,
    data: [],
  },
};

const rates = (state = defaultRatesState, action) => {
  switch (action.type) {
    case `${FETCH_CURRENT_RATES}_SUCCESS`:
      return {
        ...state,
        current: {
          rate: action.payload.data.bpi.PLN.rate,
          updated: new Date(action.payload.data.time.updatedISO),
        },
      };
    case `${FETCH_HISTORICAL_RATES}_SUCCESS`:
      return {
        ...state,
        historical: {
          currency: 'PLN', start: null, end: null, data: action.payload.data.bpi,
        },
      };
    default:
      return state;
  }
};

export default rates;
