export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export const addTransaction = (date, value, cost) => (
  {
    type: ADD_TRANSACTION,
    payload: {
      date,
      value,
      cost,
    },
  }
);
