
export const FETCH_CURRENT_RATES = 'FETCH_CURRENT_RATES';
export const FETCH_HISTORICAL_RATES = 'FETCH_HISTORICAL_RATES';

export const fetchCurrentRates = () => (
  {
    type: FETCH_CURRENT_RATES,
    payload: {
      request: {
        url: 'currentprice/PLN.json',
        method: 'GET',
      },
    },
  }
);

export const fetchHistorcalRates = (from = '2017-12-01', to = '2018-03-29') => (
  {
    type: FETCH_HISTORICAL_RATES,
    payload: {
      request: {
        url: `historical/close.json?start=${from}&end=${to}&currency=PLN`,
        method: 'GET',
      },
    },
  }
);
